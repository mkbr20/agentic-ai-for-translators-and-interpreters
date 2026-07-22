# Brief — Website 2: "Build Your Own Electronic Dictionary" (the breakout-room build site)

## What this document is

This is a **briefing document**, not a finished specification. It gives you (the agent) the context, intent, and requirements for a website I need built. Read it, then propose a structure and ask me about anything marked as open before you start building. Where I've left a decision to you, use good judgment and tell me what you chose.

**Important:** I may build this site **live in front of the audience** as the session's demonstration — the audience then uses the very site I just built to do their own builds. So the build should be clean and demonstrable, and I also want a **finished backup version** in case the live build runs into trouble. Bear both in mind.

---

## Context

Same webinar as Website 1: a **2-hour live session for ~155 interpreters and translators**. After I teach the concepts (using Website 1) and demonstrate the method, participants **break into rooms and build their own tool** by following *this* site. Then a few results get showcased at the end.

**How the breakout works (so the site can be self-sufficient):**
- Roughly **120 people across ~12 rooms of ~10**, grouped **by the tool they're using** — e.g. **Claude**, **ChatGPT**, **Codex**, **Google (Gemini)**, and an **"Other"** room. (People who can't or don't want to use a tool watch me run a parallel build instead.)
- **I will not be in the rooms.** Rooms rely on **peer support**. So this site must stand entirely on its own — clear enough that a room of ten people, some of them complete beginners, can follow it without a facilitator.
- Because rooms differ by tool, the instructions must be **tool-agnostic** — the same guide has to work whether someone's in Claude, ChatGPT, Codex, or Gemini.

**The goal is not really a dictionary.** The goal is the feeling *"I can build anything I want."* The dictionary is the vehicle for practising the method.

---

## What participants build

An **electronic dictionary generated from a PDF** — e.g. take a glossary / terminology PDF and turn it into a working, searchable electronic dictionary. It's a good demo build because it's genuinely useful to translators and can be done in ~15–20 minutes at the basic level.

**Three difficulty tracks** — participants pick their level:
- **Easy:** PDF → a working, searchable electronic dictionary (single language pair).
- **Medium:** same, but **multi-language**.
- **Hard:** multi-language, **plus deploy it to GitHub**, **plus get it onto your phone** as an app (e.g. an installable/"add to home screen" web app).

---

## What the site needs to contain

Roughly these sections. Exact structure is yours to propose.

**1. Intro — what you'll build and why it matters.** Short and motivating: you're about to make a real tool that's *yours*, that you built. Set expectations (you'll pick a difficulty level; it's normal to hit snags; ask your room).

**2. Before you start.** What you need: access to your room's AI tool, and a source PDF (state whether I'm providing a sample glossary PDF or they bring their own — **see open questions**). Reassure beginners: if something breaks, that's expected — ask the room, ask the agent to explain or fix it.

**3. The method, applied to this build.** Walk them through the same four steps taught in the main session, but concretely, as they build. This is the real payload — they should *practise the thinking*, not just paste a recipe:
- **Context engineering** — get clear on what your dictionary needs to do. (Suggest they let the agent *interrogate them* first — the "grill me" pattern — to surface requirements.)
- **PRD** — a short spec: input (the PDF), what the dictionary does, what the output looks like.
- **Task decomposition** — break it into tickets, e.g.: parse the PDF → extract the terms → structure the data → build the interface → make it searchable. Each ticket is one focused step.
- **Implementation** — build ticket by ticket, testing as you go.

**4. The three tracks (Easy / Medium / Hard).** Clearly separated, pick-your-level. For each, outline the additional tickets involved (Medium adds language handling; Hard adds GitHub deployment and the phone/PWA step). Keep the extra steps skimmable.

**5. Starter prompts.** Example opening prompts they can adapt, written **tool-agnostically**. This is the single most valuable thing for nervous beginners — give them a running start for context engineering, for asking the agent to write the PRD, and for kicking off implementation.

**6. When you get stuck.** Normalise it. Suggest: ask your room; ask the agent to explain the error or propose a fix; and **log the blocker for the follow-up session** (this session is iteration one of a series — we debug real problems next time).

**7. Submission / showcase.** A **portal where participants paste their finished dictionary** (a link, or the content) and it **auto-aggregates into a gallery** I can browse and pull a few examples from to showcase at the end. This needs to work smoothly and store submissions somewhere I can access live during the session.

---

## How it will be used (behavioural requirements)

- **Fully self-service.** Usable by a leaderless room of ten, beginners included, with no facilitator present.
- **Tool-agnostic** instructions and prompts.
- **Three clearly navigable difficulty tracks.**
- **A submission portal that auto-aggregates entries into a viewable gallery**, retrievable by me during and after the session.
- **Demonstrable as a live build**, and also delivered as a **finished backup**.

---

## Tone & style direction

Encouraging, practical, plain-spoken. Written for smart non-programmers who may be nervous. Short steps, generous reassurance, concrete prompts. **Struggle is framed as normal**, not failure — *"crossing the river by feeling the stones."* Visual design is your call; prioritise clarity and calm over polish.

---

## Open questions / decisions for you to flag or make

- **Source PDF:** am I supplying a standard sample glossary PDF (simplest — everyone starts from the same place), or do participants bring their own? Recommend an approach; if a sample is best, note that I'll need to provide one.
- **Submission portal + gallery storage:** what's the simplest mechanism that lets ~100 people submit and lets me view an aggregated gallery live? Propose an option **and** a no-external-service fallback rather than assuming.
- **"What will you build next?" capture:** I want an end-of-session commitment prompt somewhere (people note the tool they'll build next). Should it live here alongside the submission portal, or on Website 1? Recommend one.
- **How much to prescribe vs. leave open in the build steps:** enough scaffolding that beginners don't stall, but not so much that it becomes copy-paste-without-thinking. Flag where you've drawn that line.
