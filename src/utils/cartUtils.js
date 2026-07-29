// Cart management utilities

/**
 * Add product to cart
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID to add
 * @returns {array} Updated cart array
 */
export const addToCart = (cart, productId) => {
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    // Increment quantity if item already exists
    return cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  
  // Add new item with quantity 1
  return [...cart, { productId, quantity: 1 }];
};

/**
 * Remove product from cart (decrement quantity or remove entirely)
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID to remove
 * @returns {array} Updated cart array
 */
export const removeFromCart = (cart, productId) => {
  const existingItem = cart.find(item => item.productId === productId);
  
  if (!existingItem) {
    return cart;
  }
  
  if (existingItem.quantity > 1) {
    // Decrement quantity if more than 1
    return cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  
  // Remove item entirely if quantity is 1
  return cart.filter(item => item.productId !== productId);
};

/**
 * Increment quantity of a cart item
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID to increment
 * @returns {array} Updated cart array
 */
export const incrementQuantity = (cart, productId) => {
  return cart.map(item =>
    item.productId === productId
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
};

/**
 * Decrement quantity of a cart item
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID to decrement
 * @returns {array} Updated cart array
 */
export const decrementQuantity = (cart, productId) => {
  const existingItem = cart.find(item => item.productId === productId);
  
  if (!existingItem || existingItem.quantity <= 1) {
    // Remove item if quantity would go to 0 or below
    return cart.filter(item => item.productId !== productId);
  }
  
  return cart.map(item =>
    item.productId === productId
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

/**
 * Get total cart count (sum of all quantities)
 * @param {array} cart - Current cart array
 * @returns {number} Total cart count
 */
export const getCartCount = (cart) => {
  return cart.reduce((total, item) => total + item.quantity, 0);
};

/**
 * Get cart item by product ID
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID
 * @returns {object|null} Cart item or null if not found
 */
export const getCartItem = (cart, productId) => {
  return cart.find(item => item.productId === productId) || null;
};

/**
 * Check if product is in cart
 * @param {array} cart - Current cart array
 * @param {string} productId - Product ID
 * @returns {boolean} True if product is in cart
 */
export const isInCart = (cart, productId) => {
  return cart.some(item => item.productId === productId);
};

/**
 * Calculate bill breakdown
 * @param {array} cart - Current cart array
 * @param {array} products - All products array
 * @returns {object} Bill breakdown object
 */
export const calculateBill = (cart, products) => {
  const itemTotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  
  const FREE_DELIVERY_THRESHOLD = 199;
  const DELIVERY_FEE = 40;
  const HANDLING_CHARGE = 2;
  
  const deliveryFee = itemTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const handlingCharge = itemTotal > 0 ? HANDLING_CHARGE : 0;
  const grandTotal = itemTotal + deliveryFee + handlingCharge;
  
  return {
    itemTotal,
    deliveryFee,
    handlingCharge,
    grandTotal,
    freeDeliveryThreshold: FREE_DELIVERY_THRESHOLD,
    qualifiesForFreeDelivery: itemTotal >= FREE_DELIVERY_THRESHOLD
  };
};

/**
 * Clear cart
 * @returns {array} Empty cart array
 */
export const clearCart = () => {
  return [];
};

/**
 * Get cart items with product details
 * @param {array} cart - Current cart array
 * @param {array} products - All products array
 * @returns {array} Cart items with product details
 */
export const getCartItemsWithDetails = (cart, products) => {
  return cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...item,
      product: product || null
    };
  }).filter(item => item.product !== null);
};
