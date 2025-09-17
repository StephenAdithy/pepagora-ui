import React, { useState } from "react";
import FileDropzone from "./FileDropzone";
import FormField from "./FormField";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Layer from "../assets/icons/sidebar/Layer_1.svg";
import Vector from "../assets/icons/sidebar/Vector.svg";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [sku, setSku] = useState("");

  return (
    <div className="bg-white relative pt-[56px] rounded-lg shadow-sm mt-[30px]">
      <h3 className="flex flex-row gap-[8px] px-[56px] mb-[29px] max-992:px-[26px]">
        <img src={Layer} alt="icon" className="w-[28px] h-[28px]" />
        <span className="text-lg font-semibold"> Product Information </span>
      </h3>
      <div className="space-y-6 px-[56px] max-992:px-[26px]">
        <FormField
          label="Product Name"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Red Trouser with Blue Button"
          required
        />

        <FormField
          label="Short Description"
          name="shortDesc"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          placeholder="Enter text"
          textarea
          showAIButton={true}
          onAIButtonClick={() => console.log("AI Styles clicked!")}
        />

        <FormField
          label="SKU / Model (Optional)"
          name="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="Enter SKU/Model number"
        />

        <div className="mb-4">
          <label className="block font-neue-haas font-medium text-[14px] leading-[150%] tracking-[0.015em] mb-[8px]">
            Category
          </label>

          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm text-gray-700 
                     focus:outline-none focus:ring-1 focus:ring-gray-400 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
            </select>

            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          <p className="mt-1 text-xs text-gray-400">
            Select your product category
          </p>
        </div>

        <FileDropzone
          label="Product Image"
          accept="image/*"
          message="Drag & Drop file from computer"
          infomsg="Upload JPG, PNG (Max 5MB) for best quality."
          buttons={[{ text: "Choose File", type: "file" }]}
        />

        <FileDropzone
          label="Product Video (Optional)"
          accept="video/*"
          message="Drag & Drop file from computer"
          infomsg="Supports mov, mp4 (Max 10MB) for best quality."
          buttons={[
            { text: "Choose from your computer", type: "file" },
            { text: "Paste video URL", type: "url" },
          ]}
        />

        <FileDropzone
          label="Product Brochure (optional)"
          message="Drag & Drop file from computer"
          infomsg="Upload JPG, PNG (Max 5MB) for best quality."
          accept=".pdf,.doc,.docx"
          buttons={[{ text: "Choose File", type: "file" }]}
        />

        <div className="mb-4 pb-[20px]">
          <label className="block font-neue-haas font-medium text-[14px] leading-[150%] tracking-[0.015em] mb-[8px]">
            Country of Origin
          </label>

          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm text-gray-700
                     focus:outline-none focus:ring-1 focus:ring-gray-400 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="germany">Germany</option>
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="border border-solid p-[30px_20px] bg-white sticky z-[99] bottom-0 flex flex-row justify-end gap-4 pr-14">
        <button
          class=" h-10 min-h-10 flex items-center justify-center gap-2 
         rounded-[56px] border border-gray-300 px-4 py-1 
         font-[500] text-[14px] leading-[14px] tracking-[0.5px]"
        >
          <span>Save & Continue Later</span>
        </button>
        <button
          class="w-[124px] h-10 min-h-10 flex items-center justify-center gap-2
         rounded-[56px] px-4 py-1
         font-neuehaas font-medium text-[14px] leading-[14px] tracking-[0.5px]
         bg-[#D92C27] text-white"
        >
          <span>Continue</span>
          <img src={Vector} alt="icon" className="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>
  );
}
