import React from "react";

const Category = () => {
  const catalogData = [
    {
      name: "All Products",
    },
    {
      name: "Clinical",
    },
    {
      name: "Veterinary Food",
    },
    {
      name: "water & Environmental",
    },
    {
      name: "Pharmaceutical",
    },
    {
      name: "Industrial and Cosmetic",
    },
  ];
  return (
    <>
      <div className="hidden sm:flex xl:flex-nowrap flex-wrap justify-center  gap-3 mt-7">
        {catalogData.map((info, id) => (
          <div
            className="h-[35px] px-[15px] py-2.5 rounded-lg border border-little-gray justify-center items-center gap-2.5 inline-flex font-normal font-primary text-[13px]"
            key={id}
          >
            {info.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
