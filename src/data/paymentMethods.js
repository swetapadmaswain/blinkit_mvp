// Payment methods data

export const paymentMethods = [
  {
    id: "PAY_UPI",
    name: "UPI",
    icon: "📱",
    description: "Google Pay, PhonePe, Paytm"
  },
  {
    id: "PAY_CARD",
    name: "Card",
    icon: "💳",
    description: "Credit, Debit, ATM Card"
  },
  {
    id: "PAY_COD",
    name: "Cash on Delivery",
    icon: "💵",
    description: "Pay when you receive"
  }
];

/**
 * Get payment method by ID
 * @param {string} paymentMethodId - Payment method ID
 * @returns {object|null} Payment method object or null if not found
 */
export const getPaymentMethodById = (paymentMethodId) => {
  return paymentMethods.find(method => method.id === paymentMethodId) || null;
};

/**
 * Get all payment methods
 * @returns {array} Array of all payment methods
 */
export const getPaymentMethods = () => {
  return [...paymentMethods];
};

/**
 * Validate payment method data
 * @returns {boolean} True if all payment methods are valid
 */
export const validatePaymentMethods = () => {
  const invalidMethods = paymentMethods.filter(method => 
    !method.id || !method.name || !method.icon || !method.description
  );
  
  if (invalidMethods.length > 0) {
    console.error('Invalid payment methods found:', invalidMethods);
    return false;
  }
  
  // Check for duplicate IDs
  const ids = paymentMethods.map(method => method.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.error('Duplicate payment method IDs found');
    return false;
  }
  
  console.log('All payment methods validated successfully');
  return true;
};
