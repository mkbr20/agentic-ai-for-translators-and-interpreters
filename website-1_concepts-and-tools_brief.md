# Brief — Website 1: "Agentic AI for Translators & Interpreters" (the presentation site)

## What this document is

This is a **briefing document**, not a finished specification. It gives you (the agent) the context, intent, and requirements for a website I need built. Read it, then propose a structure and ask me about anything marked as open before you start building. Where I've left a decision to you, use good judgment and tell me what you chose.

Note: this website itself is an example of the thing it teaches. It was commissioned as a live demonstration of building tools with an agent, so lean into that where it helps — e.g. it's fine for the page to note, lightly, that it was built with an agent in a short sitting.

---

## Context

I'm running a **2-hour live webinar tonight for ~155 interpreters and translators** (professional body: AUSIT). This website **replaces the PowerPoint**. I'll screen-share it and navigate through it live to teach the core concepts, then use it as a reference the audience can return to afterwards.

**The audience:**
- Professional interpreters and translators. Smart, but **non-technical when it comes to AI**. Assume they do **not** know what an "agent" is.
- Attitudes range from AI-curious to AI-anxious. Many quietly worry AI will replace them. The framing must counter that: this is about **T&I professionals gaining the power to build their own tools**, not being replaced by AI that does their translating.
- Analogies from language and translation work land well with this crowd (they already ground translation quality in things like skopos theory; systems design has its own intellectual lineage — see below).

**What the site must make people feel:** *agency and possibility* — "I can build anything I want." That's the emotional through-line of the whole session, and this page is where it starts.

---

## What the site needs to contain

Roughly these sections, in an order that builds understanding. Exact structure is yours to propose.

**1. Opening / hook.** Reframe the premise: AI isn't (only) a thing that replaces translators — it's a thing translators can *build with*. Set up the possibility. Show, briefly, that non-programmers can now make real tools (dictionaries, term bases, alignment tools, OCR, CAT tools) for themselves.

**2. What is an agent? — the "model + harness" metaphor.** This is the central mental model. An agent = a **model** (the LLM — the brain/engine) inside a **harness** (the wraparound that gives it hands: file access, tools, memory, and the ability to work in steps rather than one reply). Name concrete examples of harnesses/products: **Claude / Claude Cowork**, **ChatGPT / Codex**, **Google Gemini / Antigravity**. Keep the explanation plain and visual.

**3. Chatbot vs. agent — the shift in how you prompt.** Contrast talking to a chatbot (a conversation; one turn at a time; you steer constantly) with directing an agent (you specify what you want; it plans and executes across many steps). This is where "systems design thinking" enters.

**4. Systems design thinking — the method (the heart of it).** The deliberate process for building with agents, as opposed to *"vibe coding"* (prompting blind, burning tokens, endlessly patching things that a little planning would have avoided). Present the method as a sequence the audience can actually follow:
- **Context engineering** — getting clear on what you actually want. (One powerful move: let the agent *interrogate you* until the requirements are surfaced — the "grill me" pattern.)
- **PRD (Product Requirements Document)** — a short blueprint: what the tool does, user stories, what "done" looks like.
- **Task decomposition** — breaking the build into small "tickets" / vertical slices, each doable in one focused sitting.
- **Implementation** — building stage by stage, testing as you go.

Include a *light* touch of intellectual grounding so it doesn't feel invented-yesterday — this method is old, just applied to a new tool. Keep each to a sentence; do **not** turn this into a literature review:
- **David Parnas (1972)** — decompose systems by *information hiding*: build modules that hide their complexity so you can change one without breaking the rest.
- **Fred Brooks, *The Mythical Man-Month*** — design the architecture before you build; keep architecture separate from implementation.
- **Ludwig von Bertalanffy, *General System Theory*** — a system is parts in interaction; you understand it by how the parts relate, not piece by piece.

**5. Tool comparison — practical decision support.** A clear comparison of **Claude / Cowork**, **ChatGPT / Codex**, **Google Gemini / Antigravity**, and an **"Other"** catch-all. The stance is *not* "pick the one perfect tool" — it's "here's how they differ; try them and find what fits you." But people need enough to choose sensibly. Compare across at least:
- **Pricing** and **subscription model** (free tier vs. paid; roughly what things cost).
- **Data security & privacy** — where does your data go, who can see it, what's retained. This matters a lot to this audience (they handle confidential legal/medical/commercial material).
- **How it runs** — e.g. **Claude Cowork runs on a virtual machine**, i.e. a sandboxed environment isolated from your own computer; explain "virtual machine / sandbox" in plain terms, since the audience won't know it. Contrast with tools where your prompts simply go to the provider's servers.
- **What each is actually good at.**
- **How you access it** (subscription, app, etc.).

Two practical cautions for you: (a) I'm **new to a lot of this**, so treat the comparison as a best-effort starting point that will need correcting — build it so it's **easy to update**; (b) some of these facts (prices, features) **go stale fast**, so don't present them as gospel.

**6. Question submission.** A **form where the audience can submit questions I can't answer live**. I fully expect questions I won't know the answers to — I want to capture them, research them afterwards, and follow up. Submissions need to **aggregate somewhere I can access** after the session.

**7. Closing / what's next.** This is **iteration one of a series**, not a one-off. Normalise the struggle to come — everyone is *"crossing the river by feeling the stones."* Point to a follow-up session where we debug real problems together. (The live emotional beats — asking the room "what tool would be most useful to *you* right now?", and a closing call to build — I'll deliver verbally; the page just needs to support them, e.g. a spot to note what they'll build next. See open questions.)

---

## How it will be used (behavioural requirements)

- **Navigable live, like slides but a webpage.** I move through it in front of an audience. Either a single long scroll with clear section anchors, or section-by-section navigation — your call, but it must feel controlled and unhurried when presented.
- **Projectable / screen-shared to ~155 people.** Large, legible type; high contrast; nothing that depends on tiny detail or hover.
- **The question form must persist submissions** somewhere I can retrieve them later.
- **Built quickly** (before tonight) and **easy for me to edit** afterwards.

---

## Tone & style direction

Empowering, clear, warm, professional. **Demystifying, not hype.** No breathless AI-marketing voice. I'm a translator talking to translators — plain language, concrete examples, the occasional analogy from language/translation work. Visual design is your call; aim for calm, readable, and confidence-inspiring rather than flashy.

---

## Open questions / decisions for you to flag or make

- **Question-form + submission storage:** what's the simplest mechanism that keeps my data private and lets me retrieve entries later? Propose an option (and a no-external-service fallback) rather than assuming.
- **Single scroll vs. sectioned navigation** for live presenting — recommend one.
- **The "what will you build next?" capture** at the end — should this be part of *this* site's question form, or does it belong on Website 2 (the build site, which already has a submission portal)? Flag your recommendation.
- **How current to make the tool-comparison facts** — where you're unsure of a price or feature, mark it clearly as "check current" rather than guessing.
