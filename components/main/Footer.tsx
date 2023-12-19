import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
            
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">

                        <span className="text-[15px] ml-[6px]">+33 7 48 30 44 43</span>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">

                        <span className="text-[15px] ml-[6px]">adjemizine@gmail.com</span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy;  Zine Adjemi 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
