// Personalised recommendation pool - 8 candidates

export const personalisedRecommendations = [
  {
    id: "REC001",
    productId: "PET001",
    trustBadge: "Bestseller",
    reasoning: "You order snacks frequently — try this vet-recommended dog food for your pet",
    dismissed: false
  },
  {
    id: "REC002",
    productId: "PC003",
    trustBadge: "Highly Rated",
    reasoning: "Based on your grocery orders, customers who buy atta also love this face wash",
    dismissed: false
  },
  {
    id: "REC003",
    productId: "H003",
    trustBadge: "Trending Nearby",
    reasoning: "You buy dairy regularly — this floor cleaner is popular with households like yours",
    dismissed: false
  },
  {
    id: "REC004",
    productId: "BC001",
    trustBadge: "Bestseller",
    reasoning: "Your snack orders suggest a busy household — try these top-rated diapers",
    dismissed: false
  },
  {
    id: "REC005",
    productId: "PET002",
    trustBadge: "Highly Rated",
    reasoning: "Since you order frequently, your cat might enjoy this premium food",
    dismissed: false
  },
  {
    id: "REC006",
    productId: "PC004",
    trustBadge: "Trending Nearby",
    reasoning: "Customers who buy milk also stock up on this hand wash for family hygiene",
    dismissed: false
  },
  {
    id: "REC007",
    productId: "H004",
    trustBadge: "Bestseller",
    reasoning: "Your grocery pattern suggests you do weekly shopping — this detergent is perfect",
    dismissed: false
  },
  {
    id: "REC008",
    productId: "BC003",
    trustBadge: "Highly Rated",
    reasoning: "Families who order snacks often try this gentle baby wash for their little ones",
    dismissed: false
  }
];

// Valid trust badge types
export const trustBadgeTypes = ["Bestseller", "Highly Rated", "Trending Nearby"];

// Recommendation utility functions

/**
 * Get the current (first non-dismissed) recommendation
 * @param {array} recommendations - Array of recommendation objects
 * @returns {object|null} Current recommendation or null if all dismissed
 */
export const getCurrentRecommendation = (recommendations) => {
  return recommendations.find(rec => !rec.dismissed) || null;
};

/**
 * Dismiss a recommendation by ID
 * @param {array} recommendations - Array of recommendation objects
 * @param {string} recommendationId - ID of recommendation to dismiss
 * @returns {array} Updated recommendations array
 */
export const dismissRecommendation = (recommendations, recommendationId) => {
  return recommendations.map(rec => 
    rec.id === recommendationId ? { ...rec, dismissed: true } : rec
  );
};

/**
 * Reset all recommendations (set dismissed to false)
 * @param {array} recommendations - Array of recommendation objects
 * @returns {array} Reset recommendations array
 */
export const resetRecommendations = (recommendations) => {
  return recommendations.map(rec => ({ ...rec, dismissed: false }));
};

/**
 * Get recommendation by ID
 * @param {array} recommendations - Array of recommendation objects
 * @param {string} recommendationId - ID of recommendation to get
 * @returns {object|null} Recommendation object or null if not found
 */
export const getRecommendationById = (recommendations, recommendationId) => {
  return recommendations.find(rec => rec.id === recommendationId) || null;
};

/**
 * Get all non-dismissed recommendations
 * @param {array} recommendations - Array of recommendation objects
 * @returns {array} Array of active (non-dismissed) recommendations
 */
export const getActiveRecommendations = (recommendations) => {
  return recommendations.filter(rec => !rec.dismissed);
};

/**
 * Validate recommendation data
 * @param {object} recommendation - Recommendation object to validate
 * @returns {boolean} True if recommendation is valid
 */
export const validateRecommendation = (recommendation) => {
  return (
    recommendation.id &&
    recommendation.productId &&
    trustBadgeTypes.includes(recommendation.trustBadge) &&
    recommendation.reasoning &&
    typeof recommendation.dismissed === "boolean"
  );
};

/**
 * Validate all recommendations
 * @returns {boolean} True if all recommendations are valid
 */
export const validateAllRecommendations = () => {
  const invalidRecommendations = personalisedRecommendations.filter(
    rec => !validateRecommendation(rec)
  );
  
  if (invalidRecommendations.length > 0) {
    console.error('Invalid recommendations found:', invalidRecommendations);
    return false;
  }
  
  // Check for duplicate IDs
  const ids = personalisedRecommendations.map(rec => rec.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.error('Duplicate recommendation IDs found');
    return false;
  }
  
  console.log('All recommendations validated successfully');
  return true;
};
