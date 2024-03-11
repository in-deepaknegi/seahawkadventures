import React from 'react'
import Image from 'next/image'
import Rafting2 from '@/public/rafting/m00.jpg'

const Hero = () => {
    return (
        <>
            <section className='px-6 mt-6 lg:px-8 lg:mt-8'>
                <div className='relative isolate rounded-2xl shadow-xl shadow-gray-400 overflow-hidden bg-white'
                    style={{
                        backgroundImage: "url('/rafting3.WEBP')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        // backgroundAttachment: 'fixed',
                    }}>
                    <div className='absolute w-full h-full z-[-9] bg-gradient-to-b from-black/30 to-black/70'></div>

                    <div className='mx-auto max-w-7xl py-20 px-6 lg:px-8 flex flex-col lg:flex-row gap-x-10 justify-between'>
                        <h2 className='text-4xl font-bold tracking-tight text-white sm:text-7xl'>
                            Rafting
                        </h2>
                        <p className='my-auto text-lg leading-8 max-w-xl text-gray-100'>
                            Welcome to our incredible adventure-filled world, where we specialize in turning your most daring and wildest dreams into unforgettable realities!
                        </p>
                    </div>
                </div>
            </section>

            <section className=' bg-white py-16 sm:py-20 overflow-hidden'
                data-aos="fade-up" data-aos-duration="300">
                <div className='mx-auto px-6 lg:px-8'>
                    <div className='mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row'>
                        <div className='my-auto w-full '>
                            <div className=''>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                                    Experience the Thrill of Rafting in Rishikesh
                                </h2>
                                <p className='mt-6 text-base text-gray-700 md:text-lg'>
                                    At our company, we are passionate about providing unforgettable rafting and kayaking experiences on the majestic Ganges. Our mission is to create memories that last a lifetime, while ensuring the safety and enjoyment of our customers.
                                </p>
                                <div className="mt-10 flex gap-x-6">
                                    <a href="/booking" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500">
                                        Book your next adventure
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-auto'
                            data-aos="zoom-out" data-aos-duration="500">
                            <Image
                                src={Rafting2}
                                alt='Product screenshot'
                                quality={100}
                                loading='eager'
                                className='h-full object-cover rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero