import Image from "next/image";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import Product from "./components/Product";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import SliderHero from "./components/SliderHero";

export default function Home() {
  return (
    <>
    <SliderHero/>
    <FeatureSection/>
    <Product />
    <Banner/>
    <AboutUs/>
    <Banner/>
    
    
    </>
  );
}
