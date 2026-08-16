import React from 'react';

/**
 * Reusable Tailwind Button Component
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  children,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none gap-2 whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white shadow-md hover:shadow-glow-primary hover:brightness-105',
    secondary: 'bg-sky-500 hover:bg-sky-600 text-white shadow-sm hover:shadow-glow-secondary hover:brightness-105',
    outline: 'bg-transparent text-blue-700 border-2 border-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    white: 'bg-white text-slate-900 hover:bg-slate-50 shadow-md hover:shadow-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
