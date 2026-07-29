// Product-related utility functions

/**
 * Get product by ID
 * @param {array} products - All products array
 * @param {string} productId - Product ID
 * @returns {object|null} Product object or null if not found
 */
export const getProductById = (products, productId) => {
  return products.find(product => product.id === productId) || null;
};

/**
 * Get products by category
 * @param {array} products - All products array
 * @param {string} categoryName - Category name
 * @returns {array} Array of products in the category
 */
export const getProductsByCategory = (products, categoryName) => {
  return products.filter(product => product.category === categoryName);
};

/**
 * Search products by query
 * @param {array} products - All products array
 * @param {string} query - Search query
 * @returns {array} Array of matching products
 */
export const searchProducts = (products, query) => {
  if (!query || query.trim() === '') {
    return products;
  }
  
  const lowerQuery = query.toLowerCase().trim();
  
  return products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(lowerQuery);
    const categoryMatch = product.category.toLowerCase().includes(lowerQuery);
    return nameMatch || categoryMatch;
  });
};

/**
 * Filter products by multiple criteria
 * @param {array} products - All products array
 * @param {object} filters - Filter criteria
 * @param {string} filters.category - Category name filter
 * @param {number} filters.minPrice - Minimum price filter
 * @param {number} filters.maxPrice - Maximum price filter
 * @returns {array} Array of filtered products
 */
export const filterProducts = (products, filters = {}) => {
  let filtered = [...products];
  
  if (filters.category) {
    filtered = filtered.filter(product => product.category === filters.category);
  }
  
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(product => product.price >= filters.minPrice);
  }
  
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(product => product.price <= filters.maxPrice);
  }
  
  return filtered;
};

/**
 * Sort products
 * @param {array} products - Products array to sort
 * @param {string} sortBy - Sort criteria ('price-asc', 'price-desc', 'name-asc', 'name-desc')
 * @returns {array} Sorted products array
 */
export const sortProducts = (products, sortBy = 'name-asc') => {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return sorted;
  }
};

/**
 * Get unique categories from products
 * @param {array} products - All products array
 * @returns {array} Array of unique category names
 */
export const getUniqueCategories = (products) => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

/**
 * Get products in price range
 * @param {array} products - All products array
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {array} Array of products in price range
 */
export const getProductsInPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

/**
 * Get products by name pattern
 * @param {array} products - All products array
 * @param {string} pattern - Name pattern to match
 * @returns {array} Array of matching products
 */
export const getProductsByNamePattern = (products, pattern) => {
  if (!pattern || pattern.trim() === '') {
    return products;
  }
  
  const regex = new RegExp(pattern, 'i');
  return products.filter(product => regex.test(product.name));
};

/**
 * Validate product object
 * @param {object} product - Product object to validate
 * @returns {boolean} True if product is valid
 */
export const validateProduct = (product) => {
  return (
    product &&
    product.id &&
    product.name &&
    product.packSize &&
    typeof product.price === 'number' &&
    product.price > 0 &&
    product.category &&
    product.emoji
  );
};

/**
 * Get product count by category
 * @param {array} products - All products array
 * @returns {object} Object with category names as keys and counts as values
 */
export const getProductCountByCategory = (products) => {
  const counts = {};
  
  products.forEach(product => {
    const category = product.category;
    counts[category] = (counts[category] || 0) + 1;
  });
  
  return counts;
};

/**
 * Get price range of products
 * @param {array} products - Products array
 * @returns {object} Object with minPrice and maxPrice
 */
export const getPriceRange = (products) => {
  if (products.length === 0) {
    return { minPrice: 0, maxPrice: 0 };
  }
  
  const prices = products.map(product => product.price);
  return {
    minPrice: Math.min(...prices),
    maxPrice: Math.max(...prices)
  };
};
