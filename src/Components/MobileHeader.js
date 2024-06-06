import React from "react";
import { navLinks } from "../utils/navLinks";

const MobileHeader = ({ className, handleMobileMenuClick, isMenuOpen }) => {
  return (
    <>
      {isMenuOpen && (
        <div
          onClick={handleMobileMenuClick}
          className="fixed w-screen h-screen left-0 top-0 z-40 bg-[#fff] opacity-20 lg:hidden"
        ></div>
      )}
      <div
        className={`lg:hidden p-4 pt-5 w-10/12 fixed z-50 left-0 top-0 h-screen transition-transform duration-300 bg-[#fff] ${className}`}
      >
        <nav className="">
          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className="w-full py-3 cursor-pointer text-[16px] text-center leading-[28px] font-normal not-italic text-[#000] hover:bg-[#00000011]"
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileHeader;
