(function () {
  "use strict";

  const config = window.SITE_CONFIG || {};
  const body = document.body;
  const beats = Array.from(document.querySelectorAll(".beat"));
  const presentButtons = Array.from(document.querySelectorAll("#present-button, [data-enter-presentation]"));
  const previousButton = document.getElementById("previous-beat");
  const nextButton = document.getElementById("next-beat");
  const exitButton = document.getElementById("exit-presentation");
  const beatTitle = document.getElementById("beat-title");
  const beatNumber = document.getElementById("beat-number");
  const beatTotal = document.getElementById("beat-total");
  const progressBar = document.getElementById("progress-bar");
  const questionButton = document.getElementById("question-form-button");
  const websiteTwoButton = document.getElementById("website-two-button");
  const questionQr = document.getElementById("question-qr");

  let currentBeat = 0;
  let touchStartX = null;
  let touchStartY = null;

  function isPresentationMode() {
    return body.classList.contains("presentation-mode");
  }

  function nearestVisibleBeat() {
    const centre = window.scrollY + window.innerHeight / 2;
    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    beats.forEach((beat, index) => {
      const rect = beat.getBoundingClientRect();
      const beatCentre = window.scrollY + rect.top + rect.height / 2;
      const distance = Math.abs(beatCentre - centre);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    return bestIndex;
  }

  function updateUrl(mode, index) {
    const url = new URL(window.location.href);
    if (mode === "present") {
      url.searchParams.set("mode", "present");
      url.searchParams.set("beat", String(index + 1));
      url.hash = beats[index].id ? beats[index].id : "";
    } else {
      url.searchParams.delete("mode");
      url.searchParams.delete("beat");
      url.hash = beats[index].id ? beats[index].id : "";
    }
    window.history.replaceState({ mode, index }, "", url);
  }

  function showBeat(index, options) {
    const settings = Object.assign({ updateHistory: true, focus: false }, options);
    currentBeat = Math.max(0, Math.min(index, beats.length - 1));

    beats.forEach((beat, beatIndex) => {
      const active = beatIndex === currentBeat;
      beat.classList.toggle("is-active", active);
      beat.setAttribute("aria-hidden", active ? "false" : "true");
    });

    const activeBeat = beats[currentBeat];
    beatTitle.textContent = activeBeat.dataset.title || `Beat ${currentBeat + 1}`;
    beatNumber.textContent = String(currentBeat + 1);
    beatTotal.textContent = String(beats.length);
    previousButton.disabled = currentBeat === 0;
    nextButton.disabled = currentBeat === beats.length - 1;
    progressBar.style.width = `${((currentBeat + 1) / beats.length) * 100}%`;

    if (settings.updateHistory) {
      updateUrl("present", currentBeat);
    }

    activeBeat.scrollTop = 0;
    document.title = `${activeBeat.dataset.title || "Presentation"} · Agentic AI`;

    if (settings.focus) {
      activeBeat.setAttribute("tabindex", "-1");
      activeBeat.focus({ preventScroll: true });
    }
  }

  function enterPresentation(index) {
    currentBeat = typeof index === "number" ? index : nearestVisibleBeat();
    body.classList.add("presentation-mode");
    beats.forEach((beat) => beat.setAttribute("aria-hidden", "true"));
    showBeat(currentBeat, { updateHistory: true, focus: true });
  }

  function exitPresentation() {
    const activeBeat = beats[currentBeat];
    body.classList.remove("presentation-mode");
    beats.forEach((beat) => {
      beat.classList.remove("is-active");
      beat.removeAttribute("aria-hidden");
      beat.removeAttribute("tabindex");
    });
    document.title = "Agentic AI for Translators & Interpreters";
    updateUrl("read", currentBeat);
    window.requestAnimationFrame(() => {
      activeBeat.scrollIntoView({ block: "start" });
    });
  }

  function nextBeat() {
    if (currentBeat < beats.length - 1) {
      showBeat(currentBeat + 1, { focus: true });
    }
  }

  function previousBeat() {
    if (currentBeat > 0) {
      showBeat(currentBeat - 1, { focus: true });
    }
  }

  function isInteractiveTarget(target) {
    return Boolean(target.closest("a, button, input, textarea, select, summary, details, [contenteditable='true']"));
  }

  function handleKeydown(event) {
    if (!isPresentationMode()) {
      return;
    }

    const interactive = isInteractiveTarget(event.target);
    const key = event.key;

    if (key === "Escape") {
      event.preventDefault();
      exitPresentation();
      return;
    }

    if (interactive) {
      return;
    }

    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(key)) {
      event.preventDefault();
      nextBeat();
    } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(key)) {
      event.preventDefault();
      previousBeat();
    } else if (key === "Home") {
      event.preventDefault();
      showBeat(0, { focus: true });
    } else if (key === "End") {
      event.preventDefault();
      showBeat(beats.length - 1, { focus: true });
    }
  }

  function handleTouchStart(event) {
    if (!isPresentationMode() || event.touches.length !== 1) {
      return;
    }
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    if (!isPresentationMode() || touchStartX === null || touchStartY === null || event.changedTouches.length !== 1) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    touchStartX = null;
    touchStartY = null;

    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        nextBeat();
      } else {
        previousBeat();
      }
    }
  }

  function enableConfiguredLink(element, url, text) {
    if (!element || !url) {
      return;
    }
    element.href = url;
    element.classList.remove("is-disabled");
    element.removeAttribute("aria-disabled");
    if (text) {
      element.textContent = text;
    }
  }

  function applyConfig() {
    enableConfiguredLink(questionButton, config.questionFormUrl, "Submit a question ↗");
    enableConfiguredLink(websiteTwoButton, config.websiteTwoUrl, "Continue to Website 2 →");

    if (config.questionQrImage && questionQr) {
      questionQr.innerHTML = "";
      const image = document.createElement("img");
      image.src = config.questionQrImage;
      image.alt = "QR code for the private audience question form";
      questionQr.appendChild(image);
    }
  }

  async function copyPrompt(button) {
    const promptContainer = button.closest("[data-agent-prompt]");
    const promptText = promptContainer?.querySelector("[data-prompt-text]");
    const prompt = promptText?.textContent.trim() || "";
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt);
    } catch (error) {
      const temporary = document.createElement("textarea");
      temporary.value = prompt;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.appendChild(temporary);
      temporary.select();
      document.execCommand("copy");
      temporary.remove();
    }
    const original = button.textContent;
    button.textContent = "Copied";
    window.setTimeout(() => {
      button.textContent = original;
    }, 1500);
  }

  presentButtons.forEach((button) => button.addEventListener("click", () => enterPresentation()));
  previousButton.addEventListener("click", previousBeat);
  nextButton.addEventListener("click", nextBeat);
  exitButton.addEventListener("click", exitPresentation);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("touchstart", handleTouchStart, { passive: true });
  document.addEventListener("touchend", handleTouchEnd, { passive: true });

  document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", () => copyPrompt(button));
  });

  document.querySelectorAll(".config-link.is-disabled").forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  applyConfig();
  beatTotal.textContent = String(beats.length);

  const parameters = new URLSearchParams(window.location.search);
  if (parameters.get("mode") === "present") {
    const requestedBeat = Number.parseInt(parameters.get("beat"), 10);
    const index = Number.isFinite(requestedBeat) ? requestedBeat - 1 : 0;
    enterPresentation(Math.max(0, Math.min(index, beats.length - 1)));
  }
})();
