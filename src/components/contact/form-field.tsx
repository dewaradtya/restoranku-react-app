import React from 'react';

interface FormFieldProps {
  type?: string;
  id: string;
  label: string;
  icon: React.ComponentType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  focused: string;
  rows?: number; // <-- Make rows optional
}

const FormField: React.FC<FormFieldProps> = ({ 
  type = "text", 
  id, 
  label, 
  icon: Icon, 
  value, 
  onChange, 
  onFocus, 
  onBlur, 
  focused,
  rows
}) => {
  const isTextarea = type === "textarea";

  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center space-x-2 text-sm font-medium mb-2 ${
          focused === id ? "text-green-600" : "text-gray-700"
        }`}
      >
        <Icon/>
        <span>{label}</span>
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          rows={rows || 3}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
          required
        />
      )}
    </div>
  );
};

export default FormField;
