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
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      type={onClick ? 'button' : undefined}
      className={`rounded-2xl p-6 border transition-all duration-300 ${onClick ? 'text-left w-full cursor-pointer' : ''} ${
        glass
          ? 'glass-panel'
          : 'bg-white border-slate-200/80 shadow-card'
      } ${
        hoverable ? 'hover:border-academic-cta hover:ring-2 hover:ring-academic-cta/20 hover:shadow-card-hover' : ''
      } ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
