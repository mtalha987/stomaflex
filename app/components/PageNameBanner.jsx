import React from 'react'
import Image from 'next/image'

const PageNameBanner = (props) => {
  return (
    <>
        <div className="xl:mx-[90px] lg:mx-10 h-56 lg:mt-11 mt-6 relative xs:overflow-hidden xs:mt-5" >
            <Image src={props.image} className='absolute -z-10 w-full h-full object-cover ' />
            <h2 className="text-primary text-5xl font-normal font-nohemi absolute bottom-9 left-9 xs:top-[50%] xs:left-[50%] xs:w-full xs:text-center xs:translate-x-[-50%] xs:translate-y-[-50%] ">{props.title}</h2>
        </div>
    </>
  )
}

export default PageNameBanner