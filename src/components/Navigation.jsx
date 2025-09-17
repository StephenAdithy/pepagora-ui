import React from "react";
import logo from "../assets/images/logo.png";
import menu from "../assets/icons/menu.svg";
import { Search, Mic, Image, Globe, Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[81px] w-full bg-white border-b border-gray-200 px-[32px] py-[23px] flex items-center justify-between">
      <div className="flex items-center space-x-[48px]">
        <img src={logo} alt="Pepagora Logo" className="h-8" />
        <button className="flex items-center font-medium text-[14px] leading-[20px] tracking-[0] text-gray-700 hover:text-red-600 max-992:hidden">
          <img src={menu} alt="Pepagora menu" className="mr-1" /> All Categories
        </button>
      </div>

      <div className="flex-1 w-[47.32%] max-w-full mx-6 max-768:hidden">
        <div className="flex items-center border border-red-300 rounded-full px-3 py-2">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="What are you looking for ?"
            className="flex-1 outline-none text-sm"
          />
          <Mic size={18} className="text-gray-500 mx-2 cursor-pointer" />
          <Image size={18} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center space-x-[12px]">
        <div className="flex items-center text-sm space-x-[4px] cursor-pointer">
          <img
            src="src/assets/icons/globe-alt.svg"
            alt="Globe"
            className="w-[24px] h-[24px]"
          />
          <div className="flex items-center text-sm space-x-[4px] cursor-pointer">
            <span>EN</span>
            <img
              src="src/assets/icons/arrowdown.svg"
              alt="Down Arrow"
              className="w-[8px] h-[4px]"
            />
          </div>
        </div>

        <div className="flex items-center text-sm space-x-[4px] cursor-pointer max-768:hidden">
          <img
            src="src/assets/icons/flag.svg"
            alt="IN"
            className="w-[27px] h-[18px]"
          />
          <div className="flex items-center text-sm space-x-[4px] cursor-pointer">
            <span>IN</span>
            <img
              src="src/assets/icons/currency-rupee.svg"
              alt="Down Arrow"
              className="w-[24px] h-[24px]"
            />
            <img
              src="src/assets/icons/arrowdown.svg"
              alt="Down Arrow"
              className="w-[8px] h-[4px]"
            />
          </div>
        </div>

        <img
          src="src/assets/icons/bell.svg"
          alt="Notifications"
          className="w-[24px] h-[24px] cursor-pointer max-768:hidden"
        />

        <button className="bg-gray-800 text-white px-4 py-2 rounded-full font-medium text-[14px] leading-[14px] tracking-[0.5px] max-992:hidden">
          Post Buying Requirement
        </button>

        <img
          src="src/assets/icons/rpg.svg"
          alt="Notifications"
          className="w-[28px] h-[28px] cursor-pointer max-992:hidden max-768:hidden"
        />

        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src="src/assets/icons/user-circle.svg"
            alt="User"
            className="w-[30px] h-[30px]"
          />
        </div>
      </div>
    </header>
  );
}
