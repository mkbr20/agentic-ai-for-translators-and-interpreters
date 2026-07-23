# Claude and Anthropic site audit

Checked: 23 July 2026, Australia/Sydney

Scope: Every Claude, Cowork, Claude Code, Anthropic, Fable and Sonnet statement and link in `index.html`
Source rule: First-party Anthropic and Claude pages only

## Executive verdict

- All 14 distinct Claude and Anthropic links in the page resolve to the intended first-party page. No link is broken.
- Most product descriptions, individual plan prices and usage-credit statements are correct.
- Five passages should be revised. The most important issues concern Claude Code permissions, exceptions to the training rules, and Fable 5 data retention.
- One additional first-party link is essential: Anthropic now lists Fable 5 as a Covered Model. Its prompts and outputs require at least 30 days of retention wherever it is offered, and zero data retention is not available in a workspace or organisation that can access it. [Anthropic Covered Models](https://support.claude.com/en/articles/15425695-covered-models)

## Necessary corrections

### 1. Claude Code is not always permission-gated

Current wording at line 426:

> Claude Code can run against a local project, in Anthropic’s cloud, over SSH, or through Windows Subsystem for Linux. Local Code is permission-gated but is not automatically a virtual machine.

The first sentence is correct. Claude Code Desktop supports Local, Anthropic-hosted Cloud, SSH and Windows Subsystem for Linux environments. The second sentence is too broad. Users can select modes that automatically approve actions or bypass most prompts. Sandboxed Bash can also auto-allow commands, and an unsuccessful sandboxed command can fall back to an unsandboxed retry unless strict sandbox mode is configured. The Bash sandbox uses operating-system containment and is not a virtual machine. It is available on macOS, Linux and Windows Subsystem for Linux 2, but not native Windows. [Claude Code Desktop](https://code.claude.com/docs/en/desktop), [Claude Code sandboxing](https://code.claude.com/docs/en/sandboxing)

Exact replacement:

> Claude Code can run on your machine, in Anthropic’s cloud, over SSH, or through Windows Subsystem for Linux. Local sessions run on your machine. The permission mode controls which actions need approval. Claude Code can also use an operating-system sandbox for Bash on macOS, Linux and Windows Subsystem for Linux 2, but that sandbox is not a virtual machine and can be configured or bypassed.

Keep both existing links. The Desktop guide directly supports the environments and permission modes. The sandboxing guide directly supports the isolation and fallback qualifications.

### 2. Make the Cowork rollout and local mode wording exact

Current wording at line 425:

> Remote Cowork is now the documented default. Its agent loop and code run in a temporary isolated environment on Anthropic infrastructure. Older local Cowork deployments run the agent loop and connected-folder operations locally while code runs in a dedicated Linux virtual machine.

The architecture is correct, but “older local Cowork deployments” is not Anthropic’s terminology and may sound like an obsolete version. Anthropic says remote sessions run remotely by default, are in beta and are rolling out gradually. It says local execution “remains available for existing desktop deployments.” [Cowork architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)

Exact replacement:

> Where remote Cowork is available, sessions run remotely by default. The agent loop and code run in a temporary isolated environment on Anthropic-managed infrastructure. Remote execution is still in beta and is rolling out gradually. Local execution remains available for existing desktop deployments. In a local session, the agent loop and connected-folder operations run on the device, while code runs in a dedicated Linux virtual machine.

Keep the existing architecture link.

### 3. State the training exceptions instead of presenting only the default

Current wording at line 436:

> On consumer accounts, conversations can be used for model improvement when Model Improvement is enabled. Incognito chats are not used for model improvement. Commercial chats and coding sessions are not used for training by default.

This is directionally correct but incomplete in a privacy-focused section. For Free, Pro and Max accounts, Anthropic can also use conversations flagged for safety review and material a user explicitly submits for feedback or training. Incognito chats are not used for model improvement, but they can still be retained and reviewed under other policies. For Team and Enterprise, chats and coding sessions are not used to train models unless the organisation opts into the Development Partner Program or a user explicitly submits feedback. [Consumer training rules](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), [Commercial training rules](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training), [Claude Code data usage](https://code.claude.com/docs/en/data-usage)

Exact replacement:

> On Free, Pro and Max accounts, chats and coding sessions may be used to improve Claude when Model Improvement is enabled. Conversations flagged for safety review and material explicitly submitted as feedback can also be used. Incognito chats are not used for model improvement. On Team and Enterprise accounts, Anthropic says chats and coding sessions are not used to train its models unless the organisation opts in or a user explicitly submits feedback.

Keep the existing consumer and commercial training links. The Code data-flow link also directly supports the account-level distinction.

### 4. Add the Fable 5 retention rule and make its included use precise

Current wording at line 458:

> Fable 5 is designed for demanding, long-running work. On Pro it uses paid credits from the first request; Max includes limited Fable use. Sonnet 5 is substantially less expensive when paid credits apply. Published token prices do not establish an exact multiplier for how long an included subscription allowance will last.

The cost and plan statements are correct on 23 July 2026. From 20 July 2026, Fable 5 uses pay-as-you-go credits from the start on Pro and standard Team seats. Max and premium Team seats include Fable 5 for up to 50% of their weekly plan limit. At current published rates, Fable 5 is US$10 per million input tokens and US$50 per million output tokens. Sonnet 5 is temporarily US$2 and US$10 through 31 August 2026, then US$3 and US$15. Usage credits are billed at these API rates. [Fable 5 plan rules](https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan), [Claude pricing](https://claude.com/pricing), [Usage credits](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans)

The material omission is privacy. Anthropic designates Fable 5 as a Covered Model. Prompts and outputs are retained for at least 30 days, and zero data retention cannot be used in a workspace or organisation where Fable 5 is accessible. The practical effect is greatest for commercial organisations that would otherwise qualify for zero data retention. Consumer plans already retain inputs and outputs under their normal account rules. [Covered Models](https://support.claude.com/en/articles/15425695-covered-models), [Covered Model retention](https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models)

Exact replacement:

> Fable 5 is designed for demanding, long-running work. On Pro it uses paid credits from the first request. Max includes Fable 5 for up to 50% of the weekly plan limit. Sonnet 5 is substantially less expensive when paid credits apply. Published token prices do not establish an exact multiplier for how long an included subscription allowance will last.
>
> Fable 5 is also a Covered Model. Anthropic requires prompts and outputs to be retained for at least 30 days wherever Fable 5 is offered, so it is not available with zero data retention.

Keep the two existing links and add:

`https://support.claude.com/en/articles/15425695-covered-models`

Suggested link label: `Fable 5 data-retention rule ↗`

### 5. Replace the broad Team and Enterprise access claim with specific rules

Current wording at line 467:

> Team and Enterprise use different pricing, administration, training, and retention rules from individual accounts. Commercial content is not used for training by default, but that does not mean no authorised human access or third-party processing can occur.

The first sentence is correct. The second sentence is broadly defensible but the two links beneath it do not directly establish its full scope. Anthropic gives more precise first-party statements: the customer organisation controls member data and may export it; Anthropic processes that data to provide the service; model training requires an explicit opt-in or feedback submission; content can be retained longer for safety, feedback or legal reasons; and data sent through connectors can reach third parties. [Processor and controller roles](https://privacy.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller), [Commercial training rules](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training), [Commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data), [Connector third-party flows](https://privacy.claude.com/en/articles/8114513-business-associate-agreements-baa-for-commercial-customers)

Exact replacement:

> Team and Enterprise use different pricing, administration, training and retention rules from individual accounts. The customer organisation controls its member data, and Anthropic processes that data to provide the service. Anthropic says commercial chats and coding sessions are not used to train its models unless the organisation opts in or a user explicitly submits feedback. Content can still be retained or reviewed for safety, feedback and legal reasons, and connectors can send data to third parties.

Keep the pricing and retention links. Add the processor-and-controller link. If the final sentence about connectors is retained, also add the connector-flow link above. The connector source is written for Business Associate Agreement customers, so a more general connector privacy page would be preferable if Anthropic publishes one later.

## Direct-link corrections

These are source-placement problems rather than false claims.

1. **Regional pricing:** The current “Choose a Claude plan” link supports the US-dollar prices but does not state the regional currency and tax rule. Add [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan), which directly says that local currency and tax handling vary by region.
2. **Remote Cowork file processing:** The Cowork safety page is useful safety guidance, but the architecture page is the direct source for local files opened by remote Cowork being processed on Anthropic servers. Add or repeat [Cowork architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview) in the “Where can the data go?” disclosure.
3. **Claude Code file and code context:** The data-usage page directly says local Claude Code sends prompts and outputs over the network. The context-window documentation establishes that file contents and command outputs become part of model context. Add [How Claude Code works](https://code.claude.com/docs/en/how-claude-code-works) if the wording continues to name file content and code context explicitly.
4. **Fable 5 privacy:** The Fable plan page does not discuss the Covered Model retention policy. Add [Covered Models](https://support.claude.com/en/articles/15425695-covered-models).

## Verified facts that can remain

- The Claude download page is correct and covers Windows, macOS, Linux beta and mobile. It says the desktop app combines Chat, Cowork and Code. [Download Claude](https://claude.com/download)
- Cowork is designed for complex, multi-step work involving files and extended execution. Anthropic lists file organisation, document production, research, data analysis and data transformation as examples. [Get started with Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
- Claude Code Desktop is focused on software development and can work with project folders, repositories, terminals, cloud sessions, SSH and Windows Subsystem for Linux. [Claude Code Desktop](https://code.claude.com/docs/en/desktop)
- Both Cowork and Claude Code can execute code. Remote Cowork uses an isolated temporary sandbox; existing local Cowork deployments use a Linux virtual machine for code. [Cowork architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)
- Claude Desktop is available on Free. Cowork and Claude Code are available on Pro, Max, Team and Enterprise, not Free. [Download Claude](https://claude.com/download), [Claude pricing](https://claude.com/pricing)
- Individual plan prices are correct: Free US$0; Pro US$20 monthly or US$200 annually; Max 5x US$100 monthly; Max 20x US$200 monthly. Local pricing and tax treatment can differ. [Choose a Claude plan](https://support.claude.com/en/articles/11049762-choose-a-claude-plan), [What is the Pro plan?](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan)
- Usage credits do not start automatically. A user must enable them, add prepaid funds, and choose to continue after reaching a limit. Monthly caps, alerts and auto-reload are available. [Manage usage credits](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans)
- Local Claude Code runs commands locally but sends prompts and model outputs over the network for inference. Files read by Claude become part of the session context. [Claude Code data usage](https://code.claude.com/docs/en/data-usage), [Claude Code context](https://code.claude.com/docs/en/how-claude-code-works)
- Remote Cowork processes its work, including local files it opens through the desktop app, on Anthropic servers. [Cowork architecture](https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview)
- Incognito chats are not used for model improvement. This does not mean no retention or safety review. [Consumer training rules](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), [Commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- Team and Enterprise content is not used for model training unless the organisation opts in or a user submits feedback. [Commercial training rules](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training)
- Fable 5 plan mechanics and the Sonnet 5 cost comparison are accurate on the checked date. [Fable 5 on your plan](https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan), [Claude pricing](https://claude.com/pricing)

## Link-by-link result

| Link in `index.html` | Resolves | Does it directly support the nearby wording? |
|---|---:|---|
| `https://claude.com/download` | Yes | Yes |
| `https://claude.com/pricing` | Yes | Yes for plans, inclusions and token prices |
| `https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork` | Yes | Yes |
| `https://code.claude.com/docs/en/desktop` | Yes | Yes |
| `https://support.claude.com/en/articles/14479288-claude-cowork-architecture-overview` | Yes | Yes |
| `https://code.claude.com/docs/en/sandboxing` | Yes | Partly. The site must qualify permission modes and unsandboxed fallback |
| `https://support.claude.com/en/articles/13364135-use-claude-cowork-safely` | Yes | It supports safety guidance, but the architecture page is the direct source for server-side file processing |
| `https://code.claude.com/docs/en/data-usage` | Yes | Yes for network data flow; add the context guide for explicit file-content wording |
| `https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training` | Yes | Yes, but the site omits safety-review and feedback exceptions |
| `https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training` | Yes | Yes, but the site should name opt-in and feedback exceptions |
| `https://support.claude.com/en/articles/11049762-choose-a-claude-plan` | Yes | Yes for prices; no for regional currency and tax handling |
| `https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans` | Yes | Yes |
| `https://support.claude.com/en/articles/15424964-claude-fable-5-on-your-plan` | Yes | Yes for plan treatment; no for Covered Model retention |
| `https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data` | Yes | Yes for retention; no for the full broad claim about human access and third parties |

## Claims that remain interpretive rather than independently verifiable

- “Work outcome first” and “Software project first” are useful teaching summaries, not official Anthropic product categories. The underlying distinctions are well supported by the Cowork and Code guides.
- “A more powerful model is not always the best model for the task” is practical advice, not a factual product claim.
- “Published token prices do not establish an exact multiplier for how long an included subscription allowance will last” is a sound inference. Anthropic says usage varies with message length, files, conversation length, model and feature, but it does not publish a conversion from token prices to subscription duration. [Pro usage limits](https://support.claude.com/en/articles/8325606-what-is-the-pro-plan)

## Recommended audit status after correction

After the five wording changes and four source-placement changes above, the Claude section would accurately represent the current first-party documentation as of 23 July 2026. It should retain the visible checked date because remote Cowork availability, Fable plan treatment, Sonnet introductory pricing and Covered Model rules can all change.
