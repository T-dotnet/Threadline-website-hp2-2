# Threadline Health implementation QA

## Evidence

- Source visual: `/Users/danielenicoletti/Documents/Threandline hp2-2/figma-source-3210-1177.png`
- Implemented page: `http://127.0.0.1:4174/`
- Desktop viewport/state: 1710 × 1000, default page state, all source fonts and images loaded
- Mobile viewport/state: 390 × 844, default state and open-navigation state
- Desktop implementation captures:
  - `/private/tmp/threadline-final-top.png`
  - `/private/tmp/threadline-final-comparison.png`
  - `/private/tmp/threadline-final-steps.png`
  - `/private/tmp/threadline-final-pricing.png`
  - `/private/tmp/threadline-final-footer.png`
- Mobile captures:
  - `/private/tmp/threadline-final-mobile.png`
  - `/private/tmp/threadline-final-mobile-menu.png`
- Paired source/implementation comparisons:
  - `/private/tmp/threadline-design-qa-row-1.png`
  - `/private/tmp/threadline-design-qa-row-2.png`
  - `/private/tmp/threadline-design-qa-row-3.png`
  - `/private/tmp/threadline-design-qa-row-4.png`
  - `/private/tmp/threadline-design-qa-row-5.png`
- Typography correction captures:
  - `/private/tmp/threadline-font-fix-top.png`
  - `/private/tmp/threadline-font-fix-pricing.png`
  - `/private/tmp/threadline-font-fix-comparison.png`
  - `/private/tmp/threadline-font-fix-pricing-comparison.png`
- Text-wrap correction captures:
  - `/private/tmp/threadline-wrap-fix-desktop-final.png`
  - `/private/tmp/threadline-wrap-fix-mobile-final.png`
  - `/private/tmp/threadline-wrap-fix-comparison.png`
- Design-polish audit captures:
  - `/private/tmp/threadline-audit-01-hero.png`
  - `/private/tmp/threadline-audit-02-comparison.png`
  - `/private/tmp/threadline-audit-03-steps.png`
  - `/private/tmp/threadline-audit-04-pricing.png`
  - `/private/tmp/threadline-audit-05-footer.png`
  - `/private/tmp/threadline-audit-06-mobile.png`
- Design-polish implementation captures:
  - `/private/tmp/threadline-polish-desktop.png`
  - `/private/tmp/threadline-polish-mobile.png`
  - `/private/tmp/threadline-polish-mobile-comparison.png`
  - `/private/tmp/threadline-polish-source-comparison.png`
  - `/private/tmp/threadline-polish-mobile-steps.png`
  - `/private/tmp/threadline-polish-mobile-pricing.png`
- Typography-scale captures:
  - `/private/tmp/threadline-type-after-desktop.png`
  - `/private/tmp/threadline-type-after-mobile.png`
  - `/private/tmp/threadline-type-after-mobile-sections.png`
  - `/private/tmp/threadline-type-comparison-desktop.png`
  - `/private/tmp/threadline-type-comparison-mobile.png`
- Content-rail alignment captures:
  - `/private/tmp/threadline-width-after-desktop.png`
  - `/private/tmp/threadline-width-after-mobile.png`
- Inter typography captures:
  - `/private/tmp/threadline-inter-desktop.png`
  - `/private/tmp/threadline-inter-mobile.png`
- Deep-green text captures:
  - `/private/tmp/threadline-deep-green-desktop.png`
  - `/private/tmp/threadline-deep-green-pricing.png`
  - `/private/tmp/threadline-deep-green-mobile.png`
- Green eyebrow-label captures:
  - `/private/tmp/threadline-green-eyebrow-desktop.png`
  - `/private/tmp/threadline-green-eyebrow-mobile.png`
- Comparison-heading wrap captures:
  - `/private/tmp/threadline-wrap-card-desktop.png`
  - `/private/tmp/threadline-wrap-card-mobile.png`
- Comparison bullet-list captures:
  - `/private/tmp/threadline-bullets-desktop.png`
  - `/private/tmp/threadline-bullets-mobile.png`
- Muted supporting-text captures:
  - `/private/tmp/threadline-muted-text-desktop.png`
  - `/private/tmp/threadline-muted-text-cards.png`
  - `/private/tmp/threadline-muted-text-mobile.png`
- Green step-icon captures:
  - `/private/tmp/threadline-green-icons-desktop.png`
  - `/private/tmp/threadline-green-icons-mobile.png`
- Fluid typography-scale captures:
  - `/private/tmp/threadline-fluid-type-desktop.png`
  - `/private/tmp/threadline-fluid-type-section.png`
  - `/private/tmp/threadline-fluid-type-mobile.png`
- Preparation-card spacing captures:
  - `/private/tmp/threadline-card-spacing-desktop.png`
  - `/private/tmp/threadline-card-spacing-tablet.png`
  - `/private/tmp/threadline-card-spacing-mobile.png`
- Hero copy-alignment captures:
  - `/private/tmp/threadline-hero-alignment-desktop.png`
  - `/private/tmp/threadline-hero-alignment-tablet.png`
  - `/private/tmp/threadline-hero-alignment-mobile.png`
- Hero bottom-alignment captures:
  - `/private/tmp/threadline-hero-bottom-desktop.png`
  - `/private/tmp/threadline-hero-bottom-tablet.png`
  - `/private/tmp/threadline-hero-bottom-mobile.png`
- Important body-copy captures:
  - `/private/tmp/threadline-important-body-desktop.png`
  - `/private/tmp/threadline-important-body-mobile.png`
- Reduced body-scale captures:
  - `/private/tmp/threadline-body-scale-hero-desktop.png`
  - `/private/tmp/threadline-body-scale-steps-desktop.png`
  - `/private/tmp/threadline-body-scale-hero-mobile.png`
- Preparation-icon spacing captures:
  - `/private/tmp/threadline-step-icons-spacing-desktop.png`
  - `/private/tmp/threadline-step-icons-spacing-mobile.png`
- Pricing-card height captures:
  - `/private/tmp/threadline-pricing-height-desktop.png`
  - `/private/tmp/threadline-pricing-height-mobile.png`
- 500px pricing-card capture:
  - `/private/tmp/threadline-pricing-height-500.png`

## Fidelity checks

- Layout: the 1710px implementation follows the Figma section sequence and 64px inter-section rhythm. Measured implementation positions versus Figma are: assessment 547.34 vs 547.33, comparison 1595.50 vs 1593.33, steps 2551.21 vs 2550.40, pricing 3465.92 vs 3466.40, important notice 4357.92 vs 4358.40, and footer 4752.92 vs 4753.40.
- Typography: the full-axis Fraunces Variable build is used for display and editorial copy, including the Figma `SOFT` and `WONK` settings; Funnel Sans Variable is used for navigation, labels, buttons, and body text; Frank Ruhl Libre is used for the pricing suffix. Weight, scale, line height, and wrapping match the reference across the paired views.
- Typography polish: section and card leading is tighter, eyebrow labels have clearer weight/tracking, and mobile display sizes step down more deliberately while preserving the original Fraunces/Funnel Sans hierarchy.
- Typography consistency: a shared display, section, card, body, editorial, UI, CTA, and price scale now governs every section. Fractional one-off sizes and divergent body line heights were removed, while responsive token overrides keep the same hierarchy at tablet and mobile widths.
- Color and surfaces: the off-white workspace, deep green headings, primary green text/actions, mint cards, white surfaces, asymmetric radii, borders, and report shadow match the Figma palette and treatments.
- Imagery: the Threadline logo, assessment background, assessment report, and steps background are source assets exported from the supplied Figma frame; all rendered with valid natural dimensions.
- Copy: header navigation, hero statement, hero support copy, section headings, cards, pricing, legal notice, and footer labels match the supplied frame. Above the fold, the only added responsive element is the mobile menu control; desktop copy is an exact match.
- Responsive behavior: 390px mobile has zero horizontal overflow, the hero hierarchy remains intact, all imagery loads, and the navigation opens to a usable vertical menu.
- Responsive polish: the mobile hero begins 105px earlier, the pricing rail now uses the full 350px content width instead of 262px, and long mobile headings/cards use a denser, more readable scale and rhythm.
- Interaction: the mobile menu toggles its expanded state, closes after navigation, and the Pricing path lands at `#pricing` with the section aligned to the viewport. Header anchors and the primary CTA were also checked against their target sections.
- Accessibility: semantic landmarks and headings are present, the menu exposes `aria-expanded`/`aria-controls`, decorative images have empty alt text, the report image has meaningful alt text, focus-visible styles are present, tap targets remain practical, and reduced-motion preferences disable smooth scrolling.
- Intentional P3 deviation: the three step icons use the closest Phosphor thin-stroke equivalents because the Figma artwork is composed from fragmented vector masks. Their meaning, size, alignment, family, and stroke treatment match the reference.

## Comparison history

1. Discarded an initial browser capture from port 4173 after confirming it belonged to a different local project; the verified implementation runs on 4174.
2. Corrected the source logo's intrinsic sizing so the desktop header returned to the 103px Figma frame.
3. Tightened hero height and copy alignment to place the assessment visual at the source 547px boundary.
4. Restored the Figma 64px section gaps and exact comparison, steps, pricing, notice, and footer frame heights.
5. Corrected the steps panel's 64px top and 96px bottom padding after a focused source/implementation comparison.
6. Rechecked the final desktop sections side by side and verified the mobile menu, CTA path, image loading, and horizontal overflow.
7. Replaced the weight-only Fraunces import with the full variable build so the `SOFT` and `WONK` axes render, and corrected the `one-off` price suffix from the Georgia fallback to Frank Ruhl Libre.
8. Removed forced desktop line breaks below 1200px, restored spaces where responsive breaks collapse, widened the desktop hero support-copy column, and applied balanced or pretty wrapping to short headings and body copy. The post-fix comparison confirms the desktop hero returns to the source two-line treatment; the 390px headline now reads as three balanced lines without isolated or joined words.
9. Ran a focused design audit across hero, comparison, steps, pricing, notice, footer, and mobile states. Tightened section/card leading, clarified eyebrow hierarchy, removed the footer's negative-margin spacing hack, lifted the mobile hero, widened mobile pricing cards, and compressed excess mobile vertical spacing. Post-fix desktop/source and mobile before/after comparisons show the first-viewport composition remains faithful while responsive readability improves.
10. Centralized the full typographic scale in CSS custom properties, replacing fractional and section-specific font sizes with consistent display, section, card, body, editorial, UI, CTA, and price roles. Added deliberate tablet and mobile scale overrides, then verified the computed styles and text flow at 1710 × 1000 and 390 × 844.
11. Aligned the Your Thread / Assessment Preparation pricing pair and the Important copy container to the shared content rail. At 1280px all four primary section rails now measure 1152px from 64px to 1216px; at 390px they all measure 350px from 20px to 370px.
12. Replaced Funnel Sans Variable with Inter Variable for navigation, labels, buttons, body copy, and footer UI. Removed the Funnel Sans dependency, added the local Inter variable font package, and preserved Fraunces and Frank Ruhl Libre for their existing serif roles.
13. Replaced the brighter green text treatment with the heading's deep green across hero support copy, guideline statements, eyebrow labels, comparison cards, step cards and icons, pricing cards, and the Important label. Retained the brighter green for CTA backgrounds and interactive hover accents.
14. Restored the brighter accent green specifically for eyebrow labels above headings, including HOW IT WORKS, ASSESSMENT PREPARATION, and Important. Main headings, card text, and body copy remain in the deeper heading green.
15. Removed the authored line break from “Too often, families don't know where to start.” so the existing balanced wrapping can respond to the available card width. The heading now renders as two natural lines at 1280px and three balanced lines at 390px without embedded break elements.
16. Converted both comparison-card benefit blocks from stacked spans into semantic unordered lists. Added compact spacing and accent-green disc markers while preserving the deep-green list text and existing card hierarchy.
17. Applied the existing `--muted` token to non-heading supporting copy across the hero, guideline statements, comparison bullets, step descriptions, pricing description, and price suffix. Preserved deep green for headings and price values, accent green for labels and markers, and the existing action colors for buttons and navigation.
18. Changed the three preparation-step icons from the deep heading green to the brighter `--primary` accent green, while preserving the muted-grey step descriptions and deep-green section heading.
19. Consolidated all text roles into one fluid root scale using `clamp()`, removing duplicate font-size overrides from the 1200px, 860px, and 460px breakpoints. Added caption and caption-leading tokens for the legal footer and removed its separate font stack so it inherits Inter Variable consistently.
20. Increased the preparation panel's desktop surround from 64px side padding and 24px gaps to 80px side padding and 32px gaps, with 72px above and 104px below. Increased the desktop panel height to 507px so the added space does not compress card content, and added proportional tablet and mobile spacing values.
21. Removed the 120px top margin that artificially lowered the hero support copy. The desktop and tablet grid now vertically center the headline and support-copy blocks together, while the mobile layout preserves its left-aligned single-column stack and 32px gap.
22. Bottom-aligned the desktop and tablet hero headline and support-copy cells so both blocks finish on the same baseline. Added an explicit mobile alignment override to preserve the existing left-aligned stack and 32px vertical gap below the breakpoint.
23. Replaced the Important notice's larger editorial serif treatment with the existing Inter body-copy role. The notice now uses the shared body size, leading, and muted colour tokens without changing its wording, rail alignment, or responsive spacing.
24. Reduced the shared body-copy token from the previous 18–22px range to a 16–18px fluid range. Hero support copy, guideline paragraphs, comparison bullets, preparation-card descriptions, pricing copy, and the Important notice now use the smaller scale while headings, labels, navigation, and buttons remain unchanged.
25. Reduced the top padding inside the three preparation cards so their icons sit higher without changing the section-heading gap, panel surround, card spacing, or description alignment. Desktop card padding moved from 96px to 64px, tablet from 72px to 56px, and mobile from 52px to 40px.
26. Reduced the shared minimum height of the Your Thread and Assessment Preparation cards from 700px to 600px on desktop, from 480px to 420px on tablet, and from 430px to 400px on mobile. Both cards retain equal heights and their existing top/bottom content alignment.
27. Reduced the shared desktop pricing-card minimum height again from 600px to the requested 500px. Tablet and mobile overrides remain at 420px and 400px respectively.

## Engineering verification

- `npm run build`: passed with Vite 6.4.2; 4573 modules transformed.
- Final browser state: `http://127.0.0.1:4174/`, title `Threadline Health`, all images loaded, zero horizontal overflow, and no console warnings or errors.
- Computed-style verification at 1710 × 1000 confirmed the Figma families, weights, sizes, line heights, letter spacing, and Fraunces variation axes; the Pricing navigation interaction also passed.
- Responsive wrap verification passed at 1710 × 1000 and 390 × 844. The mobile navigation still opens and closes correctly after the text-flow changes.
- Design-polish verification passed at 1710 × 1000 and 390 × 844. Browser console checks returned no warnings or errors; the mobile menu open/close interaction passed; the mobile pricing rail measures 350px with 430px cards and no clipped content.
- Typography-scale verification passed at 1710 × 1000 and 390 × 844. Desktop body copy is consistently 22px/31.24px, mobile body copy is consistently 19px/26.98px, UI and CTA roles remain distinct, horizontal overflow is zero, all images load, the mobile menu interaction passes, and the console remains clean.
- Content-rail alignment verification passed at 1280 × 844 and 390 × 844. Comparison, steps, pricing, and Important now share identical left and right boundaries; the Pricing navigation lands at `#pricing`, the console remains clean, and mobile horizontal overflow is zero.
- Inter typography verification passed at 1280 × 844 and 390 × 844. Computed styles confirm Inter Variable on body, navigation, CTA, support copy, and footer UI; Fraunces remains active on the hero heading. The production build passes, Pricing navigation still lands at `#pricing`, the console is clean, and mobile horizontal overflow is zero.
- Deep-green text verification passed at 1280 × 844 and 390 × 844. Computed styles confirm `rgb(11, 70, 54)` for headings, support copy, labels, cards, icons, pricing, and Important, while CTA backgrounds remain `rgb(16, 133, 96)`. Pricing navigation works, the console is clean, and mobile horizontal overflow is zero.
- Green eyebrow-label verification passed at 1280 × 844 and 390 × 844. Computed styles confirm `rgb(16, 133, 96)` for HOW IT WORKS, ASSESSMENT PREPARATION, and Important, while adjacent headings and card copy remain `rgb(11, 70, 54)`. Desktop and mobile navigation paths work, the console is clean, and horizontal overflow is zero.
- Comparison-heading wrap verification passed at 1280 × 844 and 390 × 844. The heading has no child break elements, measures two 48px lines on desktop and three 36.6px lines on mobile, the How It Works navigation path works in both states, the console is clean, and horizontal overflow is zero.
- Comparison bullet-list verification passed at 1280 × 844 and 390 × 844. The rendered comparison area contains two unordered lists with six total disc items, desktop and mobile How It Works navigation paths work, the console is clean, and horizontal overflow is zero.
- Muted supporting-text verification passed at 1280 × 844 and 390 × 844. Computed styles confirm the existing `rgb(107, 114, 128)` muted token on supporting copy while headings remain `rgb(11, 70, 54)` and labels remain `rgb(16, 133, 96)`. Navigation works, the console is clean, and horizontal overflow is zero.
- Green step-icon verification passed at 1280 × 844 and 390 × 844. All three icons compute to `rgb(16, 133, 96)`, step descriptions remain `rgb(107, 114, 128)`, desktop and mobile Resources navigation paths work, the console is clean, and horizontal overflow is zero.
- Fluid typography-scale verification passed at 1280 × 844 and 390 × 844. The shared scale resolves to 60.416/49.224/36.032/20.48/15.304px for desktop display, section, card, body, and UI roles, and 44/38/30/18/14px on mobile. The caption role is consistently 12px/18px, navigation works, the console is clean, and horizontal overflow is zero.
- Preparation-card spacing verification passed at 1280 × 844, 1024 × 900, and 390 × 844. Desktop measures 80px side padding, 72px top, 104px bottom, and 32px card gaps; tablet uses 48/48/64px padding with 28px gaps; mobile uses 18px padding and gaps. Resources navigation works, the console is clean, and horizontal overflow is zero.
- Hero copy-alignment verification passed at 1280 × 844, 1024 × 844, and 390 × 844. Desktop and tablet headline/support centers differ by less than 0.004px; mobile blocks share the same 20px left boundary with a 32px vertical gap. The mobile menu opens and closes, the console is clean, and horizontal overflow is zero.
- Hero bottom-alignment verification passed at 1280 × 844, 1024 × 844, and 390 × 844. Desktop and tablet headline/support bottom edges match exactly; mobile blocks retain the same 20px left boundary and 32px vertical gap. The mobile menu opens and closes, and browser console checks returned no warnings or errors.
- Important body-copy verification passed at 1280 × 844 and 390 × 844. The notice resolves to Inter Variable at 20.48px/29.0816px on desktop and 18px/25.56px on mobile, retains the existing muted token, and introduces no horizontal overflow. Desktop Pricing navigation and the mobile menu interaction pass, and the console is clean.
- Reduced body-scale verification passed at 1280 × 844 and 390 × 844. Shared paragraph and list roles resolve to Inter Variable at 17.7px/25.134px on desktop and 16px/22.72px on mobile; the hero heading remains unchanged at 60.416px on desktop. Resources navigation and the mobile menu interaction pass, horizontal overflow is zero, and the console is clean.
- Preparation-icon spacing verification passed at 1280 × 844 and 390 × 844. All three desktop icons have matching 64px offsets from their card tops and all three mobile icons have matching 40px offsets. Resources navigation and the mobile menu interaction pass, horizontal overflow is zero, and the console is clean.
- Pricing-card height verification passed at 1280 × 844 and 390 × 844. Both desktop cards measure 600px and both mobile cards measure 400px; every direct content block remains within its card bounds. Pricing navigation and the mobile menu interaction pass, horizontal overflow is zero, and the console is clean.
- 500px pricing-card verification passed at 1280 × 844. Both desktop cards measure exactly 500px and every direct content block remains within its card bounds. The 390px mobile cards remain 400px, the mobile menu interaction passes, horizontal overflow is zero, and the console is clean.

final result: passed
