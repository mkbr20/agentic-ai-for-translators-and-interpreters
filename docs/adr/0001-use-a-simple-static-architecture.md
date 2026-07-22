# Use a simple static architecture

The Presentation Site will use plain HTML, CSS, and JavaScript without a framework or required build process. This trades framework conveniences for reliable delivery before the webinar, straightforward maintenance, GitHub Pages compatibility, and an Offline Presentation Copy that runs from the same files.

## Consequences

Time-sensitive configuration will live in a clearly separated configuration file, source-backed tool facts will be grouped in visibly labelled provider sections, and the repository will include a short editing guide. Features that would require a server will use an explicit external service, such as the private Google Form used for Audience Questions.
