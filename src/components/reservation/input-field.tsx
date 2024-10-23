import React from "react";

const InputField = ({ icon: Icon, label, ...props }) => (
  <div className="relative mb-6">
    <label className="block text-green-100 text-sm font-medium mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-green-600" />
      </div>
      <input
        className="block w-full pl-10 pr-4 py-3 border border-green-600 rounded-lg 
                   bg-green-900/50 text-white placeholder-green-300
                   focus:ring-2 focus:ring-green-400 focus:border-green-400
                   transition duration-200"
        {...props}
      />
    </div>
  </div>
);

export default InputField;
