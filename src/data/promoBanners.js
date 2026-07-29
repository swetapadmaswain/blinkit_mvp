// Promo banners data

export const promoBanners = [
  {
    id: "PROMO001",
    title: "Free Delivery",
    subtitle: "On orders above ₹199",
    emoji: "🚚",
    backgroundColor: "#FFF9E6"
  },
  {
    id: "PROMO002",
    title: "Instant Delivery",
    subtitle: "Get it in 10 minutes",
    emoji: "⚡",
    backgroundColor: "#E8F5E9"
  },
  {
    id: "PROMO003",
    title: "Fresh & Quality",
    subtitle: "100% quality guaranteed",
    emoji: "✨",
    backgroundColor: "#E3F2FD"
  }
];

/**
 * Get promo banner by ID
 * @param {string} bannerId - Promo banner ID
 * @returns {object|null} Promo banner object or null if not found
 */
export const getPromoBannerById = (bannerId) => {
  return promoBanners.find(banner => banner.id === bannerId) || null;
};

/**
 * Get all promo banners
 * @returns {array} Array of all promo banners
 */
export const getPromoBanners = () => {
  return [...promoBanners];
};

/**
 * Get random promo banner
 * @returns {object} Random promo banner
 */
export const getRandomPromoBanner = () => {
  const randomIndex = Math.floor(Math.random() * promoBanners.length);
  return promoBanners[randomIndex];
};

/**
 * Validate promo banner data
 * @returns {boolean} True if all promo banners are valid
 */
export const validatePromoBanners = () => {
  const invalidBanners = promoBanners.filter(banner => 
    !banner.id || !banner.title || !banner.subtitle || !banner.emoji || !banner.backgroundColor
  );
  
  if (invalidBanners.length > 0) {
    console.error('Invalid promo banners found:', invalidBanners);
    return false;
  }
  
  // Check for duplicate IDs
  const ids = promoBanners.map(banner => banner.id);
  const uniqueIds = new Set(ids);
  if (ids.length !== uniqueIds.size) {
    console.error('Duplicate promo banner IDs found');
    return false;
  }
  
  console.log('All promo banners validated successfully');
  return true;
};
