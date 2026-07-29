import React from 'react';
import { getTrustBadgeColor, getTrustBadgeBackgroundColor } from '../utils/recommendationUtils';

/**
 * PersonalisedRecommendationCard component for displaying personalised recommendations
 * @param {object} props
 * @param {object} props.recommendation - Recommendation object with product details
 * @param {string} props.mode - Display mode ('home' or 'cross-sell')
 * @param {function} props.onAdd - Add to cart handler
 * @param {function} props.onSkip - Skip recommendation handler
 */
const PersonalisedRecommendationCard = ({
  recommendation,
  mode = 'home',
  onAdd,
  onSkip
}) => {
  if (!recommendation || !recommendation.product) {
    return null;
  }

  const { product, trustBadge, reasoning } = recommendation;
  const badgeColor = getTrustBadgeColor(trustBadge);
  const badgeBgColor = getTrustBadgeBackgroundColor(trustBadge);
  const buttonText = mode === 'cross-sell' ? 'Add to Cart' : 'ADD';

  return (
    <div className="personalised-card">
      <div className="personalised-header">
        <div 
          className="trust-badge" 
          style={{ 
            color: badgeColor, 
            backgroundColor: badgeBgColor 
          }}
        >
          {trustBadge}
        </div>
        <div className="personalised-title">Personalised for you</div>
      </div>
      
      <div className="personalised-content">
        <div className="personalised-product">
          <div className="personalised-emoji">{product.emoji}</div>
          <div className="personalised-product-info">
            <div className="personalised-product-name">{product.name}</div>
            <div className="personalised-product-pack">{product.packSize}</div>
            <div className="personalised-product-price">₹{product.price}</div>
          </div>
        </div>
        
        <div className="personalised-reasoning">
          <em>{reasoning}</em>
        </div>
      </div>
      
      <div className="personalised-actions">
        <button 
          className="personalised-add-button" 
          onClick={() => onAdd(product.id)}
        >
          {buttonText}
        </button>
        <button 
          className="personalised-skip-button" 
          onClick={() => onSkip && onSkip()}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default PersonalisedRecommendationCard;
