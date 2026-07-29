import React from 'react';
import { AppProvider, useAppContext, SCREENS } from './context/AppContext';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import CategoryScreen from './screens/CategoryScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen';
import './styles/global.css';
import './styles/components.css';

// Main App Component that renders different screens based on current screen state
function AppContent() {
  const {
    currentScreen,
    products,
    categories,
    cart,
    currentRecommendation,
    crossSellRecommendation,
    promoBanner,
    frequentlyBought,
    selectedCategory,
    selectedPaymentMethod,
    categoryTrialLogged,
    trialCategory,
    navigateBack,
    navigateTo,
    navigateToCategory,
    handleSearchClick,
    handleCartClick,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    handleAddRecommendation,
    handleSkipRecommendation,
    selectPaymentMethod,
    placeOrder,
    resetOrder
  } = useAppContext();

  // Render appropriate screen based on current screen state
  const renderScreen = () => {
    switch (currentScreen) {
      case SCREENS.HOME:
        return (
          <HomeScreen
            categories={categories}
            frequentlyBought={frequentlyBought}
            currentRecommendation={currentRecommendation}
            promoBanner={promoBanner}
            cart={cart}
            onCategoryClick={navigateToCategory}
            onSearchClick={handleSearchClick}
            onAddToCart={addToCart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onSkipRecommendation={handleSkipRecommendation}
            onCartClick={handleCartClick}
          />
        );

      case SCREENS.SEARCH:
        return (
          <SearchScreen
            products={products}
            cart={cart}
            searchQuery={searchQuery}
            onBack={navigateBack}
            onAddToCart={addToCart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onCartClick={handleCartClick}
            onSearchChange={handleSearchChange}
          />
        );

      case SCREENS.CATEGORY:
        return (
          <CategoryScreen
            products={products}
            categoryName={selectedCategory}
            cart={cart}
            onBack={navigateBack}
            onAddToCart={addToCart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onCartClick={handleCartClick}
          />
        );

      case SCREENS.CART:
        return (
          <CartScreen
            cart={cart}
            products={products}
            crossSellRecommendation={crossSellRecommendation}
            onBack={navigateBack}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onAddToCart={handleAddRecommendation}
            onSkipRecommendation={handleSkipRecommendation}
            onCheckout={() => navigateTo(SCREENS.CHECKOUT)}
          />
        );

      case SCREENS.CHECKOUT:
        return (
          <CheckoutScreen
            cart={cart}
            products={products}
            selectedPaymentMethod={selectedPaymentMethod}
            onBack={navigateBack}
            onPaymentMethodSelect={selectPaymentMethod}
            onPlaceOrder={placeOrder}
          />
        );

      case SCREENS.ORDER_CONFIRMATION:
        return (
          <OrderConfirmationScreen
            cart={cart}
            products={products}
            categoryTrialLogged={categoryTrialLogged}
            trialCategory={trialCategory}
            onContinue={resetOrder}
          />
        );

      default:
        return (
          <HomeScreen
            categories={categories}
            frequentlyBought={frequentlyBought}
            currentRecommendation={currentRecommendation}
            promoBanner={promoBanner}
            cart={cart}
            onCategoryClick={navigateToCategory}
            onSearchClick={handleSearchClick}
            onAddToCart={addToCart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
            onSkipRecommendation={handleSkipRecommendation}
            onCartClick={handleCartClick}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

// Main App component with context provider
function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
