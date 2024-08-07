import React from "react";

const CategoryList = () => {
  const categoryList = [
    {
      name: "All Products",
    },
    {
      name: "One-piece Colostomy Bag",
    },
    {
      name: "One-piece ostomy Bag",
    },
    {
      name: "Two-piece Ostomy Bag",
    },
    {
      name: "Two-piece Skin Barrier",
    },
  ];
  return (
    <>
      <div className="pb-4 lg:pb-0">
        {categoryList.map((info,id) => (
          <div className="flex gap-3 mx-4 mt-4" key={id}>
            <div className="w-6 h-6 border border-primary  rounded-full flex justify-center items-center content-center">
              <div className="w-4 h-4 border border-primary  bg-primary  rounded-full"></div>
            </div>
            <div>
              <h2 className="text-divi-gray-300 text-base font-normal font-primary leading-normal">
                {info.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
