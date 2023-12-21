"use client"

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

   // Close the mobile menu when clicking outside the menu
   useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const menuButton = document.getElementById("mobile-menu-button");

      if (isMobileMenuOpen && menuButton && !menuButton.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen])

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] z-50 px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            priority
          />
          <span className="font-bold ml-3 hidden md:block text-gray-300">
            Zine Adjemi
          </span>
        </a>

          {/* Mobile navigation (burger menu) */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="focus:outline-none"
            >
               <Image
              src="/planeIcon.svg"
              alt="Burger Menu"
              width={32}
              height={32}
            />
            </button>

            {isMobileMenuOpen && (
              <div className="fixed top-16 inset-x-0 bg-gray-800 overflow-y-auto z-50">
                <div className="flex flex-col items-center py-8">
                  <a
                    href="#about-me"
                    className="cursor-pointer text-white mb-4"
                    onClick={closeMobileMenu}
                  >
                    About me
                  </a>
                  <a
                    href="#skills"
                    className="cursor-pointer text-white mb-4"
                    onClick={closeMobileMenu}
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="cursor-pointer text-white mb-4"
                    onClick={closeMobileMenu}
                  >
                    Resume
                  </a>
                  <a
                    href="/zineadjemicv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                    onClick={closeMobileMenu}
                  >
                    Download RESUME
                  </a>
                </div>
              </div>
            )}
          </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-between w-[500px] h-auto border border-[#7042f861] bg-[#0300145e] mr-5 px-5 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer ml-2">
            About me
          </a>
          <a href="#skills" className="cursor-pointer ml-2">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer ml-2">
            Resume
          </a>
          <a
            href="/zineadjemicv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Download RESUME
          </a>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social, index) => (
            <a
              key={social.name}
              href={social.key}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={social.width}
                height={social.height}
                className="common-image-class"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
