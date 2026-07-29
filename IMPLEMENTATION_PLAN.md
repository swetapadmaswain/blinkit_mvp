# Blinkit MVP Implementation Plan

## Overview
This document provides a step-by-step implementation guide for building the Blinkit Past-Purchase Personalisation MVP. The plan is organized into phases, each with specific tasks, deliverables, and validation criteria.

---

## Phase 1: Project Setup & Foundation (Days 1-2)

### Step 1.1: Initialize Project Structure
**Objective**: Set up the basic project structure and development environment.

**Tasks**:
- Create project directory: `blinkit-mvp`
- Initialize git repository
- Create folder structure:
  ```
  blinkit-mvp/
  ├── src/
  │   ├── components/
  │   ├── data/
  │   ├── utils/
  │   ├── styles/
  │   └── App.js
  ├── public/
  │   └── index.html
  ├── package.json
  ├── README.md
  └── .gitignore
  ```

**Deliverables**:
- Project directory structure
- Git repository initialized
- package.json with dependencies

**Validation**:
- [ ] Project structure created
- [ ] Git repository initialized
- [ ] package.json includes React and ReactDOM

---

### Step 1.2: Setup Development Environment
**Objective**: Configure development tools and dependencies.

**Tasks**:
- Install dependencies:
  ```bash
  npm install react react-dom
  npm install --save-dev @babel/core @babel/preset-react @babel/standalone
  ```
- Configure Babel for JSX transformation
- Setup development server (optional: Vite or Create React App)
- Configure ESLint and Prettier (optional)

**Deliverables**:
- Working development environment
- Configured build tools

**Validation**:
- [ ] Dependencies installed successfully
- [ ] Development server runs without errors
- [ ] Basic React component renders

---

## Phase 2: Data Layer Implementation (Day 3)

### Step 2.1: Create Product Catalog Data
**Objective**: Implement the complete product catalog with 100 products.

**Tasks**:
- Create `src/data/products.js` with product arrays:
  - Grocery (12 products)
  - Snacks (10 products)
  - Dairy (8 products)
  - Personal Care (12 products)
  - Pet Care (8 products)
  - Home (10 products)
  - Beverages (10 products)
  - Baby Care (10 products)
  - Fruits & Vegetables (10 products)
  - Breakfast & Cereals (10 products)
- Export combined `allProducts` array
- Add data validation functions

**Deliverables**:
- `src/data/products.js` with 100 products
- Data validation utilities

**Validation**:
- [ ] All 100 products present
- [ ] Each product has required fields (id, name, packSize, price, category, emoji)
- [ ] No duplicate product IDs
- [ ] Prices are positive numbers

---

### Step 2.2: Create Category Data
**Objective**: Implement category definitions and metadata.

**Tasks**:
- Create `src/data/categories.js` with category definitions
- Include: id, name, emoji, productCount
- Add category utility functions:
  - `getCategoryById()`
  - `getCategories()`
  - `getProductsByCategory()`

**Deliverables**:
- `src/data/categories.js` with 10 categories
- Category utility functions

**Validation**:
- [ ] All 10 categories present
- [ ] Category names match product categories
- [ ] Utility functions return correct data

---

### Step 2.3: Create Recommendation Data
**Objective**: Implement personalised recommendation pool.

**Tasks**:
- Create `src/data/recommendations.js` with 8 recommendation candidates
- Each recommendation includes:
  - id, productId, trustBadge, reasoning, dismissed
- Add recommendation utility functions:
  - `getCurrentRecommendation()`
  - `dismissRecommendation()`
  - `resetRecommendations()`

**Deliverables**:
- `src/data/recommendations.js` with 8 candidates
- Recommendation utility functions

**Validation**:
- [ ] All 8 recommendations present
- [ ] Each recommendation references valid product ID
- [ ] Trust badges are valid (Bestseller, Highly Rated, Trending Nearby)
- [ ] Reasoning strings are present

---

### Step 2.4: Create Supporting Data
**Objective**: Implement additional data structures.

**Tasks**:
- Create `src/data/paymentMethods.js` with 3 payment methods
- Create `src/data/promoBanners.js` with 3 promo banners
- Create `src/data/userPersona.js` with user profile data
- Create `src/data/frequentlyBought.js` with 5 products

**Deliverables**:
- Supporting data files
- Data export functions

**Validation**:
- [ ] All supporting data files created
- [ ] Data structures match architecture specifications

---

## Phase 3: Utility Functions (Day 4)

### Step 3.1: Create Cart Utilities
**Objective**: Implement cart management functions.

**Tasks**:
- Create `src/utils/cartUtils.js`
- Implement functions:
  - `addToCart(cart, productId)`
  - `removeFromCart(cart, productId)`
  - `incrementQuantity(cart, productId)`
  - `decrementQuantity(cart, productId)`
  - `getCartCount(cart)`
  - `calculateBill(cart)`

**Deliverables**:
- `src/utils/cartUtils.js` with all cart functions

**Validation**:
- [ ] Add to cart creates new item or increments quantity
- [ ] Remove from cart decrements quantity or removes item
- [ ] Bill calculation is accurate
- [ ] Free delivery threshold works (₹199)
- [ ] Handling charge applied correctly

---

### Step 3.2: Create Product Utilities
**Objective**: Implement product-related utility functions.

**Tasks**:
- Create `src/utils/productUtils.js`
- Implement functions:
  - `getProductById(products, productId)`
  - `getProductsByCategory(products, category)`
  - `searchProducts(products, query)`
  - `filterProducts(products, filters)`

**Deliverables**:
- `src/utils/productUtils.js` with product functions

**Validation**:
- [ ] Product lookup by ID works
- [ ] Category filtering works
- [ ] Search function handles partial matches
- [ ] Filter function supports multiple criteria

---

### Step 3.3: Create Recommendation Utilities
**Objective**: Implement recommendation logic utilities.

**Tasks**:
- Create `src/utils/recommendationUtils.js`
- Implement functions:
  - `getCurrentRecommendation(recommendations)`
  - `dismissRecommendation(recommendations, recommendationId)`
  - `isCategoryTrial(recommendation, orderHistory)`
  - `shouldShowCrossSell(cart, recommendation)`

**Deliverables**:
- `src/utils/recommendationUtils.js` with recommendation functions

**Validation**:
- [ ] Returns first non-dismissed recommendation
- [ ] Dismissal only affects current recommendation
- [ ] Category trial detection works correctly
- [ ] Cross-sell display logic is correct

---

## Phase 4: Component Development (Days 5-7)

### Step 4.1: Create Base Components
**Objective**: Implement reusable UI components.

**Tasks**:
- Create `src/components/Header.jsx`
  - Back button (context-aware)
  - Search icon
  - Cart icon with badge
  - Title display

- Create `src/components/ProductCard.jsx`
  - Product display (emoji, name, pack size, price)
  - Add button
  - Quantity stepper (−, qty, +)

- Create `src/components/EmptyState.jsx`
  - Icon display
  - Title and subtitle
  - Support for different empty states

**Deliverables**:
- Base component files
- Component styling

**Validation**:
- [ ] Header displays correctly on all screens
- [ ] Back button hidden on home screen
- [ ] Cart badge shows correct count
- [ ] Product card displays all product info
- [ ] Add button transforms to quantity stepper
- [ ] Empty states render correctly

---

### Step 4.2: Create Recommendation Component
**Objective**: Implement personalised recommendation card.

**Tasks**:
- Create `src/components/PersonalisedRecommendationCard.jsx`
- Display elements:
  - Trust badge (color-coded)
  - Product emoji, name, price
  - Reasoning text (italic)
  - Add/Skip buttons
- Support both home and cross-sell modes
- Add animations for card appearance

**Deliverables**:
- PersonalisedRecommendationCard component
- Trust badge styling
- Card animations

**Validation**:
- [ ] Trust badge displays with correct color
- [ ] Reasoning text is italicized
- [ ] Add button logs category trial
- [ ] Skip button dismisses only current recommendation
- [ ] Cross-sell mode shows different button text

---

### Step 4.3: Create Screen Components
**Objective**: Implement all screen components.

**Tasks**:

**Home Screen** (`src/screens/HomeScreen.jsx`):
- Search bar (non-functional trigger)
- Category chips (horizontal scroll)
- Promo banner
- Frequently bought row
- Personalised recommendation card

**Search Screen** (`src/screens/SearchScreen.jsx`):
- Search input with live filtering
- Product grid
- Empty state
- No results state

**Category Screen** (`src/screens/CategoryScreen.jsx`):
- Category header
- Product grid (filtered)
- Empty state

**Cart Screen** (`src/screens/CartScreen.jsx`):
- Cart item list with quantity steppers
- Bill breakdown
- Personalised recommendation (cross-sell)
- Checkout button

**Checkout Screen** (`src/screens/CheckoutScreen.jsx`):
- Delivery address block
- Payment method selector
- Bill recap
- Place order button

**Order Confirmation Screen** (`src/screens/OrderConfirmationScreen.jsx`):
- Success message
- Order summary
- Category trial note
- Continue shopping button

**Deliverables**:
- All screen component files
- Screen-specific styling

**Validation**:
- [ ] Home screen displays all sections
- [ ] Search filtering works in real-time
- [ ] Category screen shows correct products
- [ ] Cart screen calculates bill correctly
- [ ] Checkout screen validates payment selection
- [ ] Order confirmation shows category trial status

---

## Phase 5: State Management (Day 8)

### Step 5.1: Implement Application State
**Objective**: Create global state management.

**Tasks**:
- Create `src/context/AppContext.jsx`
- Define state structure:
  ```javascript
  {
    cart: [],
    currentScreen: 'HOME',
    searchQuery: '',
    selectedCategory: null,
    selectedPaymentMethod: null,
    categoryTrialLogged: false,
    trialCategory: null,
    recommendations: [],
    orderHistory: {
      purchasedCategories: [],
      orderCount: 0
    }
  }
  ```
- Implement state actions:
  - addToCart, removeFromCart
  - incrementQuantity, decrementQuantity
  - setCurrentScreen
  - setSearchQuery
  - setSelectedCategory
  - setSelectedPaymentMethod
  - dismissRecommendation
  - addRecommendation
  - placeOrder
  - resetOrder

**Deliverables**:
- AppContext with state and actions
- Context provider wrapper

**Validation**:
- [ ] State updates trigger re-renders
- [ ] All actions work correctly
- [ ] State persistence works (if implemented)

---

### Step 5.2: Integrate Components with State
**Objective**: Connect components to application state.

**Tasks**:
- Wrap application with AppContext.Provider
- Update Header component to use context
- Update all screen components to use context
- Update ProductCard to use context actions
- Update PersonalisedRecommendationCard to use context

**Deliverables**:
- Fully integrated component tree
- State-connected components

**Validation**:
- [ ] Cart updates reflect across all screens
- [ ] Screen navigation works correctly
- [ ] Recommendation state persists across screens
- [ ] Category trial detection works

---

## Phase 6: Styling & UI Polish (Days 9-10)

### Step 6.1: Implement Blinkit Brand Styling
**Objective**: Apply Blinkit brand colors and design system.

**Tasks**:
- Create `src/styles/variables.css` with:
  ```css
  --blinkit-yellow: #FFD100;
  --blinkit-black: #000000;
  --blinkit-gray: #F5F5F5;
  --blinkit-text: #333333;
  --blinkit-border: #E0E0E0;
  ```
- Create `src/styles/global.css` with base styles
- Implement component-specific styles
- Add responsive breakpoints

**Deliverables**:
- CSS variables file
- Global styles
- Component stylesheets

**Validation**:
- [ ] Brand colors applied consistently
- [ ] Typography matches Blinkit style
- [ ] Spacing is consistent
- [ ] Responsive design works (360-400px primary)

---

### Step 6.2: Polish UI Components
**Objective**: Refine component styling and interactions.

**Tasks**:
- Add hover states to buttons
- Add transitions for smooth interactions
- Improve empty state designs
- Add loading states (if needed)
- Implement smooth scrolling
- Add touch-friendly tap targets

**Deliverables**:
- Polished component styles
- Interaction animations

**Validation**:
- [ ] Buttons have hover states
- [ ] Transitions are smooth
- [ ] Empty states are visually appealing
- [ ] Touch targets are at least 44px

---

## Phase 7: Testing & Validation (Days 11-12)

### Step 7.1: Functional Testing
**Objective**: Test all user flows and interactions.

**Tasks**:
**Test Case 1: Happy Path**
- Open app → Add product → Cart → Checkout → Confirm
- Verify: Complete flow works without errors

**Test Case 2: Search Flow**
- Search → Add product → Cart → Checkout
- Verify: Search filtering works

**Test Case 3: Category Flow**
- Category chip → Add product → Cart → Checkout
- Verify: Category filtering works

**Test Case 4: Skip Recommendation**
- Skip → Next recommendation → Add
- Verify: Skip only dismisses current item

**Test Case 5: Add Recommendation**
- Add → Category trial logged → Confirm
- Verify: Category trial detected

**Test Case 6: Cross-sell in Cart**
- Don't add on home → See in cart → Add
- Verify: Cross-sell appears correctly

**Test Case 7: Empty Cart**
- Try checkout with empty cart
- Verify: Blocked with message

**Test Case 8: Bill Math**
- Verify calculations at each step
- Verify: Free delivery threshold works

**Deliverables**:
- Test case documentation
- Test results report

**Validation**:
- [ ] All test cases pass
- [ ] No console errors
- [ ] Bill math is accurate
- [ ] Category trial detection works

---

### Step 7.2: Edge Case Testing
**Objective**: Test edge cases and error conditions.

**Tasks**:
- Test with maximum cart items
- Test with zero quantity
- Test with all recommendations dismissed
- Test with no payment method selected
- Test with special characters in search
- Test with very long product names
- Test with rapid button clicks

**Deliverables**:
- Edge case test results
- Bug fixes (if any)

**Validation**:
- [ ] No crashes on edge cases
- [ ] Graceful error handling
- [ ] App remains stable

---

### Step 7.3: Cross-Browser Testing
**Objective**: Test across different browsers.

**Tasks**:
- Test in Chrome
- Test in Firefox
- Test in Safari
- Test in Edge
- Test on mobile browsers (iOS Safari, Chrome Mobile)

**Deliverables**:
- Browser compatibility report

**Validation**:
- [ ] Works in all major browsers
- [ ] Consistent behavior across browsers

---

## Phase 8: Documentation & Handoff (Day 13)

### Step 8.1: Update Documentation
**Objective**: Ensure all documentation is complete and accurate.

**Tasks**:
- Update README.md with:
  - Project overview
  - Installation instructions
  - Usage guide
  - Feature list
  - Tech stack
- Update ARCHITECTURE.md if needed
- Update TEST_DATA.md if needed
- Create CHANGELOG.md
- Add inline code comments

**Deliverables**:
- Complete documentation
- Code comments

**Validation**:
- [ ] README is comprehensive
- [ ] Installation instructions work
- [ ] Architecture documentation is accurate
- [ ] Code is well-commented

---

### Step 8.2: Final Review & Handoff
**Objective**: Conduct final review and prepare for handoff.

**Tasks**:
- Conduct final code review
- Verify all acceptance criteria met
- Create demo script
- Prepare presentation slides
- Record demo video (optional)
- Tag release version

**Deliverables**:
- Final code review report
- Demo script
- Presentation materials
- Release tag

**Validation**:
- [ ] All acceptance criteria met
- [ ] Code is production-ready
- [ ] Demo script works
- [ ] Stakeholder approval received

---

## Phase 9: Deployment (Day 14)

### Step 9.1: Prepare for Deployment
**Objective**: Prepare application for production deployment.

**Tasks**:
- Optimize bundle size
- Minify CSS and JavaScript
- Add error tracking (optional)
- Add analytics (optional)
- Configure environment variables
- Test production build

**Deliverables**:
- Optimized production build
- Deployment configuration

**Validation**:
- [ ] Production build works
- [ ] Bundle size is acceptable
- [ ] No console errors in production

---

### Step 9.2: Deploy to Production
**Objective**: Deploy application to hosting platform.

**Tasks**:
- Choose hosting platform (Netlify, Vercel, GitHub Pages)
- Configure deployment settings
- Deploy application
- Verify deployment
- Set up custom domain (optional)
- Configure SSL (optional)

**Deliverables**:
- Live production URL
- Deployment documentation

**Validation**:
- [ ] Application loads successfully
- [ ] All features work in production
- [ ] SSL certificate is valid (if configured)

---

## Success Criteria

### Functional Requirements
- [ ] Complete user flow from home to order confirmation
- [ ] Personalised recommendation visible on home
- [ ] Skip/add distinction works correctly
- [ ] Category trial detection and logging
- [ ] Cross-sell appears in cart if not added
- [ ] Bill math is accurate
- [ ] Free delivery threshold works

### Non-Functional Requirements
- [ ] Works offline after loading
- [ ] Responsive design (360-400px primary)
- [ ] Blinkit brand consistency
- [ ] No external API calls required
- [ ] Single file or minimal build setup

### Quality Requirements
- [ ] Code is well-documented
- [ ] Components are reusable
- [ ] State management is clean
- [ ] Error handling is graceful
- [ ] Performance is acceptable

---

## Risk Mitigation

### Potential Risks & Mitigation Strategies

**Risk 1: State Management Complexity**
- Mitigation: Use React Context API for simple state, consider Redux if complexity grows
- Fallback: Implement local component state first, refactor to global state later

**Risk 2: Performance Issues with 100 Products**
- Mitigation: Implement virtual scrolling for large lists, lazy load images
- Fallback: Reduce initial product count, implement pagination

**Risk 3: Browser Compatibility**
- Mitigation: Test early and often across browsers, use polyfills if needed
- Fallback: Limit browser support to modern browsers

**Risk 4: Time Constraints**
- Mitigation: Prioritize core features, defer nice-to-haves
- Fallback: Implement MVP with minimum viable features

---

## Timeline Summary

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1: Setup | Days 1-2 | Project structure, dev environment |
| Phase 2: Data | Day 3 | Complete test data (100 products) |
| Phase 3: Utilities | Day 4 | Cart, product, recommendation utilities |
| Phase 4: Components | Days 5-7 | All UI components |
| Phase 5: State | Day 8 | Global state management |
| Phase 6: Styling | Days 9-10 | Blinkit brand styling, UI polish |
| Phase 7: Testing | Days 11-12 | Functional, edge case, browser testing |
| Phase 8: Documentation | Day 13 | Complete documentation, handoff |
| Phase 9: Deployment | Day 14 | Production deployment |

**Total Duration**: 14 days

---

## Next Steps

1. Review this implementation plan with stakeholders
2. Adjust timeline based on team availability and priorities
3. Begin Phase 1: Project Setup & Foundation
4. Set up regular check-ins to track progress
5. Update plan as needed based on learnings

---

## Appendix

### A. File Structure Reference
```
blinkit-mvp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── EmptyState.jsx
│   │   └── PersonalisedRecommendationCard.jsx
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   ├── SearchScreen.jsx
│   │   ├── CategoryScreen.jsx
│   │   ├── CartScreen.jsx
│   │   ├── CheckoutScreen.jsx
│   │   └── OrderConfirmationScreen.jsx
│   ├── data/
│   │   ├── products.js
│   │   ├── categories.js
│   │   ├── recommendations.js
│   │   ├── paymentMethods.js
│   │   ├── promoBanners.js
│   │   ├── userPersona.js
│   │   └── frequentlyBought.js
│   ├── utils/
│   │   ├── cartUtils.js
│   │   ├── productUtils.js
│   │   └── recommendationUtils.js
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── components.css
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.js
│   └── index.js
├── package.json
├── README.md
├── ARCHITECTURE.md
├── TEST_DATA.md
├── IMPLEMENTATION_PLAN.md
└── .gitignore
```

### B. Technology Stack
- **Frontend**: React 18
- **Styling**: CSS with CSS Variables
- **State Management**: React Context API
- **Build Tool**: Vite (or Create React App)
- **Deployment**: Netlify/Vercel/GitHub Pages

### C. Key References
- ARCHITECTURE.md - Detailed system architecture
- TEST_DATA.md - Complete test data specification
- blinkit-mvp-problem-statement.md - Original requirements

---

*This implementation plan is a living document and should be updated as the project progresses.*
