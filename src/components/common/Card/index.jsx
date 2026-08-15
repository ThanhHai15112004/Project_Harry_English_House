import React from 'react';

/**
 * Reusable Tailwind Card Component
 */
export const Card = ({
  hoverable = true,
  glass = false,
  className = '',
  children,
  onClick,
  ...rest
}) => {
  return (
    <div
      className={`rounded-2xl p-6 border transition-all duration-300 ${
        glass
          ? 'glass-panel'
          : 'bg-white border-slate-200/80 shadow-card'
      } ${
        hoverable ? 'hover:-translate-y-1 hover:shadow-card-hover hover:border-blue-300' : ''
      } ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
