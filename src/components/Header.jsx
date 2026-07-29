import React from 'react';

/**
 * Header component with back button, title, search icon, and cart icon
 * @param {object} props
 * @param {string} props.title - Header title
 * @param {boolean} props.showBack - Whether to show back button
 * @param {boolean} props.showSearch - Whether to show search icon
 * @param {boolean} props.showCart - Whether to show cart icon
 * @param {number} props.cartCount - Cart item count
 * @param {function} props.onBackClick - Back button click handler
 * @param {function} props.onSearchClick - Search icon click handler
 * @param {function} props.onCartClick - Cart icon click handler
 */
const Header = ({
  title = 'Blinkit',
  showBack = false,
  showSearch = true,
  showCart = true,
  cartCount = 0,
  onBackClick,
  onSearchClick,
  onCartClick
}) => {
  return (
    <div className="header">
      <div className="header-content">
        {showBack && (
          <button 
            className="header-back-button" 
            onClick={onBackClick}
            aria-label="Go back"
          >
            ←
          </button>
        )}
        
        <h1 className="header-title">{title}</h1>
        
        <div className="header-actions">
          {showSearch && (
            <button 
              className="header-action-button" 
              onClick={onSearchClick}
              aria-label="Search"
            >
              🔍
            </button>
          )}
          
          {showCart && (
            <button 
              className="header-action-button header-cart-button" 
              onClick={onCartClick}
              aria-label="View cart"
            >
              🛒
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
