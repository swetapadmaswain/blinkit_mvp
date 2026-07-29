// Frequently bought products data

export const frequentlyBought = [
  {
    id: "G001",
    name: "Aashirvaad Atta",
    packSize: "5 kg",
    price: 210,
    category: "Grocery",
    emoji: "🌾"
  },
  {
    id: "S001",
    name: "Lays Classic",
    packSize: "50 g",
    price: 20,
    category: "Snacks",
    emoji: "🥔"
  },
  {
    id: "D001",
    name: "Amul Taaza Milk",
    packSize: "500 ml",
    price: 32,
    category: "Dairy",
    emoji: "🥛"
  },
  {
    id: "G002",
    name: "Tata Salt",
    packSize: "1 kg",
    price: 28,
    category: "Grocery",
    emoji: "🧂"
  },
  {
    id: "S003",
    name: "Kurkure Masala Munch",
    packSize: "75 g",
    price: 20,
    category: "Snacks",
    emoji: "🌶️"
  }
];

/**
 * Get frequently bought products
 * @returns {array} Array of frequently bought products
 */
export const getFrequentlyBought = () => {
  return [...frequentlyBought];
};

/**
 * Get frequently bought product by ID
 * @param {string} productId - Product ID
 * @returns {object|null} Product object or null if not found
 */
export const getFrequentlyBoughtById = (productId) => {
  return frequentlyBought.find(product => product.id === productId) || null;
};

/**
 * Validate frequently bought products
 * @returns {boolean} True if all products are valid
 */
export const validateFrequentlyBought = () => {
  const invalidProducts = frequentlyBought.filter(product => 
    !product.id || !product.name || !product.packSize || product.price <= 0 || !product.category || !product.emoji
  );
  
  if (invalidProducts.length > 0) {
    console.error('Invalid frequently bought products found:', invalidProducts);
    return false;
  }
  
  // Check for duplicate IDs
  const ids = frequentlyBought.map(product => product.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.error('Duplicate product IDs found in frequently bought');
    return false;
  }
  
  console.log('All frequently bought products validated successfully');
  return true;
};
