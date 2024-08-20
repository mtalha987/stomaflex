import React from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "@/public/images/product1.svg";

const productData = [
  {
    id:"1",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"2",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"3",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"4",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"5",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"6",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"7",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  {
    id:"8",
    name: "One piece closed Ostomy bag ",
    model: "Model: 2102",
    url: Product1,
    action: "View details",
  },
  
];

const ProductData = ({limit,gridSizeL,gridSizeM,gridSizeS}) => {

  const displayedProducts = limit ? productData.slice(0, limit) : productData;
  return (
    <>
      <div className={`grid gap-10 justify-center mt-14 grid-cols-1 sm:grid-cols-${gridSizeS} md:grid-cols-${gridSizeM} lg:grid-cols-${gridSizeL}`}>
  {displayedProducts.map((item, index) => (
    <div
      className="bg-white shadow-lg  flex flex-col  py-8  justify-center"
      key={index}
    >
      <Image src={item.url} alt={item.name} className="mx-auto " />
      <div className="ml-5">
        <h3 className="text-black text-[13px] font-normal font-primary mt-10">{item.model}</h3>
        <h2 className="text-black text-[13px] font-normal font-primary mt-1">
          {item.name}
        </h2>
        <div className="mt-6">
          <button className="px-[13px] py-[5px] border border-primary text-primary text-base font-medium font-primary">
            <Link href={`/product/singleP`} >{item.action}</Link>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  );
};

export default ProductData;
