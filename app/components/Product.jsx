import React from "react";
import Category from "./Category";
import ProductData from "./ProductData";
import MobileDropDown from "./MobileDropDown";

const Product = () => {
  return (
    <>
      <div className="mt-32">
        <div className="flex justify-around items-center">
          <h2 className="text-primary text-[42px] font-normal font-nohemi text-center">
            Products
          </h2>
          <MobileDropDown />
        </div>
        <Category />
        <ProductData />
      </div>
    </>
  );
};

export default Product;
