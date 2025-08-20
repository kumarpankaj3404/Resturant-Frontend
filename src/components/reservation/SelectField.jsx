import React from 'react';

const SelectField = ({
  id,
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  placeholder = 'Select an option',
  ariaDescribedby,
  className = '',
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 font-semibold text-gray-600 font-body dark:text-white">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-describedby={ariaDescribedby}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7a5f55] focus:dark:ring-[#86C232]"
      >
        <option value="">{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
