import React from 'react'
import Image from 'next/image'
import Slide1 from '@/public/gallery/1101.jpeg'
import Slide2 from '@/public/main/2201.jpeg'
import Slide3 from '@/public/gallery/1102.jpeg'
import Slide4 from '@/public/main/2202.jpeg'

const Hero = () => {
    return (
        <section className='mx-6 lg:mx-16 mt-[8rem]'>
            <div className='flex lg:flex-row flex-col-reverse w-full'>
                <div className='flex flex-col gap-4 md:gap-6 lg:w-[50%] px-3 md:px-10 font-sf lg:max-w-3xl w-full'>
                    <div className='mt-[5rem] md:mt-12'>
                        <h2 className='-mt-3 md:text-2xl text-xl font-bold uppercase bg-gradient-to-r from-purple-500 via-red-500 to-amber-500 bg-clip-text text-transparent tracking-wide'>
                            <span>We are hiking and outdoor club</span>
                        </h2>
                    </div>
                    <div className='w-full'>
                        <h1 className='md:text-6xl font-semibold text-5xl tracking-wider'>
                            It&apos;s Time to Start Your Amazing Adventures
                        </h1>
                    </div>
                    <div className='w-full'>
                        <p className='md:text-lg text-md text-gray-500'>
                            Welcome to the thrilling world of Sea Hawk Adventures! Embark on an unforgettable adventure as you navigate through the heart-pounding rapids of Ganges
                        </p>
                    </div>
                    <button className='w-[35%] py-3 rounded-lg bg-orange-400 text-xl'>
                        Book trip
                    </button>
                </div>

                <div className='lg:w-[50%] px-3 md:px-0'>
                    <div className='grid gap-3 grid-cols-5'>
                        <div className='md:block hidden col-span-2 my-auto'>
                            <Image
                                src={Slide1}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                        <div className='md:col-span-3 col-span-5 my-auto'>
                            <Image
                                src={Slide4}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='mt-3 lg:grid hidden gap-3 grid-cols-5'>
                        <div className='col-span-3 my-auto'>
                            <Image
                                src={Slide2}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                        <div className='col-span-2 my-auto'>
                            <Image
                                src={Slide3}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero