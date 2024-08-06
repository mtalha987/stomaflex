import React from 'react'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import PageNameBanner from '../components/PageNameBanner';
import Banner from '../components/Banner';


const page = () => {
  return (
    <>
        <PageNameBanner title="Product Page" image={AboutHeroImg}/>
        <Banner/>
    </>
  )
}

export default page