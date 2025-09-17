import React from "react";
import Star from "../assets/icons/star.svg";

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  textarea = false,
  showAIButton = false,
  onAIButtonClick,
}) {
  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block font-neue-haas font-medium text-[14px] leading-[150%] tracking-[0.015em] mb-[8px]"
      >
        {label}
      </label>

      {textarea ? (
        <div className="relative">
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full border rounded px-3 py-2 h-[148px] pr-[120px] ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />

          {showAIButton && (
            <button
              type="button"
              onClick={onAIButtonClick}
              className="absolute bottom-4 right-2 flex items-center justify-center
              w-[120px] h-[31px] rounded-full border border-gray-400
              font-inter font-medium text-[11px] leading-[100%] px-[10px]
              hover:bg-gray-100 transition text-[#A5A5A5]" 
            >
              <img src={Star} alt="Star" className="w-[15px] h-[15px] mr-[4px]" />
              Write with AI
            </button>
          )}
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full border rounded px-3 py-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
