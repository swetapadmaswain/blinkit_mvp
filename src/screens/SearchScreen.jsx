import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';
import { searchProducts } from '../utils/productUtils';

/**
 * SearchScreen component - Search and filter products
 * @param {object} props
 * @param {array} props.products - All products array
 * @param {array} props.cart - Current cart array
 * @param {string} props.searchQuery - Initial search query
 * @param {function} props.onBack - Back button handler
 * @param {function} props.onAddToCart - Add to cart handler
 * @param {function} props.onIncrement - Increment quantity handler
 * @param {function} props.onDecrement - Decrement quantity handler
 * @param {function} props.onCartClick - Cart click handler
 * @param {function} props.onSearchChange - Search change handler
 */
const SearchScreen = ({
  products = [],
  cart = [],
  searchQuery = '',
  onBack,
  onAddToCart,
  onIncrement,
  onDecrement,
  onCartClick,
  onSearchChange
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const filtered = searchProducts(products, localSearchQuery);
    setFilteredProducts(filtered);
  }, [localSearchQuery, products]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    if (onSearchChange) {
      onSearchChange(query);
    }
  };

  const getCartQuantity = (productId) => {
    const cartItem = cart.find(item => item.productId === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="screen search-screen">
      <Header
        title="Search"
        showBack={true}
        showSearch={false}
        showCart={true}
        cartCount={cartCount}
        onBackClick={onBack}
        onCartClick={onCartClick}
      />

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products..."
          value={localSearchQuery}
          onChange={handleSearchChange}
          autoFocus
        />
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No results found"
          subtitle="Try searching for something else"
        />
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
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
      )}
    </div>
  );
};

export default SearchScreen;
