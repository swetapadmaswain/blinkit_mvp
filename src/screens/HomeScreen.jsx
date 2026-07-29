import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import PersonalisedRecommendationCard from '../components/PersonalisedRecommendationCard';

/**
 * HomeScreen component - Main home screen with search, categories, promo, frequently bought, and recommendations
 * @param {object} props
 * @param {array} props.categories - Array of categories
 * @param {array} props.frequentlyBought - Array of frequently bought products
 * @param {object} props.currentRecommendation - Current recommendation object
 * @param {object} props.promoBanner - Promo banner object
 * @param {array} props.cart - Current cart array
 * @param {function} props.onCategoryClick - Category click handler
 * @param {function} props.onSearchClick - Search click handler
 * @param {function} props.onAddToCart - Add to cart handler
 * @param {function} props.onIncrement - Increment quantity handler
 * @param {function} props.onDecrement - Decrement quantity handler
 * @param {function} props.onSkipRecommendation - Skip recommendation handler
 * @param {function} props.onCartClick - Cart click handler
 */
const HomeScreen = ({
  categories = [],
  frequentlyBought = [],
  currentRecommendation = null,
  promoBanner = null,
  cart = [],
  onCategoryClick,
  onSearchClick,
  onAddToCart,
  onIncrement,
  onDecrement,
  onSkipRecommendation,
  onCartClick
}) => {
  const getCartQuantity = (productId) => {
    const cartItem = cart.find(item => item.productId === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="screen home-screen">
      <Header
        title="Blinkit"
        showBack={false}
        showSearch={true}
        showCart={true}
        cartCount={cartCount}
        onSearchClick={onSearchClick}
        onCartClick={onCartClick}
      />

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          onClick={onSearchClick}
        />
      </div>

      {/* Category Chips */}
      <div className="category-chips">
        {categories.map(category => (
          <button
            key={category.id}
            className="category-chip"
            onClick={() => onCategoryClick(category.name)}
          >
            <span className="category-emoji">{category.emoji}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Promo Banner */}
      {promoBanner && (
        <div 
          className="promo-banner"
          style={{ backgroundColor: promoBanner.backgroundColor }}
        >
          <div className="promo-emoji">{promoBanner.emoji}</div>
          <div className="promo-content">
            <div className="promo-title">{promoBanner.title}</div>
            <div className="promo-subtitle">{promoBanner.subtitle}</div>
          </div>
        </div>
      )}

      {/* Frequently Bought Section */}
      <div className="section">
        <h2 className="section-title">Frequently Bought</h2>
        <div className="product-row">
          <div className="product-row-items">
            {frequentlyBought.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={getCartQuantity(product.id)}
                onAdd={onAddToCart}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Personalised Recommendation */}
      {currentRecommendation && (
        <PersonalisedRecommendationCard
          recommendation={currentRecommendation}
          mode="home"
          onAdd={onAddToCart}
          onSkip={onSkipRecommendation}
        />
      )}
    </div>
  );
};

export default HomeScreen;
