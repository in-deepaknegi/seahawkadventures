import React from 'react'
import Image from 'next/image'
import Slide1 from '@/public/01.jpg'
import Slide2 from '@/public/02.jpg'
import Slide3 from '@/public/03.jpg'
import Slide4 from '@/public/04.jpg'
import Slide5 from '@/public/slide01.jpg'



const Gallery = () => {
    return (
        <div className='relative overflow-auto p-8 bg-gradient-to-b from-white to-gray-100'>
            <div className='grid grid-cols-4 mx-10'>
                <div className='col-span-2'>
                    <div className='my-4 mt-20'>
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
                        className=' object-contain'
                    />
                </div>
                <div className='rounded-lg border'>
                    <Image
                        src={Slide2}
                        alt='demo image'
                    />
                </div>
                <div className=''>
                    <Image
                        src={Slide3}
                        alt='demo image'
                        className=' object-contain'
                    />
                </div>
                <div className='rounded-lg border'>
                    <Image
                        src={Slide4}
                        alt='demo image'
                    />
                </div>
                <div className='rounded-lg border'>
                    <Image
                        src={Slide5}
                        alt='demo image'
                        className=' object-cover w-[320px] h-[298px]'
                    />
                </div>
                <div className='flex items-center flex-col h-full w-full justify-center'>
                   <a href="/gallery" className=' text-xl uppercase border-l border-orange-400 pl-5'> View more photos</a>
                </div>
            </div>
        </div>
    )
}

export default Gallery