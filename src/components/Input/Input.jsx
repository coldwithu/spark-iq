import React from "react";

export const Input = ({ placeholder, className, value, onChange }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      className={className}
    />
  );
};
