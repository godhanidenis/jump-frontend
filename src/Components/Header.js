import React, { useState } from "react";
import jumpLogo from "../Assets/Jump Logo White 2.png";
import MenuIcon from "@mui/icons-material/Menu";
import MobileHeader from "./MobileHeader";
import { navLinks } from "../utils/navLinks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuStyle = isMenuOpen ? "-translate-x-0" : "translate-x-full";
  const handleMobileMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <MobileHeader
        className={`${mobileMenuStyle}`}
        handleMobileMenuClick={handleMobileMenuClick}
      />
      <header className="pt-4 md:pt-7 w-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={jumpLogo}
            className="w-[76px] h-[44px] cursor-pointer"
            alt="Logo"
          />
        </div>

        <div className="flex items-center gap-12">
          <nav>
            <ul className="hidden lg:flex items-center gap-12">
              {navLinks.map((nav, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-[18px] text-center leading-[28px] font-normal not-italic text-[#fff] hover:scale-110"
                >
                  {nav.name}
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="relative lg:hidden"
            onClick={handleMobileMenuClick}
          >
            <MenuIcon className="!text-[#fff] text-[20px]" fontSize="large" />
          </button>
          <button className="hidden lg:flex bg-[#FFC958] rounded-[5px] px-5 sm:px-10 lg:px-[54px] text-[16px] text-center text-[#32327A] leading-10 sm:leading-[50px] lg:leading-[60px] font-normal not-italic hover:scale-95 transition-all duration-300">
            GROW WITH US
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
