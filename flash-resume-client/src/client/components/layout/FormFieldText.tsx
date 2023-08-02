import React, { useState } from "react";

interface Props {
  placeholder: string;
  required: boolean;
  label: string;
  onChange: (name: string, value: string) => void;
  id: string;
}

const FormFieldText: React.FC<Props> = ({
  placeholder,
  required,
  label,
  onChange,
  id,
}) => {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(value);
    onChange(name, value);
  };
  return (
    <div className='mb-2'>
      <label htmlFor={id} className='form-input-container'>
        {label}
        <input
          id={id}
          onChange={handleInput}
          className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
          type='text'
          placeholder={placeholder}
          aria-required={required}
          required={required}
          value={input}
        />
      </label>
    </div>
  );
};

export default FormFieldText;
