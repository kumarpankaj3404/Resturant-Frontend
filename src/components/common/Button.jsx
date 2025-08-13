
import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  disabled = false
}) => {
  const variants = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black dark:bg-black dark:text-white dark:hover:bg-gray-700',
  secondary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 dark:bg-black dark:text-white dark:hover:bg-gray-700',
  outline: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black',
  white: 'bg-white text-black hover:bg-gray-100 focus:ring-white dark:bg-black dark:text-white dark:hover:bg-[#222629]',
  transparent: 'bg-transparent border-2 border-white text-black hover:bg-white hover:text-black focus:ring-white dark:border-black dark:text-white dark:hover:bg-black dark:hover:text-white',
};

  const sizes = {
    small: 'px-6 py-3 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-12 py-5 text-lg font-semibold'
  };

  const classes = [
    'inline-flex items-center justify-center font-medium rounded-none transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95',
    variants[variant],
    sizes[size],
    className
  ].join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
