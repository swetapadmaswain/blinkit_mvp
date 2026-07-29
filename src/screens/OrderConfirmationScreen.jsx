import React from 'react';
import Header from '../components/Header';
import { calculateBill } from '../utils/cartUtils';

/**
 * OrderConfirmationScreen component - Display order confirmation with success message
 * @param {object} props
 * @param {array} props.cart - Current cart array
 * @param {array} props.products - All products array
 * @param {boolean} props.categoryTrialLogged - Whether category trial was logged
 * @param {string} props.trialCategory - Category that was trialed
 * @param {function} props.onContinue - Continue shopping handler
 */
const OrderConfirmationScreen = ({
  cart = [],
  products = [],
  categoryTrialLogged = false,
  trialCategory = '',
  onContinue
}) => {
  const bill = calculateBill(cart, products);

  return (
    <div className="screen order-confirmation">
      <Header
        title="Order Placed"
        showBack={false}
        showSearch={false}
        showCart={false}
      />

      <div className="order-confirmation">
        <div className="success-icon">✅</div>
        <h2 className="confirmation-title">Order Placed Successfully!</h2>
        <p className="confirmation-subtitle">
          Your order will be delivered in 10 minutes
        </p>

        {/* Order Summary */}
        <div className="bill-breakdown">
          <div className="bill-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>
          <div className="bill-row">
            <span>Total Amount</span>
            <span>₹{bill.grandTotal}</span>
          </div>
        </div>

        {/* Category Trial Note */}
        {categoryTrialLogged && trialCategory && (
          <div className="category-trial-note">
            <h4>🎉 Category Trial Detected!</h4>
            <p>
              You tried <strong>{trialCategory}</strong> for the first time. 
              We'll remember this for better recommendations.
            </p>
          </div>
        )}

        <button className="continue-button" onClick={onContinue}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;
