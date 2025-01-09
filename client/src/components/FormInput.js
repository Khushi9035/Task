import React from 'react';

const FormInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="form-control"
      />
    </div>
  );
};

export default FormInput;