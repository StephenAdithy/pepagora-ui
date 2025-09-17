import React from "react";

export default function PreviewPanel() {
  return (
    <div className="bg-white rounded-lg shadow-sm sticky top-6 h-[100vh] mt-[30px]">
      <div className="grid space-y-1 px-8 py-6 text-sm text-gray-500 border-b border-[#D9D9D9] border-solid">
        <span className="font-medium text-[15px] leading-[20px] tracking-[0px] font-inter">
          Product information
        </span>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-[8px]">
          <div
            className="bg-[#89C949] h-3 rounded-full"
            style={{ width: "30%", height: "8px" }} // 10% completed
          ></div>
        </div>

        <span className="font-normal text-[12px] leading-[12px] tracking-[0px] font-inter">
          completed 10%
        </span>
      </div>

      <div className="px-[60px] py-[22px]">
        <div className="flex justify-between pb-6 items-center">
          {/* Left Side: Button + Preview */}
          <div className="flex items-center space-x-2">
            <button
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAFAFA] text-[13px]"
              style={{ transform: "rotate(-180deg)" }}
            >
              x
            </button>

            <span className="text-[20px] leading-[28px] tracking-[1%] font-neue-haas font-medium">
              Preview
            </span>
          </div>

          {/* Right Side: Image */}
          <img
            src="src/assets/icons/ci_expand.svg"
            alt="Expand"
            className="w-[32px] h-[32px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          {/* Large Image */}
          <div
            className="rounded-lg border-gray-300"
            style={{ width: "100%", height: "278.23px" }}
          >
            <img
              src="src/assets/images/imagepd.png"
              alt="Large"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Small Images */}
          <div className="flex flex-row gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border-gray-300"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  src={`src/assets/images/small-img.png`}
                  alt={`Small ${i + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
