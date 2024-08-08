import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Dot from "@/public/images/dotIcon.svg";
import HeroMobile from "@/public/images/heroMobile.svg";

const Hero = () => {
  return (
    <>
      <div className="sm:bg-hero-pattern bg-cover lg:bg-center sm:bg-right  bg-no-repeat  mt-6">
        <div className="lg:pt-64 sm:pt-28 xs:pt-12 lg:pl-28 sm:pl-10 xs:px-5 xs:bg-[#f9f9f9]">
          <h1 className="text-primary text-[56px] xs:text-[32px] xs:text-center font-normal font-nohemi lg:w-[55%]">
            The Flexible solution for your Stoma needs
          </h1>
          <p className="text-black text-base font-normal font-primary leading-normal mt-5 lg:w-[34%] xs:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="mt-10 flex xs:justify-center gap-3 sm:pb-56">
            <button className="py-3 px-[18px] bg-primary text-white text-base font-normal font-primary">
              Enquire now
            </button>
            <button className="py-3 px-[18px] text-primary bg-white text-base font-normal font-primary">
              Learn more
            </button>
          </div>
          <div className="xs:block hidden mt-10"><Image src={HeroMobile} alt="Stoma Flex" className="w-full" /></div>
        </div>
        <div className="pb-2">
          <Marquee
            autoFill
            className="bg-primary flex items-center  py-[7px] text-white text-xl font-normal font-primary leading-[30px] "
          >
            <Image src={Dot} alt="Icon of Dot" className="mr-4 ml-6" />
            <p>Get 20% off on www.Jurhy.com</p>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Hero;
