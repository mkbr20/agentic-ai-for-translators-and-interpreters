# Site factual and link audit: Google Antigravity and other external sources

**Audit date:** 23 July 2026

**File audited:** `index.html`
**Scope:** Every Google Antigravity statement and link, plus every non-vendor external link in the page: the AUSIT event, Andrej Karpathy's X post and MenuGen article, and Matt Pocock's GitHub repository and YouTube video.

## Executive finding

Most of the Antigravity section is careful and factually sound. Its product description, free individual tier, local-agent model, permissions, command-line sandbox distinction, individual data terms, and separate Google Cloud enterprise path all have first-party support.

Four changes are warranted:

1. **Replace two obsolete Matt Pocock skill names.** The current repository uses `to-spec`, not `to-prd`, and `to-tickets`, not `to-issues`. The old specific skill paths return 404, although the site's generic repository links still resolve. ([current skills list](https://github.com/mattpocock/skills#engineering), [to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md), [to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md))
2. **Qualify the site's definition of “vibe coding.”** The current wording describes AI-assisted natural-language software building generally. Karpathy's original post described a more hands-off practice in which the user did not closely inspect generated code. The broader usage is defensible, but it should be identified as broader than the original post. ([original X post](https://x.com/karpathy/status/1886192184808149383?lang=en))
3. **Scope the Antigravity data-setting sentence more precisely.** Google documents recording and storing interactions and possible employee or contractor review. Its Settings page describes the user control as disabling the sharing of interaction logs to improve models. “Users can opt out” on its own can sound like a promise that all storage, review, or operational collection stops. ([additional terms](https://antigravity.google/terms), [settings](https://antigravity.google/docs/settings), [FAQ](https://antigravity.google/docs/faq))
4. **Add the optional-credit warning and tighten the enterprise paragraph.** Pro and Ultra users can elect to spend purchased AI credits after baseline quota is exhausted. Enterprise data residency and zero-data-retention controls are configuration- and feature-dependent, and the currently documented endpoints are global, EU multi-region and US multi-region, not Australia. ([plans and overages](https://antigravity.google/docs/plans), [enterprise setup](https://antigravity.google/docs/enterprise), [zero-data-retention requirements](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention))

## Necessary corrections with exact replacement text

### 1. Current Matt Pocock skills

#### `index.html` lines 253–256: Understand the whole

The skill still exists and the explanation is broadly accurate. The generic repository link works, but a direct skill link is better evidence.

Use:

> **Matt Pocock skill:** `/grill-with-docs`
>
> It interviews you and records shared language and design decisions as you go.

Direct URL: <https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md>

The maintained skill says that it runs a grilling session while using domain modelling, and its description expressly mentions creating architecture decisions and a glossary. ([skill file](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md))

#### `index.html` lines 276–279: Write the blueprint

`to-prd` is no longer a current skill in Matt's repository. The maintained replacement is `to-spec`.

Use:

> **Matt Pocock skill:** `/to-spec`
>
> It turns the agreed conversation and project context into a build blueprint and publishes it to the project tracker.

Direct URL: <https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md>

The current skill synthesises the conversation and codebase into a specification, checks proposed testing seams with the user, and publishes the result to the configured issue tracker. ([skill file](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md))

#### `index.html` lines 299–302: Break it into buildable parts

`to-issues` is no longer a current skill in Matt's repository. The maintained replacement is `to-tickets`.

Use:

> **Matt Pocock skill:** `/to-tickets`
>
> It turns the blueprint into small, testable pieces of work and records which pieces block others.

Direct URL: <https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md>

The current skill creates tracer-bullet vertical slices, makes each slice independently demonstrable or verifiable, and records blocking relationships. ([skill file](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md))

#### `index.html` lines 322–325: Build and check

`implement` remains current. Replace the generic repository link with the direct skill link.

Use:

> **Matt Pocock skill:** `/implement`
>
> It carries out the planned work, tests it, reviews it, and commits the result.

Direct URL: <https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md>

The current skill implements a specification or set of tickets, calls for test-driven development where possible, runs checks, invokes code review, and commits the work. ([skill file](https://github.com/mattpocock/skills/blob/main/skills/engineering/implement/SKILL.md))

**Invocation notation:** Matt's current repository presents these as slash-invoked skills, such as `/to-spec`. If the website deliberately uses Codex-specific notation such as `$to-spec`, label it as “In Codex” so it is not mistaken for Matt's cross-harness invocation syntax. ([repository reference](https://github.com/mattpocock/skills#reference))

### 2. Vibe coding definition

#### `index.html` lines 201–205

The existing wording is a reasonable description of the term's broad present-day use, but it is looser than the linked original source. Karpathy's post described giving the model ordinary-language directions, accepting changes without reading diffs closely, running the result, and feeding errors back to the model. The site's planned, specification-led method is more structured than that original example. ([original post](https://x.com/karpathy/status/1886192184808149383?lang=en))

Use:

> Vibe coding is a term used for creating software by describing what you want in ordinary language and letting AI write much of the code. In Andrej Karpathy's original post, it described a particularly hands-off version in which the person did not closely inspect the generated code. We are using the term more broadly here for building with AI through ordinary language, but with a map and checkpoints.

This preserves the presenter's intended statement that the workshop is vibe coding while accurately distinguishing it from the narrower original example.

### 3. Antigravity individual access

#### `index.html` lines 575–577

The underlying claim is substantially correct. Google lists the individual tier at `$0/month`, says all plans receive access to all product features, and gives users without Pro or Ultra a weekly-refreshed quota. Its FAQ says personal accounts are supported only in approved geographies, expressly lists Australia, and says Antigravity is unavailable to users under 18. Calling a zero-dollar price “US$0” is unnecessary because the source says simply `$0/month` and zero has no currency-conversion issue. ([pricing](https://antigravity.google/pricing), [plans](https://antigravity.google/docs/plans), [FAQ](https://antigravity.google/docs/faq))

Use:

> Antigravity is available at no charge for personal Google accounts in approved countries, including Australia, for users aged 18 or over. All plans include the product's features, with different model availability and rate limits; users without Pro or Ultra receive a weekly-refreshed baseline quota.

Use both direct sources:

- Plans: <https://antigravity.google/docs/plans>
- Eligibility and geography: <https://antigravity.google/docs/faq>

### 4. Antigravity capabilities and evidence link

#### `index.html` lines 580–582

The claim is verified: agents can read and write project files, execute commands, read and act on web pages through browser tooling, and call MCP tools. The existing permissions link supports the action and approval model, but the MCP connection claim is supported more directly by the MCP page, which says remote APIs can supply context or execute tools. ([permissions](https://antigravity.google/docs/permissions), [browser overview](https://antigravity.google/docs/ide/browser), [MCP](https://antigravity.google/docs/mcp))

Keep the wording, but place two links beside it:

- Official permissions: <https://antigravity.google/docs/permissions>
- Official MCP guide: <https://antigravity.google/docs/mcp>

### 5. Paid plans and optional overage

#### `index.html` lines 585–587

The statement that Google AI Pro and Ultra provide higher Antigravity limits is correct. Google also documents an optional overage mechanism that is material to the site's practical pricing explanation: after a particular model's baseline quota is exhausted, Pro or Ultra users can choose whether purchased AI credits are used. `Never` waits for quota refresh; `Always` spends credits automatically and returns to baseline usage after refresh. Google says the credits are consumed at standard Gemini Enterprise Agent Platform consumption pricing. ([plans and overages](https://antigravity.google/docs/plans))

Use:

> Google AI Pro and Ultra provide higher Antigravity limits. After a model's baseline quota is exhausted, users on those plans can choose whether purchased AI credits are used for overage. “Never” waits for the quota to refresh; “Always” spends credits automatically. Check the current Google AI checkout page for the subscription price.

Links:

- Antigravity limits and overage: <https://antigravity.google/docs/plans>
- Current Google AI plans: <https://one.google.com/about/google-ai-plans/>

The current Google AI plan page is dynamically localised. It verifies that Pro has expanded Antigravity limits and Ultra has the highest limits, but it is not a stable source for quoting one universal Australian-dollar price in static site copy. ([Google AI plans](https://one.google.com/about/google-ai-plans/))

### 6. Antigravity data wording

#### `index.html` lines 604–608

The first two sentences accurately reflect Google's individual additional terms: the service records and stores user, interaction, metadata, and feedback data while it runs; interactions may be used for improvement; and employees or contractors may access and review them. The terms say a user can change the relevant data-use preference in Settings. The Settings page describes this control as toggling Telemetry, meaning sharing interaction logs to improve models. The FAQ calls it an opt-out from data collection. Because those descriptions differ in breadth, the site should use the narrower, observable settings description instead of a blanket “Users can opt out.” ([terms](https://antigravity.google/terms), [settings](https://antigravity.google/docs/settings), [FAQ](https://antigravity.google/docs/faq))

Use:

> For personal-account use, Google says Antigravity records and stores user data, interaction data, metadata, and feedback while the service runs. Interactions may be used to improve Google products and machine-learning technologies, and employees or contractors may review them. In Settings, users can disable sharing interaction logs to improve models.
>
> Google's personal-account terms provide a deletion-request route but do not state a fixed deletion or retention period, and the checked pages do not promise that processing stays in Australia. MCP connections can send context to remote APIs or execute their tools, so check each connected service before sharing client material.

The sentence about MCP is an inference from the documented data path, not a quotation of a Google privacy promise. The MCP page documents access to remote APIs, live schemas, build logs, and external actions; the terms of each connected service must be checked separately. ([MCP data paths](https://antigravity.google/docs/mcp))

### 7. Organisational use, residency and retention

#### `index.html` lines 613–617

The current paragraph is directionally correct but too compressed. Google's public organisation plan connects Antigravity 2.0 or Antigravity CLI to Gemini Enterprise Agent Platform in the customer's Google Cloud project under Google Cloud terms. Antigravity IDE is not supported for that integration. Google documents consumption-based billing, private-networking support and location controls, but currently lists only `global`, EU multi-region and US multi-region endpoints. It does not list an Australian endpoint. ([enterprise setup](https://antigravity.google/docs/enterprise))

Google also says it does not train managed models on customer data without permission or instruction, but zero data retention is not automatic. Customers must configure relevant features, and some features log or retain data or cannot support zero retention. ([zero-data-retention requirements](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention))

Use:

> Organisations can connect Antigravity 2.0 or Antigravity CLI to Gemini Enterprise Agent Platform in their own Google Cloud project under Google Cloud terms. Google documents consumption-based billing, private networking, and selectable data locations; the currently listed endpoints are global, EU multi-region, and US multi-region. Antigravity IDE is not supported for this enterprise integration. Zero data retention is not automatic and depends on the models, features, and configuration used.

Links:

- Enterprise integration: <https://antigravity.google/docs/enterprise>
- Canonical retention page: <https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention>

Replace the site's older retention URL, `https://docs.cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention`, with the canonical URL above. The old link currently redirects and is not broken, but the canonical path now reflects the renamed Gemini Enterprise Agent Platform documentation.

Google's individual additional terms also say they do not apply when the service is accessed through specified administrator-governed Gemini Enterprise, Gemini Enterprise for Business, or qualifying Google Workspace arrangements. This further supports avoiding the absolute sentence “The individual product is not the organisational offering.” ([Antigravity additional terms](https://antigravity.google/terms))

## Verified Antigravity statements that can remain

- **Product identity:** Google calls Antigravity its “agentic development platform.” It describes Antigravity 2.0 as a command centre for managing multiple local agents in parallel, grouping conversations into projects, operating across workspaces, and scheduling messages. The site's product summary is accurate. ([product page](https://antigravity.google/))
- **Download link:** The linked page provides current Antigravity 2.0 downloads for macOS, Windows and Linux, plus CLI, IDE and SDK installation paths. ([download](https://antigravity.google/download))
- **Free tier:** Google's public pricing page lists an individual plan at `$0/month`; the home page says the product is available at no charge. ([pricing](https://antigravity.google/pricing), [product page](https://antigravity.google/))
- **Local work model:** Projects can include one or more local folders or repositories, and Local Mode operates directly in those folders. New Worktree Mode uses an isolated Git worktree. ([getting started](https://antigravity.google/docs/getting-started))
- **Permissions:** Workspace file reads and writes are auto-allowed by default, while commands, MCP actions, interactive web actions and non-workspace files default to Ask unless configured otherwise. Deny has precedence over Ask and Allow. ([permissions](https://antigravity.google/docs/permissions))
- **Browser:** Antigravity can open, read and act on a local Chrome browser, and its browser integration uses a separate Chrome profile. ([browser overview](https://antigravity.google/docs/ide/browser), [separate profile](https://antigravity.google/docs/ide/separate-chrome-profile))
- **CLI sandbox:** The CLI sandbox uses native operating-system isolation: `nsjail` on Linux, `sandbox-exec` on macOS and AppContainer on Windows. The CLI setting defaults to `false`; it is not a separate virtual machine or heavy container. ([CLI sandbox](https://antigravity.google/docs/cli/sandbox))
- **Surface distinction:** Antigravity 2.0's permissions page says terminal sandboxing is in preview on macOS/Linux and coming to Windows, whereas the CLI sandbox page documents Windows AppContainer support. The site's warning not to generalise one surface's sandbox to every surface is justified. ([Antigravity 2.0 permissions](https://antigravity.google/docs/permissions), [CLI sandbox](https://antigravity.google/docs/cli/sandbox))
- **Individual data terms:** The recording/storage, improvement-use, human-review, deletion-request and settings-preference claims are supported when expressly limited to personal-account use under the individual additional terms. ([terms](https://antigravity.google/terms))
- **No stated personal retention period or Australian-processing guarantee:** The checked individual terms, settings, FAQ, plans and product pages do not state either guarantee. The absence should continue to be presented as “not established by the checked sources,” not as proof that data is kept indefinitely or necessarily processed in a particular other country.

## Official-source conflict: do not add a model-access claim

Google's current public pricing page says the `$0/month` individual plan includes several third-party models, while the current plans documentation says only Ultra users receive access to third-party models. These first-party pages are inconsistent as checked on 23 July 2026. ([pricing](https://antigravity.google/pricing), [plans](https://antigravity.google/docs/plans))

The website currently avoids listing models for the free tier, which is the correct choice. Do not add a fixed claim about which third-party models are included until Google resolves the inconsistency. “Model availability varies by plan; check the live plans page” is safe.

## Non-vendor link audit

| Site link | Result on 23 July 2026 | Does it support the nearby wording? | Action |
|---|---|---|---|
| [AUSIT event page](https://office.ausit.org/event-6748203) | Resolves successfully to the AUSIT page titled “AUSIT NAT Presents: Exploring Agentic AI for Translators and Interpreters (Webinar).” | Yes. It is the exact event page. The event occurred on 22 July 2026 and the page remains available. | Keep. |
| [Andrej Karpathy's X post](https://x.com/karpathy/status/1886192184808149383?lang=en) | Resolves successfully to Karpathy's original post introducing the phrase “vibe coding.” | Yes for “original post”; only partly for the site's broad definition. | Keep link; qualify the definition as described above. |
| [MenuGen article](https://karpathy.bearblog.dev/vibe-coding-menugen/) | Resolves successfully to Karpathy's “Vibe coding MenuGen” article. | Yes. Karpathy identifies MenuGen as his first end-to-end vibe-coded app and says the code was written by Cursor and Claude. | Keep. |
| [Matt Pocock skills repository](https://github.com/mattpocock/skills) | Resolves successfully. | Yes for the general attribution, but no for two displayed current skill names: `to-prd` and `to-issues` have been replaced by `to-spec` and `to-tickets`. | Keep the general thanks link; use direct current links for each method card. |
| [Matt Pocock YouTube video](https://www.youtube.com/watch?v=M6mYodf0dJM) | Resolves successfully. YouTube metadata identifies it as “mattpocock/skills: A complete AI Coding workflow, end-to-end” by Matt Pocock. | Yes. It is directly about the linked skills workflow. Whether it personally introduced the presenter to the ideas is autobiographical and cannot be independently audited. | Keep. |

## Google and Antigravity link audit

| Link in site | Resolution | Source fit |
|---|---|---|
| <https://antigravity.google/download> | Resolves | Correct download page. |
| <https://antigravity.google/pricing> | Resolves | Correct live Antigravity tier comparison. |
| <https://antigravity.google/docs/plans> | Resolves | Supports quotas, plan differences and optional credit overage. |
| <https://antigravity.google/docs/permissions> | Resolves | Supports file, command, URL, browser-action and MCP permissions. |
| <https://one.google.com/about/google-ai-plans/> | Resolves and localises dynamically | Supports Pro/Ultra Antigravity-limit differences; use as live checkout rather than a static universal price source. |
| <https://antigravity.google/docs/settings> | Resolves | Supports the Telemetry control and hierarchical settings. |
| <https://antigravity.google/docs/cli/sandbox> | Resolves | Supports native OS containment and default-off CLI sandbox. |
| <https://antigravity.google/terms> | Resolves | Supports personal-account collection, use, review, deletion request and separate administrator terms. |
| <https://antigravity.google/docs/mcp> | Resolves | Supports local and remote external-tool connections and their permissions. |
| <https://antigravity.google/docs/enterprise> | Resolves | Supports Google Cloud project integration, billing, network/location controls and product limitations. |
| <https://docs.cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention> | Redirects to the renamed canonical page | Not broken, but replace with <https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention>. |

## Claims that remain unverified or should not be made

- A fixed retention or deletion-completion period for personal Antigravity interactions.
- A promise that personal Antigravity content is stored or processed in Australia.
- An Australian Google Cloud endpoint for the currently documented enterprise integration; the enterprise page currently lists only global, EU multi-region and US multi-region endpoints.
- That buying an organisational plan automatically creates zero data retention. Google requires feature-specific configuration and documents exceptions.
- That disabling the model-improvement or Telemetry setting necessarily stops every operational, security, legal, billing or support data flow. The checked Antigravity pages do not establish that broader guarantee.
- A stable list of third-party models included with the free individual tier, because Google's current pricing and plans pages conflict.
- The exact Australian checkout price as a static universal fact. The Google One plan page is localised and can change by account, region, promotion and plan variant.
- “Antigravity is the clearest building-focused environment in this comparison.” This is a reasonable presenter judgement, not a verifiable product fact. It can remain if it is treated as editorial comparison rather than attributed to Google.
- “I learned this way of working from Matt Pocock” and “the video introduced me to these ideas.” These are the presenter's autobiographical statements; external sources can verify the linked materials but not the personal history.

## Recommended final Antigravity copy as one coherent replacement

If the section is easier to update as a block, the following is fully supported by the checked sources:

> **Antigravity 2.0** is Google's agentic development platform and a command centre for managing multiple local agents across projects and workspaces.
>
> **Individual access:** Antigravity is available at no charge for personal Google accounts in approved countries, including Australia, for users aged 18 or over. All plans include the product's features, but model availability and rate limits differ. Users without Pro or Ultra receive a weekly-refreshed baseline quota.
>
> **What it can do:** Agents can read and edit project files, run terminal commands, use browser tools, and connect to local or remote tools through Model Context Protocol servers. Permissions determine which actions are allowed, denied, or require approval.
>
> **Paid plans and overage:** Google AI Pro and Ultra provide higher Antigravity limits. After a model's baseline quota is exhausted, users on those plans may choose whether purchased AI credits are spent automatically for overage.
>
> **Where the work runs:** Antigravity 2.0 can operate directly in local project folders or in an isolated Git worktree. Its command-line sandbox uses native operating-system containment rather than a virtual machine and is off by default. Sandbox availability differs between Antigravity surfaces and operating systems.
>
> **Personal-account data:** Google's additional terms say Antigravity records and stores user data, interaction data, metadata, and feedback while the service runs. Interactions may be used for product and model improvement, and employees or contractors may review them. Settings let users disable sharing interaction logs to improve models. The terms provide a deletion-request route but do not state a fixed retention period, and the checked pages do not promise Australian processing.
>
> **Organisational use:** Organisations can connect Antigravity 2.0 or Antigravity CLI to Gemini Enterprise Agent Platform in their own Google Cloud project under Google Cloud terms. Google documents consumption-based billing, private networking and selectable data locations; the currently listed endpoints are global, EU multi-region and US multi-region. Antigravity IDE is not supported for this integration. Zero data retention depends on the models, features and configuration used.

Primary sources: [product](https://antigravity.google/), [pricing](https://antigravity.google/pricing), [plans](https://antigravity.google/docs/plans), [FAQ](https://antigravity.google/docs/faq), [permissions](https://antigravity.google/docs/permissions), [browser](https://antigravity.google/docs/ide/browser), [CLI sandbox](https://antigravity.google/docs/cli/sandbox), [terms](https://antigravity.google/terms), [MCP](https://antigravity.google/docs/mcp), [enterprise setup](https://antigravity.google/docs/enterprise), and [zero-data-retention requirements](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention).
