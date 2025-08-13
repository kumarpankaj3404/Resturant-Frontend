import React from 'react';

const InputField = ({
  id,
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  min,
  ariaDescribedby,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 font-semibold text-gray-600 font-body dark:text-white">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        aria-required={required}
        aria-describedby={ariaDescribedby}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:dark:ring-[#86C232]"
      />
    </div>
  );
};

export default InputField;
