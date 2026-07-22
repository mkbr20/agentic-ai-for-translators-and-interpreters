# Agentic AI for Translators & Interpreters

A presentation-first website for Michael Broughton's AUSIT webinar. The same files provide a normal scrolling Reading Mode and a keyboard-controlled Presentation Mode.

## Open the website

- Open `index.html` for Reading Mode.
- Open `launch-presentation.bat` or `present.html` for Presentation Mode.
- In Presentation Mode, use the arrow keys, Page Up, Page Down, Home, End, or the on-screen controls. Press Escape to return to Reading Mode.

All essential presentation content, styles, and scripts are local. External sources, the AUSIT event page, the Google question form, and Website 2 require an internet connection.

## Update the question form or Website 2 links

Open `site-config.js` in a text editor. Paste the Google Form address into `questionFormUrl` and the Website 2 address into `websiteTwoUrl`. When a QR image has been created, save it in the website folder and place its relative filename in `questionQrImage`.

## Update product information

Product information is grouped under the Claude, ChatGPT, and Google Antigravity sections in `index.html`. Keep each factual claim beside its direct official source, update the visible checked date, and do not publish anything the research file labels unverified.

The complete source audit is in `research/tool-comparison-primary-sources.md`.

## Publish with GitHub Pages

Create a public repository named `agentic-ai-for-translators-and-interpreters`, place these files at the repository root, and enable GitHub Pages for the main branch. The site needs no build command.

## Main project documents

- `website-1_concepts-and-tools_brief.md` contains the original brief.
- `CONTEXT.md` contains the shared project language.
- `docs/adr/0001-use-a-simple-static-architecture.md` records the static architecture decision.
- `research/tool-comparison-primary-sources.md` contains the dated primary-source research.
