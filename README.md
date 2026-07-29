# Blinkit MVP - Past-Purchase Personalisation

A React-based MVP prototype demonstrating past-purchase personalization for a grocery delivery app, inspired by Blinkit.

## Features

- **Product Catalog**: 100 products across 10 categories with emoji placeholders
- **Personalized Recommendations**: AI-driven recommendations with trust badges and reasoning
- **Cart Management**: Add/remove items, quantity adjustment, bill calculation
- **Category Trial Detection**: Logs when users try new categories
- **Cross-sell Logic**: Shows relevant recommendations in cart
- **Checkout Flow**: Address selection, payment method selection, order confirmation
- **Responsive Design**: Mobile-first UI with Blinkit branding

## Project Structure

```
blinkit-mvp/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── EmptyState.jsx
│   │   └── PersonalisedRecommendationCard.jsx
│   ├── context/                # React Context for state management
│   │   └── AppContext.jsx
│   ├── data/                   # Static data files
│   │   ├── products.js         # 100 products catalog
│   │   ├── categories.js       # 10 categories
│   │   ├── recommendations.js  # 8 personalised recommendations
│   │   ├── paymentMethods.js   # Payment methods
│   │   ├── promoBanners.js     # Promo banners
│   │   ├── userPersona.js      # User persona data
│   │   └── frequentlyBought.js # Frequently bought products
│   ├── screens/                # Screen components
│   │   ├── HomeScreen.jsx
│   │   ├── SearchScreen.jsx
│   │   ├── CategoryScreen.jsx
│   │   ├── CartScreen.jsx
│   │   ├── CheckoutScreen.jsx
│   │   └── OrderConfirmationScreen.jsx
│   ├── styles/                 # CSS styles
│   │   ├── variables.css       # CSS variables
│   │   ├── global.css          # Global styles
│   │   └── components.css      # Component-specific styles
│   ├── utils/                  # Utility functions
│   │   ├── cartUtils.js        # Cart management utilities
│   │   ├── productUtils.js     # Product utilities
│   │   └── recommendationUtils.js # Recommendation logic
│   ├── App.js                  # Main App component
│   └── index.js                # React entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
├── ARCHITECTURE.md             # Detailed architecture documentation
├── TEST_DATA.md                # Test data documentation
├── IMPLEMENTATION_PLAN.md      # Step-by-step implementation plan
└── blinkit-mvp-problem-statement.md # Original problem statement
```

## Tech Stack

- **React 18.2.0**: UI library
- **Vite 4.3.9**: Build tool and dev server
- **CSS**: Custom styling with CSS variables
- **React Context API**: State management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/swetapadmaswain/blinkit_mvp.git
cd blinkit_mvp
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Key Features Explained

### Personalized Recommendations

The MVP demonstrates past-purchase personalization through:

1. **Trust Badges**: Each recommendation shows a trust badge (Bestseller, Highly Rated, Trending Nearby)
2. **Reasoning**: Clear explanations for why a product is recommended
3. **Skip/Add Logic**: Users can skip recommendations or add them to cart
4. **Category Trial Detection**: Logs when users try new categories for the first time

### Cart & Checkout

- **Free Delivery Threshold**: Orders above ₹199 qualify for free delivery
- **Bill Calculation**: Automatic calculation of item total, delivery fee, handling charge
- **Cross-sell**: Relevant recommendations shown in cart screen
- **Payment Methods**: UPI, Card, Cash on Delivery options

### Screen Navigation

The app follows a simple navigation flow:

1. **Home Screen**: Categories, frequently bought, personalized recommendations
2. **Search Screen**: Search and filter all products
3. **Category Screen**: View products by category
4. **Cart Screen**: View cart items, adjust quantities, see cross-sell
5. **Checkout Screen**: Select address and payment method
6. **Order Confirmation**: Success message with category trial note

## Data Models

### Product
```javascript
{
  id: string,
  name: string,
  packSize: string,
  price: number,
  category: string,
  emoji: string
}
```

### Recommendation
```javascript
{
  id: string,
  productId: string,
  trustBadge: string,
  reasoning: string,
  dismissed: boolean
}
```

### Cart Item
```javascript
{
  productId: string,
  quantity: number
}
```

## State Management

The app uses React Context API for global state management:

- **Cart State**: Items in cart, quantities
- **Navigation State**: Current screen, selected category
- **Recommendation State**: Current recommendation, dismissal status
- **Payment State**: Selected payment method
- **Order History**: User's purchased categories, order count

## Styling

The app uses CSS custom properties for consistent theming:

- **Brand Colors**: Blinkit yellow (#FFD100), black, gray
- **Trust Badge Colors**: Distinct colors for each badge type
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, 2xl)
- **Typography**: System fonts with weight scale
- **Border Radius**: Consistent radius scale

## Testing & Validation

The implementation includes:

- Data validation functions for all data files
- Utility functions for cart, product, and recommendation operations
- Category trial detection logic
- Cross-sell display logic

## Future Enhancements

Potential improvements for production:

- Backend API integration
- Real user authentication
- Persistent cart storage (localStorage/API)
- Advanced recommendation algorithms
- Real-time inventory tracking
- Order tracking system
- Payment gateway integration
- Analytics and user behavior tracking

## Documentation

- **ARCHITECTURE.md**: Detailed system architecture and component hierarchy
- **TEST_DATA.md**: Complete test data documentation
- **IMPLEMENTATION_PLAN.md**: Step-by-step implementation plan
- **blinkit-mvp-problem-statement.md**: Original problem statement

## License

MIT

## Author

Blinkit MVP Prototype
