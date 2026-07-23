# Full website factual and link audit

**Audit date:** 23 July 2026, Australia/Sydney

**Audited page:** `index.html`, including links inserted by `site-config.js`
**Standard used:** Current first-party vendor documentation for product claims; original sources for attribution and terminology; live browser checks for the configured audience form and rendered site

## Outcome

The page was broadly careful, but it was not fully current or fully precise. The audit found no broken original destination, but it found material wording problems in every product section and two obsolete Matt Pocock skill names. Those issues have been corrected in the working copy.

The original page contained 51 external-link placements covering 43 unique destinations. Every destination was followed and checked for both reachability and whether it supported the nearby statement. The corrected page contains 58 unique external destinations in `index.html`, plus the configured audience-question form, because more direct primary-source links were added beside corrected claims.

One old Google Cloud link still redirected successfully, but it has been replaced with its current canonical destination. The checked date in the page and configuration has been updated from 22 to 23 July 2026.

## Material corrections made

### Method and attribution

- Matt Pocock's maintained workflow now uses `/grill-with-docs`, `/to-spec`, `/to-tickets`, and `/implement`. The page previously displayed the obsolete names `to-prd` and `to-issues`. All four cards now use the current slash notation and link directly to the corresponding skill file in [Matt Pocock's repository](https://github.com/mattpocock/skills#engineering).
- The explanation of vibe coding now distinguishes the term's broad current use from the more hands-off practice described in [Andrej Karpathy's original post](https://x.com/karpathy/status/1886192184808149383?lang=en). The page still describes this workshop as vibe coding, but makes clear that it uses a map and checkpoints.
- The [MenuGen article](https://karpathy.bearblog.dev/vibe-coding-menugen/) remains an appropriate real example. Karpathy identifies it as his first end-to-end vibe-coded application and also describes the difficulties and limitations of the process.

### Claude and Anthropic

- Remote Cowork is no longer described as an unqualified universal default. The page now says it is the default where the beta rollout is available and distinguishes remote execution from local execution available to existing desktop deployments. [Cowork architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)
- Local Claude Code is no longer described as invariably permission-gated. The page now explains that permission modes vary and that its Bash sandbox is operating-system containment, not a virtual machine, and can be configured or bypassed. [Claude Code desktop](https://code.claude.com/docs/en/desktop), [Claude Code sandboxing](https://code.claude.com/docs/en/sandboxing)
- Consumer and commercial training statements now include the relevant safety-review, feedback, and explicit opt-in exceptions. [Consumer training controls](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), [commercial training policy](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training)
- Fable 5's plan treatment is now precise: Pro uses paid credits from the first request and Max includes Fable use for up to 50% of the weekly plan limit. More importantly, the site now discloses that Fable 5 is a Covered Model whose prompts and outputs must be retained for at least 30 days and which cannot be offered with zero data retention. [Fable plan rules](https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan), [Covered Models](https://support.claude.com/en/articles/15425695-covered-models)
- The Team and Enterprise paragraph now states the customer/Anthropic data roles and the documented training and retention exceptions instead of making a broad unsupported statement about human access and third-party processing. [Processor and controller roles](https://privacy.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller), [commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- Direct evidence links were added for regional pricing, Cowork server-side file processing, and the way read files become Claude Code context.

The listed Claude individual prices and the distinction between Cowork and Claude Code were confirmed as accurate on the audit date. All 14 original Claude/Anthropic destinations resolved.

### ChatGPT, Work, and Codex

- Free-plan Work access is no longer presented as settled. Current OpenAI pages conflict: the agentic pricing page lists Work in Free, while newer Work and download pages describe a gradual rollout and name paid plans. The site now confirms Free Codex access but says Work is still rolling out. [Agentic pricing](https://learn.chatgpt.com/docs/pricing), [Work and Codex](https://help.openai.com/en/articles/20001275/), [ChatGPT download](https://chatgpt.com/download/)
- The Go card no longer says regional availability varies. OpenAI says Go is available in all ChatGPT-supported countries; localised checkout currency can still vary. [What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go), [multi-currency billing](https://help.openai.com/en/articles/10421635-multi-currency-billing-faq)
- The execution panel now distinguishes web/mobile cloud Work, cloud Work chats in the desktop app, local desktop chats, local command sandboxing, and Codex cloud containers. It also warns that local chat/file storage does not establish entirely on-device model processing. [Work and Codex](https://help.openai.com/en/articles/20001275/), [sandboxing](https://learn.chatgpt.com/docs/sandboxing), [cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- Individual-account training wording now includes Codex's separate full-environment control and the submitted-feedback exception. Temporary Chats are described using OpenAI's current deletion wording. [How OpenAI uses data](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance), [Data Controls FAQ](https://help.openai.com/en/articles/7730893-datacontrols-faq)
- The site now explains ordinary-chat retention, separate Library-file deletion, and the fact that disabling model training does not end all storage, safety review, or service-provider processing. [Chat and file retention](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt), [ChatGPT safety and review](https://help.openai.com/en/articles/6783457), [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy/)
- Business access rules are now separated from Enterprise/Edu access rules rather than being described as one policy. [Enterprise privacy](https://openai.com/enterprise-privacy/)
- Unsupported statements about the absence of an Australian price table and different app-store prices were removed. The replacement is limited to facts established by the billing page.
- Optional credits are now limited to eligible Plus and Pro accounts and qualified by feature and plan. API billing remains explicitly separate. [Flexible usage credits](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro)
- Business pricing is now identified as the standard ChatGPT Business seat price. The main page omits the highly specialised grandfathered Codex-only seat exception, but the detailed OpenAI audit records it. [What is ChatGPT Business?](https://help.openai.com/en/articles/8792828)

The displayed Free, Go, Plus, Pro, and standard Business reference prices were confirmed on the audit date. All 13 original OpenAI destinations resolved.

### Google Antigravity

- Individual access now says the product is available at no charge to personal accounts in approved countries, including Australia, for adults. It distinguishes product features from plan-dependent model availability and rate limits. [Antigravity plans](https://antigravity.google/docs/plans), [Antigravity FAQ](https://antigravity.google/docs/faq)
- The capabilities panel now links directly to both permissions and Model Context Protocol documentation. [Permissions](https://antigravity.google/docs/permissions), [MCP connections](https://antigravity.google/docs/mcp)
- The paid-plan panel now discloses optional AI-credit overage after baseline quota is exhausted and explains the documented Never and Always settings. [Antigravity plans](https://antigravity.google/docs/plans)
- The execution panel now distinguishes direct local-folder work from isolated Git worktree mode and continues to limit its default-off sandbox statement specifically to the command-line tool. [Getting started](https://antigravity.google/docs/getting-started), [CLI sandbox](https://antigravity.google/docs/cli/sandbox)
- The personal-account privacy wording no longer says simply that users can opt out. It now states the narrower documented control: users can disable sharing interaction logs to improve models. It retains the storage, improvement-use, and possible employee/contractor review warnings. [Additional terms](https://antigravity.google/terms), [settings](https://antigravity.google/docs/settings)
- The site now says the personal-account terms provide a deletion-request route but do not state a fixed retention period or promise Australian processing. It also explains that connected remote tools can receive context or execute actions.
- The organisational paragraph now accurately describes the Google Cloud integration, consumption billing, private networking, currently documented global/EU/US locations, lack of Antigravity IDE support, and the fact that zero data retention depends on models, features, and configuration. [Enterprise integration](https://antigravity.google/docs/enterprise), [zero-data-retention requirements](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/zero-data-retention)
- The old Vertex AI retention URL was replaced with the canonical Gemini Enterprise Agent Platform URL.

Google's current pricing and plans pages conflict about third-party-model access on the free tier. The site correctly avoids making a fixed model-list claim.

## Link audit

### Original link set

| Category | Unique original destinations | Result |
|---|---:|---|
| Claude and Anthropic | 14 | All resolved; five nearby passages needed correction or qualification |
| OpenAI, ChatGPT, Work, and Codex | 13 | All resolved; eight passages needed correction or qualification |
| Google Antigravity and Google Cloud | 11 | All resolved; one redirected URL was replaced with its canonical destination |
| AUSIT, Karpathy, Matt Pocock, and YouTube | 5 | All resolved; two displayed skill names and the vibe-coding definition needed correction |
| **Total** | **43** | **No broken original destination** |

Repeated links were checked once for reachability and separately at each placement for whether the source actually supported the adjacent statement.

### Other live destinations

- The [AUSIT event page](https://office.ausit.org/event-6748203) resolves to the exact webinar event. The event took place on 22 July 2026; retaining the page as the event record is accurate.
- The configured Google Forms respondent link loads publicly without requiring sign-in to submit. Its required question, optional name and email fields, and optional anonymous-sharing choice match the site's description. No form was submitted during the audit.
- Every external link in the rendered page opens in a new tab and includes `noopener noreferrer`.
- Every internal navigation hash resolves to an existing element, and all local CSS, JavaScript, and image references resolve.

## Conceptual sections

- “Agent = model + harness” is clearly presented as a teaching mental model, not a formal universal definition. The surrounding explanations are reasonable simplifications and do not make a false technical claim.
- The task-and-response versus systems-and-design comparison is an instructional framework. It is not presented as a measured universal law about chatbot or agent use.
- Statements about what the presenter learned from Matt Pocock are autobiographical and cannot be externally proven, but the GitHub repository and YouTube video are the correct referenced materials.
- The general privacy warning is sound: a sandbox constrains what software can access but does not itself establish confidentiality, on-device processing, or compliance.

## Known source limitations preserved in the page

- OpenAI's first-party pages disagree about Work availability on Free. The page does not promise access.
- Google's first-party pages disagree about which third-party models are included in the no-charge Antigravity tier. The page does not list them.
- Google AI checkout is dynamically localised, so the page links to the live checkout rather than freezing an Australian price.
- Product availability, pricing, quotas, model treatment, retention rules, and beta rollouts can change. The visible checked date remains necessary.

## Detailed vendor reports

- [Claude and Anthropic audit](site-audit-anthropic-2026-07-23.md)
- [OpenAI, ChatGPT, and Codex audit](site-audit-openai-2026-07-23.md)
- [Google Antigravity and other-source audit](site-audit-google-misc-2026-07-23.md)

## Final verification checklist

- [x] Every original external destination followed
- [x] Nearby claims compared with the linked source rather than URL status alone
- [x] New evidence links checked against first-party pages
- [x] Configured audience-question form opened in respondent view
- [x] Product checked date updated consistently
- [x] No duplicate HTML IDs
- [x] New-tab security attributes present
- [x] Reading-mode disclosure panel opens
- [x] Presentation mode loads the expected beat and responds to forward/back arrow keys
- [x] No personal email address introduced into the public site
