# Problem Statement — Blinkit Past-Purchase Personalisation MVP

## 1. Context

Blinkit's customer retention has plateaued at ~45%, and its Average Order Value (₹460) trails Zepto (₹607–₹715). Research across 456 review/interview sources and internal problem framing traced a specific cause: Blinkit's discovery surfaces are tuned for habitual reorder, not exploration. Users who could be buying from more categories (pet care, personal care, home) never see a reason to try them — recommendations today ("You Might Also Like") only cross-sell *within* the category a user is already browsing.

## 2. Problem statement

> Active Blinkit users have no low-risk way to discover categories they've never bought from. The app's recommendation surfaces don't use a user's own order history to suggest genuinely new categories, and they give no explanation for why an unfamiliar item might be worth trying — so users default to the same 3–4 categories every session, capping basket size and retention.

## 3. Proposed solution — Past-Purchase Personalisation

Recommend items from categories a user has **never or rarely purchased from**, using their real order history as the anchor, paired with:
- A **plain-language reason** grounded in their actual purchase pattern (e.g. "You order dog treats often — try this vet-recommended food")
- A **trust badge** (Bestseller / Highly Rated / Trending Nearby) to lower the risk of trying something new
- A feedback rule where **skip only affects that one item**, never the whole category — so one bad suggestion can't silently kill future discovery of that category

## 4. Goal of this build

Build a **UI-only, front-end MVP** to demo and pressure-test the interaction pattern with stakeholders and in usability sessions — not a production feature. No real backend, no real payment gateway, no real recommendation model. All data is local test data. The build should look and feel like a real Blinkit screen, not a wireframe.

## 5. Target user (for the demo)

An "Occasional Explorer" — a Blinkit user who reorders groceries/snacks habitually but has never or rarely bought from adjacent categories (personal care, pet care, home). This is ~28% of surveyed users in the underlying research.

## 6. Scope — what to build

**In scope (UI + local test data only):**

| Screen | Must include |
|---|---|
| **Home feed** | Search bar (non-functional trigger to Search screen), horizontal category chips, one static promo banner, a "Frequently bought" horizontal product row, and the **personalised recommendation card** (image, name, price, trust badge, one-line AI-style reasoning, Add / Skip buttons) |
| **Search** | Text input that filters a local product catalog by name as the user types; empty and no-results states |
| **Category browse** | Triggered by tapping a chip; shows a filtered grid of products for that category with Add buttons |
| **Product card / grid item** | Emoji or placeholder image, name, pack size, price, Add button that becomes a quantity stepper (−, qty, +) once added |
| **Cart** | List of added items with quantity steppers and remove-on-zero, a bill breakdown (item total, delivery fee, handling charge, grand total), and a **second appearance of the personalised recommendation** as a cart-level cross-sell if the user hasn't added it yet |
| **Checkout / payment** | Static delivery address block, selectable payment method list (UPI / Card / COD — visual selection only, no real processing), bill recap, "Place order" action |
| **Order confirmation** | Success state, order summary (item count, total), and an explicit note on whether a "category trial" was logged this order (i.e. whether the personalised item was purchased) |
| **Header** | Persistent across screens: back button (context-aware, hidden on home), cart icon with live item count, search icon |

**Explicitly out of scope:**
- Real backend, database, or API calls of any kind
- Real payment processing or gateway integration
- Real recommendation engine / ML model — recommendation logic can be a simple rule ("show item from a category not yet in cart/order history") over hardcoded test data
- User accounts, login, authentication
- Real order history persistence across sessions (in-memory/session state is enough)
- Push notifications, delivery tracking, ratings/reviews submission

## 7. Test data to seed

A local catalog of 10–15 products across at least 5 categories (e.g. Grocery, Snacks, Dairy, Personal Care, Pet Care, Home), each with: id, name, pack size/qty, price (₹), category, and an emoji or image placeholder.

A short list of 3–4 "personalised recommendation" candidates, each referencing one catalog product plus:
- A trust badge label (Bestseller / Highly Rated / Trending Nearby)
- A one-line reasoning string written as if generated from order history (hardcoded, not live-generated)

## 8. Core interaction rules (must be functionally correct, not just visual)

1. Adding any product updates the cart count in the header immediately.
2. Adding/removing items recalculates the bill (item total, delivery fee — free above a threshold, e.g. ₹199 — handling charge, grand total) live.
3. **Skip** on the personalised card only dismisses that one suggestion and swaps in the next candidate — it must never remove the category from future recommendations in the same session.
4. **Add** on the personalised card logs a "category trial" for that session, which the confirmation screen must reflect.
5. If the personalised item was never added on the home feed, it must resurface once in the cart as a cross-sell before checkout.
6. Placing an order clears the cart and returns a confirmation state; starting a new order resets the flow without a full page reload.

## 9. Non-functional requirements

- Single responsive UI, phone-width primary layout (~360–400px content area), but should not break on desktop viewports.
- No external network calls required to function — should run fully offline once loaded.
- Visual language should read as "real Blinkit," not generic: yellow/black brand colours, product-grid conventions (image, name, weight, price, ADD button), and Blinkit's real checkout structure (address → payment method → place order).

## 10. Success criteria for this MVP build

- A reviewer can go from opening the app to a placed order without hitting a dead end or broken state.
- The personalised recommendation, its badge, its reasoning, and the skip/add distinction are visibly and correctly implemented — this is the feature under test, everything else is supporting scaffolding.
- The bill math is internally consistent (no negative totals, no NaN, correct free-delivery threshold behaviour).
- The whole thing works from a single static file or a minimal front-end project with no build step required to view it.

## 11. Suggested tech for a vibe-coding pass

Plain HTML/CSS/JS (single file) is sufficient and fastest to iterate on. If a component framework is preferred instead, React with local component state (no external state library, no backend) covers everything in this scope.

## 12. Reference

This scope mirrors an existing working prototype already built for this exact flow (search → category → cart → payment, with the personalised card at both the home-feed and cart touchpoints) — use it as the interaction reference if translating into a different stack or design system.
