import React from "react";
import jumpLogo from "../Assets/Jump Logo White 2.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="bg-[#20204A]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <img
              src={jumpLogo}
              className="w-[100px] h-[60px] cursor-pointer"
              alt="Logo"
            />
            <span className="cursor-pointer font-[300] not-italic text-[#e2e2e2]">
              195 Broadway,8th Floor
            </span>
            <span className="cursor-pointer font-[300] not-italic text-[#e2e2e2]">
              New York,Ny,100007
            </span>
          </div>

          <FooterLink />

          <div className="flex flex-col gap-4">
            <span className="cursor-pointer text-[18px] leading-[28px] font-normal not-italic text-[#fff] text-center md:text-start">
              Get in touch with us!
            </span>
            <span className="cursor-pointer text-[16px] leading-[28px] font-[300] not-italic text-[#fff] text-center md:text-start">
              hello@jump450.com
            </span>
            <div className="flex items-center gap-2 w-full justify-between">
              <div className="flex items-center justify-center p-2 cursor-pointer rounded-full bg-[#bebdc9] hover:scale-95 transition-all duration-300">
                <TwitterIcon fontSize="small" />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer rounded-full bg-[#bebdc9] hover:scale-95 transition-all duration-300">
                <InstagramIcon fontSize="small" />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer rounded-full bg-[#bebdc9] hover:scale-95 transition-all duration-300">
                <FacebookIcon fontSize="small" />
              </div>
              <div className="flex items-center justify-center p-2 cursor-pointer rounded-full bg-[#bebdc9] hover:scale-95 transition-all duration-300">
                <LinkedInIcon fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterLink = () => {
  const navLinks = [
    [
      {
        name: "Our Approach",
        link: "/our_approach",
      },
      {
        name: "Blog",
        link: "/blog",
      },
      {
        name: "About Us",
        link: "/about_us",
      },
    ],
    [
      {
        name: "Success Stories",
        link: "/success_stories",
      },
      {
        name: "Careers",
        link: "/careers",
      },
      {
        name: "Contact Us",
        link: "/contact_us",
      },
    ],
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-20">
      {navLinks.map((nav, index) => {
        return (
          <div className="flex flex-col gap-5" key={index}>
            {nav.map((subNav, index1) => (
              <span
                key={index1}
                className="cursor-pointer text-[18px] leading-[28px] font-normal not-italic text-[#fff] hover:scale-110 transition-all duration-300 text-center md:text-start"
              >
                {subNav?.name}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
};
