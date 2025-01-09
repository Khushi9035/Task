import React from 'react';

const Button = ({ text, onClick, type = 'button', style = {} }) => {
  return (
    <button type={type} onClick={onClick} className="btn" style={style}>
      {text}
    </button>
  );
};

export default Button;