import React from 'react';
import Header from '../components/Header';
import { getDefaultAddress } from '../data/userPersona';
import { getPaymentMethods } from '../data/paymentMethods';
import { calculateBill } from '../utils/cartUtils';

/**
 * CheckoutScreen component - Display checkout flow with address and payment selection
 * @param {object} props
 * @param {array} props.cart - Current cart array
 * @param {array} props.products - All products array
 * @param {string} props.selectedPaymentMethod - Selected payment method ID
 * @param {function} props.onBack - Back button handler
 * @param {function} props.onPaymentMethodSelect - Payment method selection handler
 * @param {function} props.onPlaceOrder - Place order handler
 */
const CheckoutScreen = ({
  cart = [],
  products = [],
  selectedPaymentMethod = null,
  onBack,
  onPaymentMethodSelect,
  onPlaceOrder
}) => {
  const defaultAddress = getDefaultAddress();
  const paymentMethods = getPaymentMethods();
  const bill = calculateBill(cart, products);

  const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }
    onPlaceOrder();
  };

  return (
    <div className="screen checkout-screen">
      <Header
        title="Checkout"
        showBack={true}
        showSearch={false}
        showCart={false}
        onBackClick={onBack}
      />

      {/* Delivery Address */}
      <div className="section">
        <h2 className="section-title">Delivery Address</h2>
        {defaultAddress && (
          <div className="address-block">
            <div className="address-type">{defaultAddress.type}</div>
            <div className="address-line1">{defaultAddress.line1}</div>
            <div className="address-line2">{defaultAddress.line2}</div>
            <div className="address-city">
              {defaultAddress.city}, {defaultAddress.state} - {defaultAddress.pincode}
            </div>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="section">
        <h2 className="section-title">Payment Method</h2>
        <div className="payment-methods">
          {paymentMethods.map(method => (
            <button
              key={method.id}
              className={`payment-method-option ${
                selectedPaymentMethod === method.id ? 'selected' : ''
              }`}
              onClick={() => onPaymentMethodSelect(method.id)}
            >
              <div className="payment-method-icon">{method.icon}</div>
              <div className="payment-method-info">
                <div className="payment-method-name">{method.name}</div>
                <div className="payment-method-description">{method.description}</div>
              </div>
              {selectedPaymentMethod === method.id && (
                <div className="payment-method-check">✓</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bill Recap */}
      <div className="section">
        <h2 className="section-title">Order Summary</h2>
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
          <div className="bill-row total">
            <span>Grand Total</span>
            <span>₹{bill.grandTotal}</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        className="checkout-button"
        onClick={handlePlaceOrder}
        disabled={!selectedPaymentMethod}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutScreen;
