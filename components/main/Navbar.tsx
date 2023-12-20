import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
            priority
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Zine Adjemi
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Resume
            </a>
            <a href="/zineadjemicv.pdf" target="_blank" rel="noopener noreferrer"
  >Download RESUME</a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social,index) => (
            <a key={social.name} href={social.key} target="_blank" rel="noopener noreferrer">
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
