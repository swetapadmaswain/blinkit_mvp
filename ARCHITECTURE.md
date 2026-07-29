# Blinkit Past-Purchase Personalisation MVP - Architecture

## 1. System Overview

### 1.1 Architecture Type
- **Single-page application (SPA)**
- **Client-side only** (no backend, no API calls)
- **Local state management** (in-memory)
- **Responsive mobile-first design** (360-400px primary viewport)

### 1.2 Technology Stack
- **Frontend Framework**: React (or plain HTML/CSS/JS)
- **Styling**: CSS with Blinkit brand colors (yellow/black)
- **State Management**: React useState/useContext (or vanilla JS state)
- **Data Storage**: In-memory JavaScript objects (no persistence)
- **Build**: No build step required (single file or minimal setup)

---

## 2. Component Architecture

### 2.1 Component Hierarchy

```
App
├── Header (persistent)
│   ├── BackButton (context-aware)
│   ├── SearchIcon
│   └── CartIcon (with live count)
├── HomeScreen
│   ├── SearchBar (trigger)
│   ├── CategoryChips (horizontal scroll)
│   ├── PromoBanner (static)
│   ├── FrequentlyBoughtRow (horizontal scroll)
│   └── PersonalisedRecommendationCard
├── SearchScreen
│   ├── SearchInput (live filter)
│   ├── ProductGrid (filtered results)
│   └── EmptyState / NoResultsState
├── CategoryScreen
│   ├── CategoryHeader
│   └── ProductGrid (category-filtered)
├── CartScreen
│   ├── CartItemList
│   │   └── CartItem (with quantity stepper)
│   ├── BillBreakdown
│   └── PersonalisedRecommendationCard (cross-sell)
├── CheckoutScreen
│   ├── DeliveryAddressBlock (static)
│   ├── PaymentMethodSelector (visual only)
│   ├── BillRecap
│   └── PlaceOrderButton
└── OrderConfirmationScreen
    ├── SuccessMessage
    ├── OrderSummary
    └── CategoryTrialNote
```

### 2.2 Component Responsibilities

#### Header
- **Persistent across all screens**
- **Back button**: Hidden on Home, visible on all other screens
- **Cart icon**: Displays live item count badge
- **Search icon**: Triggers Search screen

#### HomeScreen
- **Entry point** of the application
- **Search bar**: Non-functional trigger to Search screen
- **Category chips**: Horizontal scrollable list
- **Promo banner**: Static promotional content
- **Frequently bought**: Horizontal product row
- **Personalised card**: Main feature under test

#### SearchScreen
- **Search input**: Live filtering of product catalog
- **Product grid**: Displays filtered products
- **Empty states**: No search query, no results

#### CategoryScreen
- **Category header**: Shows selected category name
- **Product grid**: Category-filtered products

#### ProductCard / GridItem
- **Display**: Emoji/placeholder image, name, pack size, price
- **Add button**: Transforms to quantity stepper (−, qty, +) when added

#### CartScreen
- **Cart items**: List with quantity steppers
- **Remove logic**: Item removed when quantity reaches 0
- **Bill breakdown**: Item total, delivery fee, handling charge, grand total
- **Cross-sell**: Personalised recommendation if not yet added

#### CheckoutScreen
- **Delivery address**: Static display
- **Payment methods**: UPI, Card, COD (visual selection only)
- **Bill recap**: Summary before order placement
- **Place order**: Triggers confirmation

#### OrderConfirmationScreen
- **Success state**: Order placed message
- **Order summary**: Item count, total
- **Category trial note**: Indicates if personalised item was purchased

---

## 3. Data Models

### 3.1 Product Model

```typescript
interface Product {
  id: string;
  name: string;
  packSize: string;
  price: number;
  category: Category;
  emoji: string;
  image?: string; // optional placeholder
}
```

### 3.2 Category Model

```typescript
type Category = 
  | 'Grocery'
  | 'Snacks'
  | 'Dairy'
  | 'Personal Care'
  | 'Pet Care'
  | 'Home'
  | 'Beverages'
  | 'Baby Care';
```

### 3.3 Cart Item Model

```typescript
interface CartItem {
  productId: string;
  quantity: number;
}
```

### 3.4 Personalised Recommendation Model

```typescript
interface PersonalisedRecommendation {
  productId: string;
  trustBadge: 'Bestseller' | 'Highly Rated' | 'Trending Nearby';
  reasoning: string;
  dismissed: boolean;
}
```

### 3.5 Order History Model (Session-based)

```typescript
interface OrderHistory {
  purchasedCategories: Category[];
  orderCount: number;
}
```

### 3.6 Session State Model

```typescript
interface SessionState {
  cart: CartItem[];
  currentScreen: Screen;
  categoryTrialLogged: boolean;
  dismissedRecommendations: string[];
  selectedPaymentMethod: 'UPI' | 'Card' | 'COD';
  orderHistory: OrderHistory;
}
```

---

## 4. State Management Architecture

### 4.1 Global State

```typescript
interface AppState {
  // Product catalog (static)
  products: Product[];
  
  // Personalised recommendations (static pool)
  recommendations: PersonalisedRecommendation[];
  
  // Session state (dynamic)
  session: SessionState;
}
```

### 4.2 State Update Rules

1. **Cart updates**: Immediate header count refresh
2. **Quantity changes**: Live bill recalculation
3. **Skip recommendation**: Dismiss current, show next candidate
4. **Add recommendation**: Log category trial, add to cart
5. **Place order**: Clear cart, update order history, show confirmation
6. **New order**: Reset cart, preserve order history

### 4.3 Derived State

```typescript
// Cart total
const cartTotal = cart.items.reduce(
  (sum, item) => sum + (product.price * item.quantity), 
  0
);

// Delivery fee (free above ₹199)
const deliveryFee = cartTotal >= 199 ? 0 : 40;

// Handling charge (fixed)
const handlingCharge = 2;

// Grand total
const grandTotal = cartTotal + deliveryFee + handlingCharge;

// Cart item count
const cartCount = cart.items.reduce(
  (sum, item) => sum + item.quantity, 
  0
);

// Current recommendation (first non-dismissed)
const currentRecommendation = recommendations.find(r => !r.dismissed);
```

---

## 5. Interaction Flows

### 5.1 Main User Flow

```
Home Screen
    ↓ [tap category chip]
Category Screen
    ↓ [tap product add]
Product added to cart
    ↓ [tap cart icon]
Cart Screen
    ↓ [tap checkout]
Checkout Screen
    ↓ [select payment, tap place order]
Order Confirmation Screen
    ↓ [tap continue/new order]
Home Screen (reset)
```

### 5.2 Search Flow

```
Home Screen
    ↓ [tap search bar/icon]
Search Screen
    ↓ [type query]
Live filter results
    ↓ [tap product add]
Product added to cart
    ↓ [tap back]
Home Screen
```

### 5.3 Personalised Recommendation Flow

**Home Feed:**
```
Personalised Card displayed
    ↓ [tap Add]
- Add to cart
- Log category trial
- Update cart count
- Remove card from home
    OR
    ↓ [tap Skip]
- Dismiss current recommendation
- Show next candidate
- Keep category available for future
```

**Cart Cross-sell:**
```
Cart Screen
    ↓ [if personalised item not in cart]
Show recommendation card
    ↓ [tap Add]
- Add to cart
- Log category trial
- Update bill
- Remove cross-sell
```

---

## 6. Business Logic Rules

### 6.1 Cart Management

1. **Add to cart**: 
   - If product exists: increment quantity
   - If new: create cart item with quantity = 1

2. **Remove from cart**:
   - Decrement quantity
   - If quantity = 0: remove item from cart

3. **Bill calculation**:
   - Item total = Σ(price × quantity)
   - Delivery fee = 0 if item total ≥ ₹199, else ₹40
   - Handling charge = ₹2 (fixed)
   - Grand total = item total + delivery fee + handling charge

### 6.2 Recommendation Logic

1. **Display rule**: Show first non-dismissed recommendation
2. **Skip rule**: Only dismiss current item, not category
3. **Add rule**: Log category trial, add to cart
4. **Cross-sell rule**: Show in cart if not yet added
5. **Pool rotation**: Cycle through available recommendations

### 6.3 Category Trial Detection

```typescript
const isCategoryTrial = (
  recommendation: PersonalisedRecommendation,
  orderHistory: OrderHistory
): boolean => {
  const product = getProduct(recommendation.productId);
  return !orderHistory.purchasedCategories.includes(product.category);
};
```

### 6.4 Order Placement

1. **Validate cart**: Must have at least 1 item
2. **Validate payment**: Must select payment method
3. **Update order history**: Add product categories
4. **Clear cart**: Reset to empty
5. **Show confirmation**: Display success state
6. **Reset flow**: Return to home for new order

---

## 7. Test Data Architecture

### 7.1 Product Catalog Structure

**Categories**: 8 categories
**Products per category**: 3-5 products
**Total products**: 30-40 products

**Category distribution**:
- Grocery: 5 products
- Snacks: 4 products
- Dairy: 4 products
- Personal Care: 5 products
- Pet Care: 4 products
- Home: 4 products
- Beverages: 4 products
- Baby Care: 4 products

### 7.2 Personalised Recommendation Pool

**Total candidates**: 6-8 recommendations
**Target categories**: Categories not in typical user history
**Trust badges**: Bestseller, Highly Rated, Trending Nearby
**Reasoning patterns**: Based on purchase history analysis

### 7.3 User Persona Data

**"Occasional Explorer" profile**:
- **Frequently bought categories**: Grocery, Snacks, Dairy
- **Rarely bought categories**: Personal Care, Pet Care, Home
- **Never bought categories**: Baby Care

---

## 8. UI/UX Specifications

### 8.1 Brand Colors

```css
--blinkit-yellow: #FFD100;
--blinkit-black: #000000;
--blinkit-gray: #F5F5F5;
--blinkit-text: #333333;
--blinkit-border: #E0E0E0;
```

### 8.2 Typography

- **Headings**: Bold, 18-24px
- **Body**: Regular, 14-16px
- **Prices**: Bold, 16-18px
- **Buttons**: Bold, 14-16px

### 8.3 Spacing

- **Card padding**: 12-16px
- **Grid gap**: 8-12px
- **Section margin**: 16-24px

### 8.4 Component Dimensions

- **Product card**: 100-120px width
- **Category chip**: 80-100px width
- **Header**: 56px height
- **Bottom navigation**: 56px height (if used)

---

## 9. Screen-by-Screen Specifications

### 9.1 Home Screen

**Layout**:
```
┌─────────────────────────┐
│ Header (56px)           │
├─────────────────────────┤
│ Search Bar (48px)       │
├─────────────────────────┤
│ Category Chips (48px)   │
├─────────────────────────┤
│ Promo Banner (120px)    │
├─────────────────────────┤
│ Frequently Bought       │
│ [Product][Product][...] │
├─────────────────────────┤
│ Personalised Card       │
│ [Recommendation]        │
│ [Add] [Skip]            │
└─────────────────────────┘
```

### 9.2 Search Screen

**Layout**:
```
┌─────────────────────────┐
│ Header (56px)            │
├─────────────────────────┤
│ Search Input (48px)      │
├─────────────────────────┤
│ Product Grid             │
│ [P][P][P]               │
│ [P][P][P]               │
└─────────────────────────┘
```

### 9.3 Cart Screen

**Layout**:
```
┌─────────────────────────┐
│ Header (56px)            │
├─────────────────────────┤
│ Cart Items               │
│ [Item] [-] 1 [+]         │
│ [Item] [-] 2 [+]         │
├─────────────────────────┤
│ Bill Breakdown           │
│ Item Total: ₹XXX         │
│ Delivery: ₹XX           │
│ Handling: ₹2            │
│ Grand Total: ₹XXX       │
├─────────────────────────┤
│ Personalised Card       │
│ [Cross-sell]            │
├─────────────────────────┤
│ Checkout Button         │
└─────────────────────────┘
```

### 9.4 Checkout Screen

**Layout**:
```
┌─────────────────────────┐
│ Header (56px)            │
├─────────────────────────┤
│ Delivery Address        │
│ [Static Address]        │
├─────────────────────────┤
│ Payment Method          │
│ ○ UPI                   │
│ ● Card (selected)       │
│ ○ COD                   │
├─────────────────────────┤
│ Bill Recap              │
│ [Summary]               │
├─────────────────────────┤
│ Place Order Button      │
└─────────────────────────┘
```

### 9.5 Order Confirmation Screen

**Layout**:
```
┌─────────────────────────┐
│ Success Icon            │
│ Order Placed!           │
├─────────────────────────┤
│ Order Summary           │
│ Items: X                │
│ Total: ₹XXX             │
├─────────────────────────┤
│ Category Trial Note     │
│ ✓ You tried a new       │
│   category: Pet Care    │
├─────────────────────────┤
│ Continue Shopping       │
└─────────────────────────┘
```

---

## 10. Implementation Phases

### Phase 1: Foundation
- [ ] Setup project structure
- [ ] Define data models
- [ ] Create test data catalog
- [ ] Implement basic routing

### Phase 2: Core Screens
- [ ] Build Header component
- [ ] Build Home screen
- [ ] Build Search screen
- [ ] Build Category screen

### Phase 3: Cart & Checkout
- [ ] Build Cart screen
- [ ] Implement cart logic
- [ ] Build Checkout screen
- [ ] Implement bill calculation

### Phase 4: Personalisation Feature
- [ ] Build PersonalisedRecommendationCard
- [ ] Implement skip/add logic
- [ ] Add category trial detection
- [ ] Implement cross-sell in cart

### Phase 5: Polish
- [ ] Apply Blinkit styling
- [ ] Add empty states
- [ ] Test all flows
- [ ] Verify math correctness

---

## 11. Success Metrics

### 11.1 Functional Requirements
- [ ] Complete user flow from home to order confirmation
- [ ] Cart math is accurate (no negative totals, no NaN)
- [ ] Skip/add logic works correctly
- [ ] Category trial is properly detected and displayed
- [ ] All screens are accessible via navigation

### 11.2 Non-Functional Requirements
- [ ] Works offline (no external calls)
- [ ] Responsive design (360-400px primary)
- [ ] Single file or minimal build setup
- [ ] Blinkit brand consistency

### 11.3 Feature Validation
- [ ] Personalised card visible on home
- [ ] Trust badge and reasoning displayed
- [ ] Skip shows next recommendation
- [ ] Add logs category trial
- [ ] Cross-sell appears in cart if not added
- [ ] Category trial note on confirmation

---

## 12. File Structure

```
Blinkit_MVP/
├── ARCHITECTURE.md
├── blinkit-mvp-problem-statement.md
├── TEST_DATA.md
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data/
│       ├── products.js
│       ├── recommendations.js
│       └── userPersona.js
└── README.md
```

---

## 13. Key Technical Decisions

### 13.1 Why React?
- Component-based architecture matches screen requirements
- Built-in state management (useState, useContext)
- Easy to prototype without build tools (via CDN)
- Declarative UI for complex interactions

### 13.2 Why Local State?
- No backend required per scope
- Session-only persistence is sufficient
- Faster iteration for MVP
- Simplifies deployment (no database)

### 13.3 Why In-Memory Data?
- Test data is static per requirements
- No need for persistence across sessions
- Faster load times
- Easier to modify for testing

---

## 14. Edge Cases & Validation

### 14.1 Cart Edge Cases
- Empty cart checkout → Block with message
- Zero quantity → Remove item
- Negative quantity → Prevent

### 14.2 Recommendation Edge Cases
- All recommendations dismissed → Show generic message
- Recommendation already in cart → Hide card
- Recommendation out of stock → Skip to next

### 14.3 Search Edge Cases
- Empty query → Show all products
- No results → Show empty state
- Special characters → Handle gracefully

### 14.4 Checkout Edge Cases
- No payment selected → Block with message
- Cart modified during checkout → Recalculate bill

---

## 15. Testing Strategy

### 15.1 Manual Test Cases
1. **Happy path**: Home → Add product → Cart → Checkout → Confirm
2. **Search flow**: Search → Add product → Cart → Checkout
3. **Category flow**: Category chip → Add product → Cart → Checkout
4. **Skip recommendation**: Skip → Next recommendation → Add
5. **Add recommendation**: Add → Category trial logged → Confirm
6. **Cross-sell**: Don't add on home → See in cart → Add
7. **Empty cart**: Try checkout → Blocked
8. **Bill math**: Verify calculations at each step

### 15.2 Validation Checklist
- [ ] Cart count updates immediately
- [ ] Bill recalculates on quantity change
- [ ] Free delivery threshold works (₹199)
- [ ] Skip only dismisses one item
- [ ] Add logs category trial
- [ ] Cross-sell appears if not added
- [ ] Category trial note shows correctly
- [ ] Order clears cart after placement

---

## 16. Deployment

### 16.1 Local Development
- Open `index.html` in browser
- No server required
- No build step

### 16.2 Static Hosting
- Upload to any static host (GitHub Pages, Netlify, Vercel)
- Single file deployment
- No backend configuration

---

## 17. Future Enhancements (Out of Scope)

- Real backend API integration
- User authentication
- Persistent order history
- Real recommendation engine
- Payment gateway integration
- Push notifications
- Delivery tracking
- Ratings and reviews
