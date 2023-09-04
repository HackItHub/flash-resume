import React, { useState } from "react";

interface Props {
  placeholder: string;
  isRequired?: boolean;
  label: string;
  onChange: (name: string, value: string) => void;
  id: string;
  type?: string;
  dataId: string;
}

const FormFieldText: React.FC<Props> = ({
  placeholder,
  isRequired,
  label,
  onChange,
  id,
  type,
  dataId,
}) => {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
    onChange(dataId, value);
  };

  const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInput(value);
    onChange(dataId, value);
  };
  return (
    <div className='mb-2'>
      {type === "textarea" ? (
        <label htmlFor={id} className='form-input-container'>
          <div className='flex justify-start items-center'>{label}</div>
          <textarea
            id={id}
            onChange={handleTextAreaInput}
            className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={input}
          />
        </label>
      ) : (
        <label htmlFor={id} className='form-input-container'>
          <div className='flex justify-start items-center'>{label}</div>
          <input
            id={id}
            onChange={handleInput}
            className='rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-input'
            placeholder={placeholder}
            aria-required={isRequired}
            required={isRequired}
            value={input}
            type={type}
          />
        </label>
      )}
    </div>
  );
};

FormFieldText.defaultProps = {
  type: "text",
  isRequired: false,
};

export default FormFieldText;
