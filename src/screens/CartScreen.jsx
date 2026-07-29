import React from 'react';
import Header from '../components/Header';
import PersonalisedRecommendationCard from '../components/PersonalisedRecommendationCard';
import { calculateBill, getCartItemsWithDetails } from '../utils/cartUtils';

/**
 * CartScreen component - Display cart items and bill breakdown
 * @param {object} props
 * @param {array} props.cart - Current cart array
 * @param {array} props.products - All products array
 * @param {object} props.crossSellRecommendation - Cross-sell recommendation object
 * @param {function} props.onBack - Back button handler
 * @param {function} props.onIncrement - Increment quantity handler
 * @param {function} props.onDecrement - Decrement quantity handler
 * @param {function} props.onAddToCart - Add to cart handler
 * @param {function} props.onSkipRecommendation - Skip recommendation handler
 * @param {function} props.onCheckout - Checkout button handler
 */
const CartScreen = ({
  cart = [],
  products = [],
  crossSellRecommendation = null,
  onBack,
  onIncrement,
  onDecrement,
  onAddToCart,
  onSkipRecommendation,
  onCheckout
}) => {
  const cartItemsWithDetails = getCartItemsWithDetails(cart, products);
  const bill = calculateBill(cart, products);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="screen cart-screen">
      <Header
        title="Cart"
        showBack={true}
        showSearch={false}
        showCart={false}
        cartCount={cartCount}
        onBackClick={onBack}
      />

      {cartItemsWithDetails.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🛒</div>
          <h3 className="empty-state-title">Your cart is empty</h3>
          <p className="empty-state-subtitle">Add items to get started</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cartItemsWithDetails.map(item => (
              <div key={item.productId} className="cart-item">
                <div className="cart-item-emoji">{item.product.emoji}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.product.name}</div>
                  <div className="cart-item-pack">{item.product.packSize}</div>
                  <div className="cart-item-price">₹{item.product.price}</div>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="stepper-button"
                    onClick={() => onDecrement(item.productId)}
                  >
                    −
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    className="stepper-button"
                    onClick={() => onIncrement(item.productId)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-sell Recommendation */}
          {crossSellRecommendation && (
            <PersonalisedRecommendationCard
              recommendation={crossSellRecommendation}
              mode="cross-sell"
              onAdd={onAddToCart}
              onSkip={onSkipRecommendation}
            />
          )}

          {/* Bill Breakdown */}
          <div className="bill-breakdown">
            <div className="bill-row">
              <span>Item Total</span>
              <span>₹{bill.itemTotal}</span>
            </div>
            <div className="bill-row">
              <span>Delivery Fee</span>
              <span>{bill.deliveryFee === 0 ? 'FREE' : `₹${bill.deliveryFee}`}</span>
            </div>
            <div className="bill-row">
              <span>Handling Charge</span>
              <span>₹{bill.handlingCharge}</span>
            </div>
            {!bill.qualifiesForFreeDelivery && (
              <div className="bill-row delivery-notice">
                <span>Add ₹{bill.freeDeliveryThreshold - bill.itemTotal} more for free delivery</span>
              </div>
            )}
            <div className="bill-row total">
              <span>Grand Total</span>
              <span>₹{bill.grandTotal}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="checkout-button" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartScreen;
