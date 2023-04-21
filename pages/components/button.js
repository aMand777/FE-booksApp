import React from 'react';

const Button = ({ title, className, ...rest }) => {
  return (
    <div>
      <button className={`w-12 h-6 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs italic ${className}`} {...rest}>
        {title}
      </button>
    </div>
  );
};

export default Button;
