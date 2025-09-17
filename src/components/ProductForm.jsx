import React, { useState } from "react";
import FileDropzone from "./FileDropzone";
import FormField from "./FormField";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function ProductForm() {
  const [productName, setProductName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [sku, setSku] = useState("");

  return (
    <div className="bg-white px-[56px] pt-[56px] rounded-lg shadow-sm mt-[30px]">
      <h3 className="text-lg font-semibold mb-[29px]">Product Information</h3>
      <div className="space-y-6">
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
        />

        <FormField
          label="SKU / Model (Optional)"
          name="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="Enter SKU/Model number"
        />

        <div className="mb-4">
          {/* Label */}
          <label className="block font-neue-haas font-medium text-[14px] leading-[150%] tracking-[0.015em] mb-[8px]">
            Category
          </label>

          {/* Input wrapper */}
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

            {/* Search Icon */}
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          {/* Hint text */}
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

        <div className="mb-4">
          {/* Label */}
          <label className="block font-neue-haas font-medium text-[14px] leading-[150%] tracking-[0.015em] mb-[8px]">
            Country of Origin
          </label>

          {/* Select wrapper */}
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

            {/* Custom Arrow (replaces default) */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <button className="px-4 py-2 rounded border">
            Save & Continue Later
          </button>
          <button className="px-4 py-2 rounded bg-red-600 text-white">
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
