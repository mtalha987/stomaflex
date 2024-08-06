import React from "react";
import Category from "./Category";
import ProductData from "./ProductData";

const Product = () => {
  return (
    <>
      <div className="mt-32">
        <h2 className="text-primary text-[42px] font-normal font-nohemi text-center">Products</h2>
        <Category/>
        <ProductData/>
      </div>
    </>
  );
};

export default Product;
