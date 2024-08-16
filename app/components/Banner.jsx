import React from 'react'
import Image from 'next/image'
import BannerImage from '@/public/images/banner.svg'
import RightArrow from '@/public/images/rightArrowP.svg'

const Banner = () => {
  return (
    <>
    <div className='sm:bg-CTA xs:bg-mCTA bg-no-repeat bg-cover bg-center  mt-32 xl:mx-[90px] lg:px-[40px] px-5 flex flex-wrap md:flex-nowrap pb-20 md:pb-0 2xl:max-w-[1440px] 2xl:mx-auto'>
        <div className='lg:w-[50%] xs:hidden'><Image src={BannerImage} alt='CTA Banner Image' className='h-[100%]'/></div>
        <div className='mt-14'>
            <h2 className=" text-white text-[42px] font-normal font-arial leading-[47.88px]">Get 20% off on Jurhy</h2>
            <p className='text-white text-base font-normal font-secondary leading-normal mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="px-[25px] py-3 mt-8  text-primary justify-center items-center gap-4 inline-flex bg-white text-base font-medium font-primary">
              Get this from Jurhy <Image src={RightArrow} alt="Right Arrow"  />
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner