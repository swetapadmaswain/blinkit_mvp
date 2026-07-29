// Category definitions - 10 categories

export const categories = [
  {
    id: "CAT_GROCERY",
    name: "Grocery",
    emoji: "🌾",
    productCount: 12
  },
  {
    id: "CAT_SNACKS",
    name: "Snacks",
    emoji: "🥔",
    productCount: 10
  },
  {
    id: "CAT_DAIRY",
    name: "Dairy",
    emoji: "🥛",
    productCount: 8
  },
  {
    id: "CAT_PERSONAL_CARE",
    name: "Personal Care",
    emoji: "🧼",
    productCount: 12
  },
  {
    id: "CAT_PET_CARE",
    name: "Pet Care",
    emoji: "🐕",
    productCount: 8
  },
  {
    id: "CAT_HOME",
    name: "Home",
    emoji: "🏠",
    productCount: 10
  },
  {
    id: "CAT_BEVERAGES",
    name: "Beverages",
    emoji: "🥤",
    productCount: 10
  },
  {
    id: "CAT_BABY_CARE",
    name: "Baby Care",
    emoji: "👶",
    productCount: 10
  },
  {
    id: "CAT_FRUITS_VEG",
    name: "Fruits & Vegetables",
    emoji: "🍎",
    productCount: 10
  },
  {
    id: "CAT_BREAKFAST",
    name: "Breakfast & Cereals",
    emoji: "🥣",
    productCount: 10
  }
];

// Category utility functions

/**
 * Get category by ID
 * @param {string} categoryId - Category ID
 * @returns {object|null} Category object or null if not found
 */
export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id === categoryId) || null;
};

/**
 * Get all categories
 * @returns {array} Array of all categories
 */
export const getCategories = () => {
  return [...categories];
};

/**
 * Get category by name
 * @param {string} categoryName - Category name
 * @returns {object|null} Category object or null if not found
 */
export const getCategoryByName = (categoryName) => {
  return categories.find(cat => cat.name === categoryName) || null;
};

/**
 * Get products by category
 * @param {array} products - Array of all products
 * @param {string} categoryName - Category name
 * @returns {array} Array of products in the category
 */
export const getProductsByCategory = (products, categoryName) => {
  return products.filter(product => product.category === categoryName);
};

/**
 * Validate category data
 * @returns {boolean} True if all categories are valid
 */
export const validateCategories = () => {
  const invalidCategories = categories.filter(cat => 
    !cat.id || !cat.name || !cat.emoji || cat.productCount < 0
  );
  
  if (invalidCategories.length > 0) {
    console.error('Invalid categories found:', invalidCategories);
    return false;
  }
  
  // Check for duplicate IDs
  const ids = categories.map(cat => cat.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.error('Duplicate category IDs found');
    return false;
  }
  
  // Check for duplicate names
  const names = categories.map(cat => cat.name);
  const uniqueNames = new Set(names);
  if (names.length !== uniqueNames.size) {
    console.error('Duplicate category names found');
    return false;
  }
  
  console.log('All categories validated successfully');
  return true;
};
