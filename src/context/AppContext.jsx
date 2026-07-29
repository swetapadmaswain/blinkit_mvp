import React, { createContext, useContext, useState, useCallback } from 'react';
import { allProducts } from '../data/products';
import { categories } from '../data/categories';
import { personalisedRecommendations } from '../data/recommendations';
import { getPromoBanners } from '../data/promoBanners';
import { getFrequentlyBought } from '../data/frequentlyBought';
import { getUserPersona } from '../data/userPersona';
import {
  addToCart as addToCartUtil,
  removeFromCart as removeFromCartUtil,
  incrementQuantity as incrementQuantityUtil,
  decrementQuantity as decrementQuantityUtil,
  clearCart as clearCartUtil
} from '../utils/cartUtils';
import {
  getCurrentRecommendation,
  dismissRecommendation as dismissRecommendationUtil,
  isCategoryTrial,
  logCategoryTrial as logCategoryTrialUtil,
  getRecommendationWithProduct,
  shouldShowCrossSell
} from '../utils/recommendationUtils';

// Create Context
const AppContext = createContext(null);

// Screen constants
export const SCREENS = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
  CATEGORY: 'CATEGORY',
  CART: 'CART',
  CHECKOUT: 'CHECKOUT',
  ORDER_CONFIRMATION: 'ORDER_CONFIRMATION'
};

/**
 * AppContext Provider Component
 */
export const AppProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  
  // Navigation state
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Payment state
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  
  // Recommendation state
  const [recommendations, setRecommendations] = useState(personalisedRecommendations);
  const [categoryTrialLogged, setCategoryTrialLogged] = useState(false);
  const [trialCategory, setTrialCategory] = useState(null);
  
  // Order history state
  const [orderHistory, setOrderHistory] = useState(getUserPersona().orderHistory);
  
  // Get current recommendation with product details
  const currentRecommendation = getRecommendationWithProduct(
    getCurrentRecommendation(recommendations),
    allProducts
  );
  
  // Get cross-sell recommendation for cart
  const crossSellRecommendation = shouldShowCrossSell(
    cart,
    getCurrentRecommendation(recommendations)
  ) ? getRecommendationWithProduct(
      getCurrentRecommendation(recommendations),
      allProducts
    ) : null;
  
  // Get random promo banner
  const promoBanners = getPromoBanners();
  const promoBanner = promoBanners[Math.floor(Math.random() * promoBanners.length)];
  
  // Get frequently bought products
  const frequentlyBought = getFrequentlyBought();

  // Cart actions
  const addToCart = useCallback((productId) => {
    setCart(prevCart => addToCartUtil(prevCart, productId));
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => removeFromCartUtil(prevCart, productId));
  }, []);

  const incrementQuantity = useCallback((productId) => {
    setCart(prevCart => incrementQuantityUtil(prevCart, productId));
  }, []);

  const decrementQuantity = useCallback((productId) => {
    setCart(prevCart => decrementQuantityUtil(prevCart, productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart(clearCartUtil());
  }, []);

  // Navigation actions
  const navigateTo = useCallback((screen) => {
    setCurrentScreen(screen);
  }, []);

  const navigateToCategory = useCallback((categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentScreen(SCREENS.CATEGORY);
  }, []);

  const navigateBack = useCallback(() => {
    switch (currentScreen) {
      case SCREENS.SEARCH:
      case SCREENS.CATEGORY:
        setCurrentScreen(SCREENS.HOME);
        break;
      case SCREENS.CART:
        setCurrentScreen(SCREENS.HOME);
        break;
      case SCREENS.CHECKOUT:
        setCurrentScreen(SCREENS.CART);
        break;
      case SCREENS.ORDER_CONFIRMATION:
        setCurrentScreen(SCREENS.HOME);
        break;
      default:
        setCurrentScreen(SCREENS.HOME);
    }
  }, [currentScreen]);

  // Search actions
  const handleSearchClick = useCallback(() => {
    setSearchQuery('');
    setCurrentScreen(SCREENS.SEARCH);
  }, []);

  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Payment actions
  const selectPaymentMethod = useCallback((methodId) => {
    setSelectedPaymentMethod(methodId);
  }, []);

  // Recommendation actions
  const dismissRecommendation = useCallback((recommendationId) => {
    setRecommendations(prevRecs => 
      dismissRecommendationUtil(prevRecs, recommendationId)
    );
  }, []);

  const handleAddRecommendation = useCallback((productId) => {
    // Add to cart
    addToCart(productId);
    
    // Check if this is a category trial
    const currentRec = getCurrentRecommendation(recommendations);
    if (currentRec && currentRec.productId === productId) {
      const isTrial = isCategoryTrial(currentRec, orderHistory, allProducts);
      if (isTrial) {
        const product = allProducts.find(p => p.id === productId);
        if (product) {
          setTrialCategory(product.category);
          setCategoryTrialLogged(true);
          
          // Update order history
          setOrderHistory(prevHistory => 
            logCategoryTrialUtil(currentRec, prevHistory, allProducts)
          );
        }
      }
    }
    
    // Dismiss the recommendation after adding
    if (currentRec) {
      dismissRecommendation(currentRec.id);
    }
  }, [addToCart, recommendations, orderHistory, dismissRecommendation]);

  const handleSkipRecommendation = useCallback(() => {
    const currentRec = getCurrentRecommendation(recommendations);
    if (currentRec) {
      dismissRecommendation(currentRec.id);
    }
  }, [recommendations, dismissRecommendation]);

  // Order actions
  const placeOrder = useCallback(() => {
    // Clear cart after placing order
    clearCart();
    
    // Reset payment method
    setSelectedPaymentMethod(null);
    
    // Navigate to confirmation screen
    setCurrentScreen(SCREENS.ORDER_CONFIRMATION);
  }, [clearCart]);

  const resetOrder = useCallback(() => {
    // Reset order confirmation state
    setCategoryTrialLogged(false);
    setTrialCategory(null);
    
    // Navigate back to home
    setCurrentScreen(SCREENS.HOME);
  }, []);

  // Cart click handler
  const handleCartClick = useCallback(() => {
    setCurrentScreen(SCREENS.CART);
  }, []);

  // Context value
  const value = {
    // Data
    products: allProducts,
    categories,
    currentRecommendation,
    crossSellRecommendation,
    promoBanner,
    frequentlyBought,
    userPersona: getUserPersona(),
    
    // State
    cart,
    currentScreen,
    selectedCategory,
    searchQuery,
    selectedPaymentMethod,
    recommendations,
    categoryTrialLogged,
    trialCategory,
    orderHistory,
    
    // Cart actions
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    
    // Navigation actions
    navigateTo,
    navigateToCategory,
    navigateBack,
    
    // Search actions
    handleSearchClick,
    handleSearchChange,
    
    // Payment actions
    selectPaymentMethod,
    
    // Recommendation actions
    dismissRecommendation,
    handleAddRecommendation,
    handleSkipRecommendation,
    
    // Order actions
    placeOrder,
    resetOrder,
    
    // Cart click
    handleCartClick
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook to use AppContext
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export default AppContext;
