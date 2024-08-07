import React from "react";
import Image from "next/image";
import LocationMapImage from "@/public/images/Map.svg";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import MailIcon from "@/public/images/mailIcon.svg";
import LocationIcon from "@/public/images/locationIcon.svg";

const LocationMap = () => {
  return (
    <>
      <div className="mt-32">
        <Image src={LocationMapImage} alt="Map" className="w-full" />
      </div>
      <div className="flex flex-wrap justify-center md:-mt-36 xl:px-0 lg:px-[40px] px-5 xs:gap-5">
        <div className="bg-[#F6E9F4] py-24 xl:pl-36 pl-[5%] pr-[100px] xs:w-full lg:pr-0 lg:w-[30%] ">
          <div>
            <Image src={PhoneIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Phone
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            (12+) 123 3456
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            (12+) 123 3456
          </p>
        </div>
        <div className="bg-[#E2BADC]  py-24 xl:pl-36 pl-[5%] pr-[100px] lg:pr-0 xs:w-full lg:w-[30%]  ">
          <div>
            <Image src={MailIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Email
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            info@yoursite.com
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            support@yoursite.com
          </p>
        </div>
        <div className="bg-[#F6E9F4] py-24 xl:pl-36 pl-[5%] pr-[100px] xs:w-full lg:pr-0 lg:w-[30%] ">
          <div>
            <Image src={LocationIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Location
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            121th Haidezign st,
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            Melbourne, AUS 12313
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
