import React from 'react'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import PageNameBanner from '../components/PageNameBanner';
import Banner from '../components/Banner';
import ProductComplete from '../components/product/ProductComplete';


const page = () => {
  return (
    <>
        <PageNameBanner title="Product Page" image={AboutHeroImg}/>
        <ProductComplete/>
        <Banner/>
    </>
  )
}

export default page