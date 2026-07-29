// User persona data

export const userPersona = {
  id: "USER001",
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  phone: "+91 98765 43210",
  addresses: [
    {
      id: "ADDR001",
      type: "Home",
      line1: "123, Sector 15",
      line2: "Gurugram",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122001",
      isDefault: true
    },
    {
      id: "ADDR002",
      type: "Office",
      line1: "456, Cyber Hub",
      line2: "DLF Cyber City",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122002",
      isDefault: false
    }
  ],
  orderHistory: {
    purchasedCategories: ["Grocery", "Snacks", "Dairy"],
    orderCount: 12,
    lastOrderDate: "2026-07-25",
    averageOrderValue: 350
  },
  preferences: {
    preferredPaymentMethod: "PAY_UPI",
    notificationEnabled: true,
    language: "en"
  }
};

/**
 * Get user persona
 * @returns {object} User persona object
 */
export const getUserPersona = () => {
  return { ...userPersona };
};

/**
 * Get default address
 * @returns {object|null} Default address or null if not found
 */
export const getDefaultAddress = () => {
  return userPersona.addresses.find(addr => addr.isDefault) || null;
};

/**
 * Get address by ID
 * @param {string} addressId - Address ID
 * @returns {object|null} Address object or null if not found
 */
export const getAddressById = (addressId) => {
  return userPersona.addresses.find(addr => addr.id === addressId) || null;
};

/**
 * Get all addresses
 * @returns {array} Array of all addresses
 */
export const getAddresses = () => {
  return [...userPersona.addresses];
};

/**
 * Validate user persona data
 * @returns {boolean} True if user persona is valid
 */
export const validateUserPersona = () => {
  if (!userPersona.id || !userPersona.name || !userPersona.email || !userPersona.phone) {
    console.error('Invalid user persona: missing required fields');
    return false;
  }
  
  if (!Array.isArray(userPersona.addresses) || userPersona.addresses.length === 0) {
    console.error('Invalid user persona: no addresses found');
    return false;
  }
  
  const defaultAddress = userPersona.addresses.find(addr => addr.isDefault);
  if (!defaultAddress) {
    console.error('Invalid user persona: no default address found');
    return false;
  }
  
  console.log('User persona validated successfully');
  return true;
};
