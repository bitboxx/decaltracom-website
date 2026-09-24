# Homepage hero

## Current Status / Progress Tracking

- [x] Replace the homepage screenshot with a four-slide carousel in the same hero position: Portfolio overview (including Action centre and Insights assistant), Financial Spreading, Analytics, and Memo.
- [x] Extract module hero illustrations into reusable components shared by their module pages and the homepage. Use illustrative fictional data for the new portfolio view.
- [x] Add six-second crossfades, manual slide controls, pause/play, pause on hover/focus, background-tab suspension, and reduced-motion support. Verify desktop/mobile rendering and manual navigation; production build passes.

- [x] Standardize site typography: Mona Sans, medium weight, and consistent tracking for headings; Inter for body text and controls. Audit rendered active routes and legal pages; check homepage desktop/mobile layout and About accordion controls. Build passed.
- [x] Move the product composition section from the homepage to immediately after the Credit Decisioning overview hero; remove its obsolete homepage navigation entry. Production build and generated section order verified.
- [x] Replace the homepage hero with the approved two-column mock-up, final copy, reduced top spacing, and Financial Spreading screenshot.
- [x] Preserve the existing demo modal, product destination, and remaining homepage sections.
- [x] Build successfully and verify desktop/mobile layouts and the hero demo button in the local preview.

## Executor's Feedback or Assistance Requests

Implementation complete; not published. Project-wide type checking reports 15 errors in existing files outside this change, including mailer dependencies/types, AboutPage, CreditDecisioningPage, and feature106. No errors were reported in the carousel, shared illustrations, or updated homepage entrypoint.

- Portfolio visual refinement: removed redundant workflow strip, narrowed sidebar, and increased content/card spacing to reduce crowding. Production build verified.

- [x] Align the homepage headline and carousel to the same top edge using start alignment in the hero grid.

## Contact page refresh
- [x] Replace decorative hero and contact cards with a two-column introduction and inline form.
- [x] Add an optional call preference, reuse the existing mailer with success/error states, and expose its readiness state.
- [x] Remove contact section navigation and secondary homepage section; move feedback to a small footer control.
- [x] Default the existing call-request modal to No preference.
- [x] Production build passed; checked desktop/mobile layout, conditional phone field, and native required-field validation. No live enquiry sent.

## Research & Perspectives preview
- [x] Create a separate standalone mock-up at public/mockups/research-perspectives.html with a founding perspective, three Bank of England research notes, source links, and article dialogs.
- [x] Verify desktop rendering and opening/closing article previews locally. Preview only; not published.
- [x] Add a separate two-perspective variant at public/mockups/research-perspectives-two.html: founding feature, additional editorial card with working preview, and shared research collection. Verified preview interaction and narrow layout.
- [x] Revise the two-perspective preview to a tile collection with takeaways, direct source links, and full perspectives with research references.
- [x] Add the verified SME delivery/monitoring-cost quotation as a prominent attributed callout on the founding tile and article; connect it to the vision, add full references and discreet DecAltra authorship notes. Checked rendered quote and article references.
- [x] Expand the article quotation using the passage supplied by the user and connect its economic rationale to Credit Decisioning Infrastructure, workflow priorities, and the DecAltra vision. Retain the shorter tile quotation.
- [x] Create separate four-tile preview at public/mockups/research-perspectives-four.html, with a highlighted founding tile, four working article dialogs, takeaways, attribution, and source references. Verified desktop grid and all four article controls.
- [x] Give all four perspective tiles equal styling; remove the first tile founding label and quotation, retaining the quotation within the article.
- [x] Add one verified, short, attributed research quotation to each of the four cards using identical styling and direct source links.
- [x] Move private credit to second position and professional judgement to third, updating card numbering to prioritise the private-credit audience.
- [x] Generalise the first perspective category to Decision infrastructure on its tile and article.
- [x] Rename current mock-up to Insights & News and retain only the first perspective. Preserve three full article/card drafts in editorial/drafts and archive earlier multi-article previews outside public. Weekly release is manual; no deployment or LinkedIn posting performed.
- Validation: local preview contains one card and one working article dialog. Production build rerun outside filesystem sandbox; editorial drafts remain outside the public tree.
- [x] Restore the private-credit perspective as the second Insights & News card; augment its article, takeaways and references with BIS September 2026 research, explicitly distinguishing US evidence from DecAltra interpretation. Preserve the ACC/AIMA quotation and remove the incorporated draft file. Two perspectives remain in the draft queue.
- [x] Remove the introductory description and category list beneath the Insights & News heading, as requested.
- [x] Synchronise desktop perspective cards using shared grid rows for metadata, headings, summaries, quotations, takeaways, sources and footers; retain natural stacked layout on mobile.
- [x] Integrate the approved two-perspective Insights & News collection at /insights-news using the shared site layout, desktop/mobile navigation and footer. Preserve aligned card sections, quotations, references and article dialogs.
- Validation: production build passed; both article dialogs open/close, desktop card sections align exactly, and 390px mobile layout has no horizontal overflow. Updated editorial guide to point future releases to the integrated page. Not deployed.
- [x] Replace founder View LinkedIn text links with blue LinkedIn icons, preserving profile destinations, new-tab behaviour and descriptive accessible labels.
- [x] Keep Credit Decisioning and Insights & News visible in a second navigation row at 640–1023px effective viewport widths (including zoom). Adjust anchor offset for the taller header and allow the small-screen menu to scroll.
- [x] Restructure mobile navigation into Credit Decisioning (overview and indented modules), Company, and separate Insights & News / Contact links. Use smaller type, section dividers and 44px minimum link targets.
- [x] Rename desktop About us dropdown to Company for consistency with the footer and mobile navigation.
- [x] Give Insights & News its own footer category immediately after Product, with a matching link; remove it from Company. Existing responsive grid supports four categories.
- [x] Move mobile Insights & News into its own labelled section after product links and before Company, matching footer ordering.
- [x] Match Insights & News section labels to the shared 14px semibold eyebrow style with 28px line height, and enlarge card categories / Perspective labels to 14px with improved contrast.
- [x] Match Insights & News Explore Credit Decisioning CTA to the homepage: 15px / 650 weight, teal right arrow, matching spacing and underline on hover.
- [x] Remove the 280px cap on the Insights & News closing heading so it wraps naturally within the full column width.
- [x] Add an intentional line break after Better decisions start in the closing heading.
- [x] Standardise all page-level demo buttons to the approved Interested-section style: 13px / 550 weight, 12px × 21px padding, dark pill, consistent hover. Cover React and Astro CTAs centrally; preserve compact navigation buttons and remove homepage override.
- [x] Add a discreet Have a suggestion? Share feedback control below Contact page email details, opening the existing feedback modal.
- [x] Prepare release: use https://www.decaltra.com for sitemap URLs and move the last public mock-up into the non-published editorial archive.
- [x] Preserve remote main changes (analytics switch, cookie notice, self-hosted fonts and mailer improvements). Remove the basic-auth gate only on decaltra.com and www.decaltra.com for the public launch; retain preview protection. Build and live-origin mailer preflight passed.
- [x] Update homepage preview to Beyond financial decision making and approved subtitle; add Open Graph and Twitter metadata. Production build passed; publication awaits explicit approval after automatic review blocked deploy.
