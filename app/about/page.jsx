import React from 'react'
import AboutHero from '../components/PageNameBanner'
import AboutUs from '../components/AboutUs'
import Banner from '../components/Banner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import PageNameBanner from '../components/PageNameBanner';
import Vision from '../components/about/Vision';


const page = () => {
  return (
    <>
        <PageNameBanner title="About Us" image={AboutHeroImg}/>
        <AboutUs/>
        <Vision/>
        <Banner/>
    </>
  )
}

export default page