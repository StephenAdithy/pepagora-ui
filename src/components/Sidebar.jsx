import React from "react";
import HomeIcon from "../assets/icons/sidebar/home.svg";
import InboxIcon from "../assets/icons/sidebar/inbox.svg";
import SalesIcon from "../assets/icons/sidebar/sales.svg";
import CatalogIcon from "../assets/icons/sidebar/Catalog.svg";
import MarketingIcon from "../assets/icons/sidebar/Marketing.svg";
import SourcingIcon from "../assets/icons/sidebar/Sourcing.svg";
import AnalyticsIcon from "../assets/icons/sidebar/Analytics.svg";
import BussinessIcon from "../assets/icons/sidebar/Bussiness-profile.svg";
import videoplayIcon from "../assets/icons/sidebar/video-play.svg";
import SupportIcon from "../assets/icons/sidebar/support.svg";
import SettingIcon from "../assets/icons/sidebar/Setting.svg";

const steps = [
  {
    title: "Product Information",
    desc: "Increase visibility and reach the right buyers with accurate product details",
  },
  { title: "Pricing & MOQ", desc: "Provides pricing details and quantity" },
  {
    title: "Product Specifications",
    desc: "Provide product specification and description",
  },
  { title: "Trade Details", desc: "Add production and stock details" },
  {
    title: "Shipping and Logistics",
    desc: "Add shipping modes, lead time, and packaging details",
  },
  {
    title: "Additional Information",
    desc: "Add FAQs and additional product info",
  },
];

export default function AddProductLayout() {
  const activeStep = 0;

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="flex flex-col bg-white w-[80px] pt-6 overflow-y-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={HomeIcon} alt="home" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={InboxIcon} alt="product" className="w-6 h-6" />
          </button>

          <div className="w-[80px] border-t mb-3"></div>

          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={SalesIcon} alt="pricing" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={CatalogIcon} alt="shipping" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={MarketingIcon} alt="trade" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={SourcingIcon} alt="spec" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={AnalyticsIcon} alt="additional" className="w-6 h-6" />
          </button>

          <div className="w-[80px] border-t mb-3"></div>

          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={BussinessIcon} alt="pricing" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={videoplayIcon} alt="shipping" className="w-6 h-6" />
          </button>

          <div className="w-[80px] border-t mb-3"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center mt-auto mb-4">
          <button className="py-1 px-2 mb-4 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={SupportIcon} alt="user" className="w-6 h-6" />
          </button>
          <button className="py-1 px-2 rounded-lg text-gray-600 hover:bg-red-50">
            <img src={SettingIcon} alt="settings" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-[56px] overflow-y-auto max-1440:p-[26px]">
        <h4 className="flex items-center font-medium text-gray-800 mb-4">
          <img
            src="src/assets/icons/sidebar/Arrow-left.svg"
            alt="arrow"
            className="w-9 h-6 mr-2"
          />
          Add Product
        </h4>

        <ul>
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`p-6 mb-4 rounded-2xl border flex justify-between items-start ${
                i === activeStep
                  ? "pl-7 border-black hover:bg-gray-50"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex flex-row gap-2">
                {i === activeStep && (
                  <img
                    src="src/assets/icons/sidebar/exclamation-circle.svg"
                    alt="icon"
                    className="w-3 h-3 mt-2"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-medium text-lg text-gray-800">
                    {step.title}
                  </span>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
              {/* Add arrow icon if needed */}
              {(i === 2 || i === 3) && (
                <img
                  src="src/assets/icons/arrowdown.svg"
                  alt="arrow"
                  className="w-3 h-3 mt-1"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}