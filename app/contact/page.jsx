import React from 'react'
import PageNameBanner from '../components/PageNameBanner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchWithUs from '../components/contact/TouchWithUs';
import LocationMap from '../components/contact/LocationMap';


const page = () => {
  return (
    <>
    <PageNameBanner title="Contact Us" image={AboutHeroImg}/>
    <TouchWithUs/>
    <LocationMap/>
    </>
  )
}

export default page