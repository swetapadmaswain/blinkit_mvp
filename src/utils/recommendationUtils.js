// Recommendation logic utilities

import { getCurrentRecommendation as getCurrentRec, dismissRecommendation as dismissRec } from '../data/recommendations';
import { getProductById } from './productUtils';

/**
 * Get the current (first non-dismissed) recommendation
 * @param {array} recommendations - Array of recommendation objects
 * @returns {object|null} Current recommendation or null if all dismissed
 */
export const getCurrentRecommendation = (recommendations) => {
  return getCurrentRec(recommendations);
};

/**
 * Dismiss a recommendation by ID
 * @param {array} recommendations - Array of recommendation objects
 * @param {string} recommendationId - ID of recommendation to dismiss
 * @returns {array} Updated recommendations array
 */
export const dismissRecommendation = (recommendations, recommendationId) => {
  return dismissRec(recommendations, recommendationId);
};

/**
 * Check if recommendation is a category trial
 * @param {object} recommendation - Recommendation object
 * @param {object} orderHistory - User's order history
 * @returns {boolean} True if this is a category trial
 */
export const isCategoryTrial = (recommendation, orderHistory, products) => {
  if (!recommendation || !orderHistory || !products) {
    return false;
  }
  
  const product = getProductById(products, recommendation.productId);
  if (!product) {
    return false;
  }
  
  // Check if the product's category is not in purchased categories
  const purchasedCategories = orderHistory.purchasedCategories || [];
  return !purchasedCategories.includes(product.category);
};

/**
 * Determine if cross-sell should be shown in cart
 * @param {array} cart - Current cart array
 * @param {object} recommendation - Recommendation object
 * @returns {boolean} True if cross-sell should be shown
 */
export const shouldShowCrossSell = (cart, recommendation) => {
  if (!recommendation) {
    return false;
  }
  
  // Check if the recommended product is already in cart
  const isInCart = cart.some(item => item.productId === recommendation.productId);
  
  // Show cross-sell if product is not in cart and recommendation is not dismissed
  return !isInCart && !recommendation.dismissed;
};

/**
 * Get recommendation with product details
 * @param {object} recommendation - Recommendation object
 * @param {array} products - All products array
 * @returns {object|null} Recommendation with product details or null
 */
export const getRecommendationWithProduct = (recommendation, products) => {
  if (!recommendation) {
    return null;
  }
  
  const product = getProductById(products, recommendation.productId);
  if (!product) {
    return null;
  }
  
  return {
    ...recommendation,
    product
  };
};

/**
 * Get all recommendations with product details
 * @param {array} recommendations - Array of recommendation objects
 * @param {array} products - All products array
 * @returns {array} Array of recommendations with product details
 */
export const getAllRecommendationsWithProducts = (recommendations, products) => {
  return recommendations
    .map(rec => getRecommendationWithProduct(rec, products))
    .filter(rec => rec !== null);
};

/**
 * Get active (non-dismissed) recommendations with product details
 * @param {array} recommendations - Array of recommendation objects
 * @param {array} products - All products array
 * @returns {array} Array of active recommendations with product details
 */
export const getActiveRecommendationsWithProducts = (recommendations, products) => {
  return recommendations
    .filter(rec => !rec.dismissed)
    .map(rec => getRecommendationWithProduct(rec, products))
    .filter(rec => rec !== null);
};

/**
 * Log category trial when recommendation is added
 * @param {object} recommendation - Recommendation object
 * @param {object} orderHistory - User's order history
 * @param {array} products - All products array
 * @returns {object} Updated order history with new category
 */
export const logCategoryTrial = (recommendation, orderHistory, products) => {
  const product = getProductById(products, recommendation.productId);
  if (!product || !orderHistory) {
    return orderHistory;
  }
  
  const purchasedCategories = orderHistory.purchasedCategories || [];
  
  // Add category if not already present
  if (!purchasedCategories.includes(product.category)) {
    return {
      ...orderHistory,
      purchasedCategories: [...purchasedCategories, product.category]
    };
  }
  
  return orderHistory;
};

/**
 * Get trust badge color based on badge type
 * @param {string} trustBadge - Trust badge type
 * @returns {string} Color code for the badge
 */
export const getTrustBadgeColor = (trustBadge) => {
  const colors = {
    'Bestseller': '#FF6B6B',
    'Highly Rated': '#4ECDC4',
    'Trending Nearby': '#45B7D1'
  };
  
  return colors[trustBadge] || '#999999';
};

/**
 * Get trust badge background color based on badge type
 * @param {string} trustBadge - Trust badge type
 * @returns {string} Background color code for the badge
 */
export const getTrustBadgeBackgroundColor = (trustBadge) => {
  const backgroundColors = {
    'Bestseller': '#FFF0F0',
    'Highly Rated': '#F0FFFE',
    'Trending Nearby': '#F0F8FF'
  };
  
  return backgroundColors[trustBadge] || '#F5F5F5';
};

/**
 * Validate recommendation object
 * @param {object} recommendation - Recommendation object to validate
 * @returns {boolean} True if recommendation is valid
 */
export const validateRecommendation = (recommendation) => {
  return (
    recommendation &&
    recommendation.id &&
    recommendation.productId &&
    recommendation.trustBadge &&
    recommendation.reasoning &&
    typeof recommendation.dismissed === 'boolean'
  );
};

/**
 * Check if all recommendations are dismissed
 * @param {array} recommendations - Array of recommendation objects
 * @returns {boolean} True if all recommendations are dismissed
 */
export const areAllRecommendationsDismissed = (recommendations) => {
  return recommendations.every(rec => rec.dismissed);
};

/**
 * Count active (non-dismissed) recommendations
 * @param {array} recommendations - Array of recommendation objects
 * @returns {number} Count of active recommendations
 */
export const countActiveRecommendations = (recommendations) => {
  return recommendations.filter(rec => !rec.dismissed).length;
};
