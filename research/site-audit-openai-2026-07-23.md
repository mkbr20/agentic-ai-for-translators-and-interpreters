# OpenAI, ChatGPT and Codex site audit

**Audit date:** 23 July 2026

**Scope:** Every OpenAI, ChatGPT, ChatGPT Work and Codex statement and external link in `index.html`.
**Source standard:** Current first-party OpenAI and ChatGPT documentation only.

## Executive finding

All 13 OpenAI or ChatGPT links in the page resolved to current first-party pages. The broad Work-versus-Codex explanation, listed subscription prices, sandbox description, Codex cloud network defaults, consumer training controls, Temporary Chat treatment, and business-training default are substantially correct.

Eight pieces of wording should nevertheless be revised:

1. The Free-plan card presents Work availability as settled, while OpenAI's current sources conflict and Work is still rolling out.
2. The Go card says regional availability varies, but OpenAI now says Go is available in every ChatGPT-supported country.
3. The execution section does not clearly distinguish desktop local chats from cloud Work chats and includes an unsupported observation about the absence of cloud-container detail.
4. The consumer-data section omits Codex's separate training control for full environments and the feedback exception.
5. The human-access sentence combines Business, Enterprise and Edu into one rule even though OpenAI documents different rules for them.
6. The billing paragraph makes two observations that its linked source does not directly establish: that there is no stable Australian price table and that app-store charges can differ.
7. The credits paragraph does not state that individual credit purchasing for the relevant agentic features is currently limited to eligible Plus and Pro accounts and varies by feature and plan.
8. The Business pricing paragraph states the standard-seat price correctly but does not identify it as the standard ChatGPT seat price or mention the grandfathered usage-based Codex-only seat arrangement.

The detailed corrections below are written so they can be pasted directly into the page.

## Necessary corrections

### 1. Free-plan Work availability is too definite

**Current wording**

> Work and Codex with limited usage.

**Assessment:** Needs qualification. OpenAI's dedicated agentic [pricing page](https://learn.chatgpt.com/docs/pricing) says both Work and Codex are included in Free, Go, Plus, Pro, Business, Edu and Enterprise. However, the newer [ChatGPT Work and Codex guide](https://help.openai.com/en/articles/20001275/) says Work is rolling out gradually and is available on web and mobile for eligible paid plans. The [download page](https://chatgpt.com/download/) currently names Plus, Pro, Business and Enterprise as the plans on which Work is available. These first-party sources are not fully consistent.

**Safe replacement**

> Codex included for quick tasks. Work is still rolling out and may not be available on every account.

This retains the confirmed Free Codex entitlement without asserting a settled Free Work entitlement.

### 2. Go no longer has regionally limited availability

**Current wording**

> Regional availability and price can vary.

**Assessment:** Partly stale. OpenAI now says Go is available in all countries where ChatGPT is supported. Billing currency and checkout amount can still vary. See [What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go) and [Multi-currency billing](https://help.openai.com/en/articles/10421635-multi-currency-billing-faq).

**Replacement**

> Available in all supported countries. Local-currency billing is offered in some countries.

The displayed US$8 reference price is supported by the current [agentic pricing page](https://learn.chatgpt.com/docs/pricing).

### 3. Separate local Work, cloud Work and Codex cloud more clearly

**Current wording**

> Desktop Work can act through approved local files, applications, and the browser. Local commands use operating-system sandboxing and approval controls. Cloud Work runs remotely, although OpenAI’s public documentation is less specific about its container lifecycle than it is for Codex cloud.
>
> Codex cloud uses an isolated OpenAI-managed container. Network access is available during setup and off during the agent phase by default unless configured.

**Assessment:** The substance is mostly correct, but the first paragraph blurs two different desktop modes. A desktop Work chat can be local or cloud-backed. OpenAI says cloud Work chats sync across devices, while local chats stay on the computer; local files and outputs stay there unless the user explicitly moves or shares them. The sentence about OpenAI publishing less container detail is an audit observation, not a directly documented product fact, and should be removed. See [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/), [Sandbox](https://learn.chatgpt.com/docs/sandboxing), and [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access).

**Replacement**

> Work on web and mobile runs in the cloud. In the desktop app, Work can use local files and desktop apps with permission. Cloud Work chats sync across devices. Local chats stay on the computer, and local files and outputs remain there unless you explicitly move or share them.
>
> When a local chat runs commands, the ChatGPT desktop app uses an operating-system-enforced sandbox together with approval controls. Codex cloud runs in an isolated OpenAI-managed container. Setup can access the network, while the agent phase blocks internet access by default unless you enable it.

Important interpretation: “local files and outputs remain on that computer” describes their storage and direct file access. It should not be expanded into a claim that model processing happens entirely on-device; the checked pages do not make that claim.

### 4. Add the separate Codex full-environment control and feedback exception

**Current wording**

> On personal ChatGPT plans, content may be used to train models. The “Improve the model for everyone” setting can be turned off. Temporary Chats are not used for training but can be retained for up to 30 days and may be reviewed for abuse.

**Assessment:** The existing statement is broadly correct but incomplete enough to mislead a Codex user. OpenAI says individual ChatGPT and Codex content may be used for training; users can opt out for new conversations and ordinary Codex tasks. Codex has a separate setting for allowing training on full environments, and the ChatGPT or privacy-portal setting does not change that separate control. OpenAI also says that a conversation associated with feedback may be used for training even after a general opt-out. See [How your data is used to improve model performance](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) and [Data Controls FAQ](https://help.openai.com/en/articles/7730893-datacontrols-faq).

**Replacement**

> On individual ChatGPT and Codex services, OpenAI may use content to train models unless you opt out. Codex has a separate training control for full environments, and feedback you explicitly submit may still include the associated conversation. Temporary Chats are not used for training, are deleted from OpenAI systems after 30 days, and may be reviewed only to monitor for abuse.

The replacement uses OpenAI's current “deleted after 30 days” wording rather than the less exact “can be retained for up to 30 days.”

### 5. Business and Enterprise/Edu human-access rules differ

**Current wording**

> Business, Enterprise, and Edu content is not used for training by default. Limited authorised personnel and service providers can still access content for support, security, abuse investigation, or legal obligations.

**Assessment:** The no-training statement is correct, but the access statement collapses materially different plan rules. OpenAI's [Enterprise privacy page](https://openai.com/enterprise-privacy/) says:

- for Business, workspace administrators can access workspace conversations, and stored-conversation access by OpenAI is limited to authorised employees for engineering support, abuse investigation and legal compliance, plus specialised third-party contractors solely for abuse and misuse review;
- for Enterprise and Edu, authorised OpenAI employees access conversations only to resolve incidents, recover conversations with explicit permission, or comply with applicable law.

“Service providers” is broader than the documented Business category of specialised contractors solely reviewing abuse and misuse, and the original wording wrongly applies that category to Enterprise and Edu.

**Replacement**

> Business, Enterprise, and Edu inputs and outputs are not used for training by default. Access rules differ by plan. For Business, OpenAI documents limited access by authorised employees and specialised contractors; for Enterprise and Edu, authorised OpenAI staff access is limited to incident resolution, conversation recovery with explicit permission, or legal requirements. Workspace administrators may also have access and retention controls.

If more precision will fit, use this longer Business clause:

> For Business, OpenAI limits stored-conversation access to authorised employees for engineering support, abuse investigation and legal compliance, plus specialised contractors solely for abuse and misuse review.

### 6. Billing wording makes claims the source does not directly establish

**Current wording**

> OpenAI publishes US-dollar web prices and supports local-currency billing, including Australian dollars, without a stable public table of exact Australian checkout prices. App-store charges can differ.

**Assessment:** Current OpenAI pages support US-dollar reference prices, localised web pricing, AUD support, and separate Apple/Google management of in-app subscriptions. The linked page does not itself establish that no stable Australian table exists or that app-store prices differ.

**Replacement**

> OpenAI's agentic pricing page lists US-dollar reference prices. ChatGPT web checkout supports localised billing, including Australian dollars. Subscriptions bought through the iOS or Android apps are managed by Apple or Google and appear in local currency.

Keep both the [agentic pricing page](https://learn.chatgpt.com/docs/pricing) and [Multi-currency billing FAQ](https://help.openai.com/en/articles/10421635-multi-currency-billing-faq) available beside this wording.

### 7. Optional-credit eligibility needs qualification

**Current wording**

> Work and Codex share the subscription allowance. Optional credits can extend supported agentic use after plan limits; API use remains separate.

**Assessment:** The shared allowance is directly supported. The credits wording is too broad across the four individual plans shown. OpenAI currently says Plus and Pro users can buy credits after included limits; feature and plan eligibility can vary. Credits can be shared by supported features such as Codex and Work. API usage is a separate billing path. See [Pricing](https://learn.chatgpt.com/docs/pricing), [Using Credits for Flexible Usage](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro), and [What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go).

**Replacement**

> Work and Codex draw from the same included agentic allowance. On eligible Plus and Pro accounts, purchased credits can extend supported features after included limits are reached; availability varies by feature and plan. API usage is not included and is billed separately.

### 8. Identify the Business price as the standard-seat price

**Current wording**

> ChatGPT Business is published at US$25 per user monthly or US$20 per user monthly when billed annually, with a minimum of two users. Enterprise and Edu pricing is arranged through sales.

**Assessment:** The figures and minimum are correct for **standard ChatGPT Business seats**, and standard seats include ChatGPT plus Codex. A limited grandfathered exception now matters: Business workspaces that added a Codex-only seat before 24 June 2026 may continue to use and add usage-based Codex-only seats with no fixed monthly seat charge; new Business workspaces cannot add their first Codex-only seat. See [What is ChatGPT Business?](https://help.openai.com/en/articles/8792828) and [Managing billing and seats in ChatGPT Business](https://help.openai.com/en/articles/8792536).

**Replacement**

> Standard ChatGPT Business seats cost US$25 per user monthly or US$20 per user monthly when billed annually, with a minimum of two seats, and include ChatGPT plus Codex. Older Business workspaces that added Codex-only seats before 24 June 2026 may still use usage-based Codex seats; new Business workspaces cannot add them. Enterprise and Edu pricing is arranged through sales.

If that grandfathered detail is too specialised for the presentation, the minimum accurate replacement is:

> Standard ChatGPT Business seats cost US$25 per user monthly or US$20 per user monthly when billed annually, with a minimum of two seats, and include ChatGPT plus Codex. Enterprise and Edu pricing is arranged through sales.

## Verified factual claims

The following OpenAI-related statements are supported as written or are safe plain-language summaries of the linked sources.

### Product distinction and uses

- “Work is arranged around substantial everyday deliverables. Codex is arranged around software repositories, terminals, and development tools.” This accurately condenses OpenAI's distinction between Work for longer multi-step work and finished deliverables, and Codex for software development and technical work. [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- Work examples including reports, presentations, analysis, spreadsheets, recurring updates and longer workflows are supported. [Get started with Work mode](https://learn.chatgpt.com/docs/get-started-with-work) and [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- Codex can work with local folders, repositories, terminals and developer tools. Describing it as useful for building and changing software is supported. [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- Calling the desktop experience “ChatGPT Work” is current OpenAI terminology, while the documentation also uses “Work mode.” [Download ChatGPT](https://chatgpt.com/download/) and [Get started with Work mode](https://learn.chatgpt.com/docs/get-started-with-work)

### Prices and limits

- Free at US$0, Go at US$8 per month, Plus at US$20 per month, and Pro at US$100 or US$200 per month are current published reference prices. The two Pro tiers provide five and twenty times the Plus usage allowance respectively. [Pricing](https://learn.chatgpt.com/docs/pricing) and [About ChatGPT Pro tiers](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-plans)
- Plus includes Work and Codex. [Pricing](https://learn.chatgpt.com/docs/pricing) and [Download ChatGPT](https://chatgpt.com/download/)
- Work and Codex use the same pricing, credits and usage-limit structure. [Pricing](https://learn.chatgpt.com/docs/pricing) and [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- Standard ChatGPT Business seats are US$20 per user per month when billed annually or US$25 per user per month when billed monthly, with at least two seats, and include ChatGPT plus Codex. Enterprise and Edu use sales-led pricing. A grandfathered usage-based Codex-only seat arrangement remains available only to Business workspaces that had added such a seat before 24 June 2026. [Pricing](https://learn.chatgpt.com/docs/pricing), [Business pricing](https://openai.com/business/pricing/), and [What is ChatGPT Business?](https://help.openai.com/en/articles/8792828)

### Execution and security

- Local command execution in the ChatGPT desktop app, Codex CLI and IDE extension is sandboxed by default using platform-native operating-system enforcement, and sandboxing is distinct from approval policy. [Sandbox](https://learn.chatgpt.com/docs/sandboxing)
- Codex cloud uses isolated OpenAI-managed containers. Setup can use the network, while the agent phase has internet disabled by default unless explicitly enabled. [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security) and [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- The general privacy warning elsewhere on the site remains correct: a sandbox constrains what software can access; it does not by itself establish confidentiality or guarantee that all information stays on the device. OpenAI's sandbox documentation describes execution boundaries, while the privacy and training pages separately govern service-side data treatment. [Sandbox](https://learn.chatgpt.com/docs/sandboxing) and [How your data is used](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)

### Data handling

- OpenAI may train on content from individual ChatGPT and Codex services, subject to user controls and the full-environment exception described above. [How your data is used](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)
- Turning off “Improve the model for everyone” prevents new ChatGPT conversations from being used for model improvement. [Data Controls FAQ](https://help.openai.com/en/articles/7730893-datacontrols-faq)
- Temporary Chats are not used to train models, are removed after 30 days, and may be reviewed only to monitor abuse. [Data Controls FAQ](https://help.openai.com/en/articles/7730893-datacontrols-faq)
- Business, Enterprise and Edu inputs and outputs are not used for training by default. [How your data is used](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) and [Enterprise privacy](https://openai.com/enterprise-privacy/)
- The statement that commercial controls do not by themselves prove compliance with every client contract, privacy duty or data-residency need is sound risk guidance rather than an OpenAI product claim. OpenAI itself documents that residency is an Enterprise feature, not a Business-plan feature. [Business pricing](https://openai.com/business/pricing/)

## Material privacy details currently omitted

These omissions do not make the existing sentences false, but they are directly relevant to the page's “Where can the data go?” question and to participants handling client files.

### Ordinary chats and uploaded files have separate retention behaviour

OpenAI says ordinary ChatGPT chats are saved to the account until the user deletes them. A deleted chat is immediately removed from the account and scheduled for permanent deletion from OpenAI systems within 30 days, unless it has already been de-identified or must be kept longer for security or legal reasons. Files saved to the ChatGPT Library are managed separately; deleting the chat does not delete a Library file. [Chat and File Retention Policies in ChatGPT](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt)

**Optional concise addition**

> Ordinary chats remain in your account until you delete them. Deleted chats are scheduled for removal from OpenAI systems within 30 days, subject to de-identification and security or legal exceptions. Files saved to Library must be deleted separately.

### Personal-account content can be reviewed or processed by people and providers

OpenAI's general ChatGPT FAQ says conversations may be reviewed to improve systems and check compliance with policies and safety requirements. Its Privacy Policy says personal data can be accessed, processed or stored by instructed vendors and service providers performing functions for OpenAI, and that content may be monitored for fraud, misuse and security. [What is ChatGPT?](https://help.openai.com/en/articles/6783457) and [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy/)

**Optional concise addition**

> Turning off model training does not mean no storage or human access. OpenAI says conversations may be reviewed for safety and policy purposes, and instructed service providers may process personal data to operate the service.

This should be presented as a personal-service statement, not merged into the Business/Enterprise access paragraph.

## Link-by-link audit

| Link in `index.html` | Result | Does it support the nearby wording? |
|---|---|---|
| [Download ChatGPT](https://chatgpt.com/download/) | Resolves | Yes. It is the current desktop download page and explicitly presents ChatGPT Work and Codex in the desktop app. It also creates the Free/Go Work-availability conflict noted above. |
| [Pricing](https://learn.chatgpt.com/docs/pricing) | Resolves | Yes for reference prices, plan tiers, shared Work/Codex usage, optional credits and Business pricing. Its claim that Work is included on Free conflicts with newer Work/download wording, so do not use it alone to promise Free Work access. |
| [Get started with Work](https://learn.chatgpt.com/docs/get-started-with-work) | Resolves | Yes for the Work use cases, reviewable deliverables, approved tools and desktop access to local files, apps and browser. |
| [Work and Codex explained](https://help.openai.com/en/articles/20001275/) | Resolves | Yes, and it is the strongest direct source for the Work/Codex distinction, surface availability, cloud versus local chats, and local files/outputs. |
| [Sandboxing](https://learn.chatgpt.com/docs/sandboxing) | Resolves | Yes for OS-enforced local sandboxing across ChatGPT desktop and Codex clients. |
| [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security) | Resolves | Yes for Codex sandbox, approval and network controls. It is Codex-focused, so it should not be the only source for a Work-specific sentence. |
| [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access) | Resolves | Yes for Codex cloud only: setup has internet, the agent phase is blocked by default, and access can be enabled per environment. |
| [How OpenAI uses data](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) | Resolves | Yes for individual versus business training defaults. It also contains the Codex full-environment and feedback qualifications missing from the site. |
| [Data Controls and Temporary Chat](https://help.openai.com/en/articles/7730893-datacontrols-faq) | Resolves | Yes for the “Improve the model for everyone” control and Temporary Chat deletion, non-training and abuse-review treatment. |
| [Enterprise privacy](https://openai.com/enterprise-privacy/) | Resolves | Yes for no-training defaults, plan-specific human access and retention. It shows why Business must not be combined with Enterprise/Edu under one access rule. |
| [Multi-currency billing](https://help.openai.com/en/articles/10421635-multi-currency-billing-faq) | Resolves | Partly. It supports localised web billing, AUD and separate app-store management. It does not directly say app-store charges differ or certify the absence of an Australian price table. |
| [Optional credits](https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-free-go-plus-pro) | Resolves | Yes with qualification. It supports shared agentic allowances and credits, but says individual Codex credit purchasing is for Plus/Pro and that feature/plan eligibility varies. |
| [Business pricing](https://openai.com/business/pricing/) | Resolves | Yes for Business price, two-user minimum, no-training default, Enterprise custom pricing and the distinction in admin/residency controls. The headline display can be localised, while the page's billing footnote states the US-dollar monthly amount. |
| [What is ChatGPT Business?](https://help.openai.com/en/articles/8792828) | Recommended addition | Direct source for standard versus grandfathered Codex-only Business seats, their access, billing model and the 24 June 2026 cutoff. |

## Claims not established by the checked sources

These should not be presented as sourced facts unless OpenAI later publishes a direct source:

- The exact infrastructure or container lifecycle used by cloud Work. The checked pages establish that web/mobile Work is cloud-based but do not document a container architecture comparable to Codex cloud.
- A stable, public Australian-dollar checkout-price table. The checked pages confirm AUD support but route users to live pricing/checkout for the amount.
- A general claim that app-store charges differ from web charges. The checked source confirms separate Apple/Google management and local-currency display, not an actual price difference.
- A single human-access rule covering Business, Enterprise and Edu. OpenAI explicitly documents different rules.
- A model-specific OpenAI credit cost. `index.html` currently makes no such claim, which is appropriate; the credit rate can depend on model, context, reasoning and tools, and current rate cards should be consulted when needed. [Pricing](https://learn.chatgpt.com/docs/pricing)

## Recommended link additions

No existing OpenAI link needs removal for being broken. Two direct links would improve claim-to-source matching:

- Add [What is ChatGPT Go?](https://help.openai.com/en/articles/11989085-what-is-chatgpt-go) beside the corrected Go availability wording.
- Use [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/) in the execution section as well as the surface-comparison section, because it is the direct source for cloud/local chat behaviour and local output storage.
- Add [What is ChatGPT Business?](https://help.openai.com/en/articles/8792828) if the Business paragraph mentions standard or grandfathered Codex-only seat types.
- Add [Chat and File Retention Policies in ChatGPT](https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt) if the page is expanded to explain ordinary chat and Library-file retention.

## Source inconsistency to preserve in the audit record

As of 23 July 2026, first-party pages are inconsistent on Work availability:

- the [agentic pricing page](https://learn.chatgpt.com/docs/pricing) lists Work and Codex as included in Free, Go, Plus, Pro, Business, Edu and Enterprise;
- the [Work and Codex help article](https://help.openai.com/en/articles/20001275/) says Work is rolling out and is available on web/mobile for eligible paid plans;
- the [download page](https://chatgpt.com/download/) names Plus, Pro, Business and Enterprise for Work.

The site should therefore describe Work as rolling out and avoid guaranteeing it on Free until OpenAI reconciles these pages.
