import React from 'react';

/**
 * ProductCard component displaying product info with add button or quantity stepper
 * @param {object} props
 * @param {object} props.product - Product object
 * @param {number} props.quantity - Quantity in cart (0 if not in cart)
 * @param {function} props.onAdd - Add to cart handler
 * @param {function} props.onIncrement - Increment quantity handler
 * @param {function} props.onDecrement - Decrement quantity handler
 */
const ProductCard = ({
  product,
  quantity = 0,
  onAdd,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="product-card">
      <div className="product-emoji">{product.emoji}</div>
      
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-pack">{product.packSize}</div>
        <div className="product-price">₹{product.price}</div>
      </div>
      
      {quantity === 0 ? (
        <button 
          className="add-button" 
          onClick={() => onAdd(product.id)}
        >
          ADD
        </button>
      ) : (
        <div className="quantity-stepper">
          <button 
            className="stepper-button" 
            onClick={() => onDecrement(product.id)}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            className="stepper-button" 
            onClick={() => onIncrement(product.id)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
