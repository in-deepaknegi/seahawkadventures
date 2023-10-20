import React from 'react'
import Image from 'next/image'
import Slide1 from '@/public/gallery/1100.jpeg'
import Slide2 from '@/public/gallery/1101.jpeg'
import Slide3 from '@/public/gallery/1102.jpeg'
import Slide4 from '@/public/gallery/1103.jpeg'
import Slide5 from '@/public/gallery/1104.jpg'


const Gallery = () => {
    return (
        <div className='relative overflow-auto mt-5 lg:mt-[7rem] px-8 bg-gradient-to-b from-white to-gray-100'>
            <div className='pt-10 grid lg:grid-cols-4 grid-cols-1 sm:mx-10'>
                <div className='col-span-2'>
                    <div className='md:mt-20 mt-10 mx-2'>
                        <p className='relative uppercase mt-2 z-10 font-bold text-lg text-orange-400'>
                            Photos from our clients and their trips
                        </p>
                        <h3 className='text-5xl relative mb-10 z-[1]'>
                            From Our Large Gallery
                            <span className='absolute -z-[1] font-bold uppercase -left-2 -top-[40px] text-[110px] text-gray-200 hidden lg:block'>Photos</span>
                        </h3>
                    </div>
                </div>
                <div className=''>
                    <Image
                        src={Slide1}
                        alt='demo image'
                    />
                </div>
                <div className=''>
                    <Image
                        src={Slide2}
                        alt='demo image'
                    />
                </div>
                <div className=''>
                    <Image
                        src={Slide3}
                        alt='demo image'
                    />
                </div>
                <div className=''>
                    <Image
                        src={Slide4}
                        alt='demo image'
                    />
                </div>
                <div className=''>
                    <Image
                        src={Slide5}
                        alt='demo image'
                        className=' '
                    />
                </div>
                
                <div className='flex items-center flex-col h-full w-full justify-center lg:my-0 my-8'>
                    <a href="/gallery" className=' text-xl uppercase border-l border-orange-400 pl-5'> View more photos</a>
                </div>
            </div>
        </div>
    )
}

export default Gallery