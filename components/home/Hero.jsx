import React from 'react'
import Image from 'next/image'
import Slide1 from '@/public/gallery/1101.jpeg'
import Slide2 from '@/public/main/2201.jpeg'
import Slide3 from '@/public/gallery/1102.jpeg'
import Slide4 from '@/public/main/2202.jpeg'

const Hero = () => {
    return (
        <section className='mx-16 mt-[8rem]'>
            <div className='flex flex-row w-full'>
                <div className='p-2 w-[50%] px-10 font-sf'>
                    <div className='max-w-4xl mt-[5rem] md:mt-12'>
                        <h2 className='-mt-3 md:text-2xl text-xl font-bold uppercase bg-gradient-to-r from-purple-500 via-red-500 to-amber-500 bg-clip-text text-transparent tracking-wide'>
                            <span>We are hiking and outdoor club</span>
                        </h2>
                    </div>
                    <div className='w-full mt-10 max-w-3xl'>
                        <h1 className='md:text-6xl font-semibold text-3xl tracking-wider'>
                            It&apos;s Time to Start Your Amazing Adventures
                        </h1>
                    </div>
                    <div className='w-full mt-10 max-w-3xl'>
                        <p className='md:text-lg text-md text-gray-500'>
                            Welcome to the thrilling world of Sea Hawk Adventures! Embark on an unforgettable adventure as you navigate through the heart-pounding rapids of Ganges
                        </p>
                    </div>
                    <button className='mt-10 px-8 py-3 rounded-lg bg-orange-400 text-xl'>
                        Book trip
                    </button>
                </div>
                <div className='w-[50%]'>
                    <div className='grid gap-3 grid-cols-5'>
                        <div className='col-span-2 my-auto'>
                            <Image
                                src={Slide1}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                        <div className='col-span-3 my-auto'>
                            <Image
                                src={Slide4}
                                alt='demo image'
                                className='rounded-xl'
                            />
                        </div>
                    </div>
                    <div className='mt-3 grid gap-3 grid-cols-5'>
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