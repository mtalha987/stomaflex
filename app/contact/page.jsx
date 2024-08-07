import React from 'react'
import PageNameBanner from '../components/PageNameBanner'
import AboutHeroImg from '@/public/images/aboutHero.svg';
import TouchWithUs from '../components/contact/TouchWithUs';


const page = () => {
  return (
    <>
    <PageNameBanner title="Contact Us" image={AboutHeroImg}/>
    <TouchWithUs/>
    </>
  )
}

export default page