import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import EmptyState from '../components/EmptyState';
import { getProductsByCategory } from '../utils/productUtils';

/**
 * CategoryScreen component - Display products for a特定 category
 * @param {object} props
 * @param {array} props.products - All products array
 * @param {string} props.categoryName - Category name to display
 * @param {array} props.cart - Current cart array
 * @param {function} props.onBack - Back button handler
 * @param {function} props.onAddToCart - Add to cart handler
 * @param {function} props.onIncrement - Increment quantity handler
 * @param {function} props.onDecrement - Decrement quantity handler
 * @param {function} props.onCartClick - Cart click handler
 */
const CategoryScreen = ({
  products = [],
  categoryName = '',
  cart = [],
  onBack,
  onAddToCart,
  onIncrement,
  onDecrement,
  onCartClick
}) => {
  const categoryProducts = getProductsByCategory(products, categoryName);

  const getCartQuantity = (productId) => {
    const cartItem = cart.find(item => item.productId === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="screen category-screen">
      <Header
        title={categoryName}
        showBack={true}
        showSearch={false}
        showCart={true}
        cartCount={cartCount}
        onBackClick={onBack}
        onCartClick={onCartClick}
      />

      {categoryProducts.length === 0 ? (
        <EmptyState
          icon="📦"
          title="No products found"
          subtitle={`No products available in ${categoryName}`}
        />
      ) : (
        <div className="product-grid">
          {categoryProducts.map(product => (
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

export default CategoryScreen;
