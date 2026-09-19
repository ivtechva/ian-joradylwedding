# Version 1 Wedding Invitation Refinement

## Goal
Refine the approved Version 1 invitation without changing its romantic garden identity, imagery, blue-green palette, script/serif typography, envelope opening, or wedding content. Prioritize clear mobile reading, fast navigation, and an obvious RSVP path.

## What will change

### 1. Shared page structure and navigation
- Add stable section anchors for Home, Details, Venue, Timeline, Attire, Entourage, Directions, FAQ, and RSVP.
- Add a slim desktop navigation at the top and a five-item mobile bottom navigation for Home, Details, Venue, Timeline, and RSVP.
- Keep navigation clear of phone safe areas and page content; enable smooth scrolling with visible keyboard focus.
- Add bottom spacing so the mobile navigation never hides the footer or final actions.

### 2. Hero hierarchy
- Preserve the current garden photo, blue corner shading, countdown, and floral styling.
- Make “Ian & Joradyl” the unmistakable first visual signal, followed by February 6, 2027 and the existing Antipolo ceremony/reception names.
- Replace the inactive “Save the Date” control with a prominent “RSVP Now” link and a quieter “View Wedding Details” link.
- Improve text contrast with a restrained full-photo overlay rather than a boxed center panel.
- Reflow countdown cells and spacing for 320–430px screens so they remain readable without crowding.

### 3. Information sections
- **Wedding Details:** keep only verified information and clarify the date, ceremony start/arrival time, ceremony venue, and reception venue in a compact mobile-first layout.
- **Ceremony & Reception:** preserve all current photography and the Flor’s Garden slider; align card heights, improve image proportions and text hierarchy, and retain image enlargement. Per the approved baseline, map actions remain in the Location Guide rather than venue cards.
- **Attire:** preserve every existing instruction and green swatch; reorganize the title, dress code, guidance, palette, and reminders for quicker phone scanning.
- **Timeline:** retain current events and times while increasing mobile type size, reducing card bulk, and strengthening time/event/description hierarchy.
- **Entourage:** preserve every name and role; use accessible collapsible groups on mobile and an open, balanced grid on larger screens to shorten phone scrolling.
- **Gift Guide:** preserve the current wording and option while improving line length, spacing, and warmth without adding transactional controls.
- **How to Get There:** preserve both verified map links and all existing travel instructions; organize each venue into scannable driving/parking and commute groups with clear map links using the existing safe external-link behavior.
- **FAQ:** preserve all current questions and answers, with larger tap targets, clearer spacing, smooth accordion behavior, and visible focus states.

### 4. RSVP and closing
- Make RSVP visually distinct while retaining the configured Google Form and QR code.
- Use the requested message, “We can’t wait to celebrate with you,” enlarge the QR code where useful, and label the text alternative “RSVP Online.”
- Add a minimal final reminder before the footer with the couple’s names, date, and an RSVP action.
- Keep the dark teal footer, improve spacing, add compact Home/Details/RSVP links, and correct the stale 2025 hashtag to 2027.

### 5. Visual consistency, accessibility, and performance
- Consolidate section spacing, heading scale, card radius, shadows, buttons, and focus treatment into the existing semantic design system.
- Keep the approved botanical green, soft blue-green, warm neutral, teal, and gold accents; no new template, bright colors, glass effects, or heavy animation.
- Replace raw interactive elements with the existing accessible button patterns where appropriate; preserve semantic headings and meaningful image labels.
- Respect reduced-motion settings, lazy-load below-the-fold imagery, and avoid new libraries.
- Move external font loading to the document head so stylesheet compilation remains reliable, while preserving Great Vibes, Cormorant Garamond, and Lato.

## Technical details
- Add small focused components for navigation and the final RSVP reminder; update existing wedding sections in place rather than rebuilding the page.
- Keep all wedding data sourced from current files. Normalize the church display name to “Transfiguration of Christ Parish Church” and preserve the verified addresses, times, RSVP URL, map links, names, policies, attire rules, and transport instructions.
- Preserve the strict adults-only and restricted +1 policies already approved.

## Verification
- Review the opened invitation at 320, 375, 390, 430, 768, 1024, and 1440px widths.
- Confirm no clipping, overlap, hidden navigation targets, horizontal scrolling, or bottom-navigation obstruction.
- Keyboard-check navigation, venue gallery/lightbox, entourage groups, FAQ, and RSVP links.
- Verify both map links and the RSVP destination open correctly, QR remains scannable, images load, and the console/build report is clean.
- Confirm every requested section remains present, content is not duplicated, and no new wedding facts were introduced.
