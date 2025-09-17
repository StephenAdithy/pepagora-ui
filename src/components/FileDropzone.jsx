import React, { useState } from "react";
import Icon from "../assets/icons/sidebar/document-copy.svg"

export default function FileDropzone({
  label,
  accept,
  buttons,
  message,
  infomsg = [],
}) {
  const [showUrlInput, setShowUrlInput] = useState(false);

  return (
    <aside className="mb-6">
      <div className="text-sm font-medium mb-2">{label}</div>

      <div className="border-dashed border-2 border-gray-200 rounded p-4 pt-[34px] pb-[38px] flex flex-col items-center text-center  ">
        <img
          src={Icon}
          alt="icon"
          className="w-[30px] h-[30px] mt-2 mb-[8px]"
        />
        <div className="font-inter font-medium text-[14px] leading-[20px] tracking-[0.01em] text-center text-[#6B6C6E] pb-[10px]">
          {message}
        </div>
        <span className="flex font-inter font-medium text-[12px] leading-[18px] tracking-[0.01em] text-center text-[#6B6C6E] pb-[10px]">
          or
        </span>

        <div className="flex flex-row gap-2 max-1440:flex-wrap max-1440:justify-center">
          {buttons.map((btn, i) => {
            if (btn.type === "file") {
              return (
                <label
                  key={i}
                  className="border border-[#6B6C6E] w-full h-[32px] min-h-[32px] opacity-100 gap-[6px] rounded-[56px] px-[18px] py-[8px] font-neue-haas font-medium text-[14px] leading-[14px] tracking-[0.5px] text-[#6B6C6E]"
                >
                  {btn.text}
                  <input type="file" accept={accept} hidden />
                </label>
              );
            }

            if (btn.type === "url") {
              return (
                <div key={i} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setShowUrlInput((prev) => !prev)}
                    className="border border-[#6B6C6E] w-[182px] h-[32px] min-h-[32px] opacity-100 gap-[6px] rounded-[56px] px-[18px] py-[8px] font-neue-haas font-medium text-[14px] leading-[14px] tracking-[0.5px] text-[#6B6C6E]"
                  >
                    {btn.text}
                  </button>

                  {showUrlInput && (
                    <input
                      type="text"
                      placeholder="Paste video URL"
                      className="mt-2 w-full border border-gray-300 rounded px-3 py-2 text-xs"
                    />
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>

        <span className="flex font-inter font-medium text-[12px] leading-[18px] tracking-[0.01em] text-center text-[#6B6C6E] pb-[10px] pt-[8px]">
          {infomsg}
        </span>
      </div>
    </aside>
  );
}
