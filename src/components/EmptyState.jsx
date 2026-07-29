import React from 'react';

/**
 * EmptyState component for displaying empty states
 * @param {object} props
 * @param {string} props.icon - Emoji icon to display
 * @param {string} props.title - Title text
 * @param {string} props.subtitle - Subtitle text
 * @param {string} props.actionText - Action button text (optional)
 * @param {function} props.onAction - Action button click handler (optional)
 */
const EmptyState = ({
  icon = '📦',
  title = 'Nothing here',
  subtitle = 'No items to display',
  actionText,
  onAction
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-subtitle">{subtitle}</p>
      
      {actionText && onAction && (
        <button className="empty-state-action-button" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
