import React from "react";
import { navLinks } from "../utils/navLinks";
import jumpLogo from "../Assets/Jump Logo White 2.png";
import CloseIcon from "@mui/icons-material/Close";

const MobileHeader = ({ className, handleMobileMenuClick }) => {
  return (
    <div
      className={`lg:hidden p-4 pt-5 w-full fixed z-50 left-0 top-0 h-screen transition-transform duration-300 bg-[#3e3ea8] ${className}`}
    >
      <div className="flex items-center justify-between">
        <img
          src={jumpLogo}
          className="w-[76px] h-[44px] cursor-pointer"
          alt="Logo"
        />
        <button
          type="button"
          className="relative lg:hidden"
          onClick={handleMobileMenuClick}
        >
          <CloseIcon className="!text-[#fff] text-[20px]" fontSize="large" />
        </button>
      </div>
      <nav className="mt-10">
        <ul className="flex flex-col items-center gap-2">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="w-full py-3 cursor-pointer text-[18px] text-center leading-[28px] font-normal not-italic text-[#fff] hover:bg-[#00000011]"
            >
              {nav.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full flex items-center justify-center">
        <button className="mt-10 bg-[#FFC958] rounded-[5px] px-5 sm:px-10 lg:px-[54px] text-[16px] text-center text-[#32327A] leading-10 sm:leading-[50px] lg:leading-[60px] font-normal not-italic hover:scale-95 transition-all duration-300">
          GROW WITH US
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
