import React from "react";
import Imagepd from "../assets/images/imagepd.png";
import SmallImg from "../assets/images/small-img.png";
import CancelIcon from "../assets/icons/sidebar/cancel.svg";
import Expand from "../assets/icons/ci_expand.svg";

export default function PreviewPanel() {
  return (
    <div className="bg-white rounded-lg shadow-sm sticky top-6 h-[100vh] mt-[30px]">
      <div className="grid space-y-1 px-8 py-6 text-sm text-gray-500 border-b border-[#D9D9D9] border-solid">
        <span className="font-medium text-[15px] leading-[20px] tracking-[0px] font-inter">
          Product information
        </span>

        <div className="w-full bg-gray-200 rounded-full h-[8px]">
          <div
            className="bg-[#89C949] h-3 rounded-full"
            style={{ width: "30%", height: "8px" }}
          ></div>
        </div>

        <span className="font-normal text-[12px] leading-[12px] tracking-[0px] font-inter">
          completed 10%
        </span>
      </div>

      <div className="px-[60px] py-[22px] max-1440:px-[18px]">
        <div className="flex justify-between pb-6 items-center">
          <div className="flex items-center space-x-2">
            <button
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#FAFAFA] text-[13px]"
              style={{ transform: "rotate(-180deg)" }}
            >
              <img
                src={CancelIcon}
                alt="icon"
                className="w-[10px] h-[10px]"
              />
            </button>

            <span className="text-[20px] leading-[28px] tracking-[1%] font-neue-haas font-medium">
              Preview
            </span>
          </div>

          <img
            src={Expand}
            alt="Expand"
            className="w-[32px] h-[32px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <div
            className="rounded-lg border-gray-300"
            style={{ width: "100%", height: "278.23px" }}
          >
            <img
              src={Imagepd}
              alt="Large"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-row gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border-gray-300"
                style={{ width: "100%", height: "auto" }}
              >
                <img
                  src={SmallImg}
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
