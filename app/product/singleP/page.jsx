import React from "react";
// import { useRouter } from "next/router";
import PageNameBanner from "../../components/PageNameBanner";
import Banner from "../../components/Banner";
import AboutHeroImg from '@/public/images/aboutHero.svg';
import BackButton from "@/app/components/product/BackButton";
import ProductMainDetail from "@/app/components/product/ProductMainDetail";
import RelatedProducts from "@/app/components/product/RelatedProducts";


// const productData = [
//   {
//     id: "1",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "2",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "3",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "4",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "5",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "6",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "7",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "8",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
//   {
//     id: "9",
//     name: "One piece closed Ostomy bag ",
//     model: "Model: 2102",
//     url: Product1,
//     action: "View details",
//   },
// ];

const ProductDetails = () => {
  // const router = useRouter();
  // const { slug } = router.query;

  // const product = productData.find((p) => p.name === slug);

  // if (!product) {
  //   return <p>Product not found</p>;
  // }
  return (
    <>
      <PageNameBanner title="Product Page" image={AboutHeroImg}/>
      <BackButton/>
      <ProductMainDetail/>
      <RelatedProducts/>
      <Banner/>
    </>
  );
};

export default ProductDetails;
