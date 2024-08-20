import React from "react";
import Image from "next/image";
import Bag1 from "@/public/images/bag1.svg";
import Bag2 from "@/public/images/bag2.svg";
import Bag3 from "@/public/images/bag3.svg";
import Bag4 from "@/public/images/bag4.svg";

const FeatureSection = () => {
  const OstomyBagData = [
    { name: "One-piece Colostomy Bag", url: Bag1 },
    { name: "One-piece ostomy Bag", url: Bag2 },
    { name: "Two-piece Ostomy Bag", url: Bag3 },
    { name: "Two-piece Skin Barrier", url: Bag4 },
  ];
  return (
    <>
      <div className="mt-20 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-[40px] px-5">
        <h2 className="text-primary text-[42px] font-normal font-nohemi text-center">
          Ostomy Bag Series
        </h2>
        <div className="grid gap-10 2xl:gap-10 justify-center mt-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {OstomyBagData.map((item, index) => (
                <div className="bg-white shadow-lg items-center py-8 flex flex-col  justify-center"  key={index}>
                <Image src={item.url} alt="Ostomy Bag" />
                <h2 className="mt-11 px-6 text-center text-black text-xl font-medium font-primary leading-normal">{item.name}</h2>
              </div>
            ))}
          
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
