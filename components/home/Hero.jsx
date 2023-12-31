'use client'
import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/kayak1.WEBP';

const Hero = () => {
    return (
        <section className='relative isolate overflow-hidden -mt-20'>
            <Image
                src={Hero1}
                alt='hero image 3'
                quality={100}
                loading='eager'
                className='w-full h-full object-cover absolute inset-0 z-[-10]'
            />

            <div className='md:absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 via-black/10 to-black/90'></div>
            <div className='md:hidden block absolute w-full h-full z-[-9] bg-gradient-to-b from-black/10 via-black/30 to-black/80'></div>

            <div className='mx-auto max-w-5xl text-center px-6 py-52 lg:py-40 lg:px-0'>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                    <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-white bg-black/60 ring-1 ring-gray-200 hover:ring-gray-900/20'>
                        Explore our upcoming adventures.
                        <a href='#' className='text-orange-500'>
                            <span className='absolute inset-0' aria-hidden='true'> </span>
                            &nbsp;Read more <span aria-hidden='true'>→</span>
                        </a>
                    </div>
                </div>
                <h1 className='mt-5 font-semibold text-white text-5xl md:mt-0 lg:text-6xl'>
                    Explore, Dream, Discover: Adventure Awaits!
                </h1>
                <p className='mt-12 text-base text-gray-50 md:mt-6 md:font-light md:text-lg'>
                    Embark on unforgettable hiking, rafting, and kayaking adventures in the stunning landscapes of Uttarakhand, surrounded by the majestic beauty of the Himalayas, and along the pristine Ganges River, where every bend brings new thrills and breathtaking views.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                    <a href='#' className='rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600'>
                        Discover trips
                    </a>
                    <a href='#' className='text-sm font-semibold leading-6 text-orange-500 my-auto'>
                        Join us <span aria-hidden='true'>→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero