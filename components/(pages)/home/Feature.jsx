"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Rafting2 from '@/public/rafting2.WEBP';
import Kayak1 from '@/public/kayak2.WEBP';

const features = [
    {
        name: 'Safety',
        description: 'Your safety is our top priority. We provide experienced guides and top-quality equipment.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" /></svg>),
        delay: 700,
    },
    {
        name: 'Adventure.',
        description: "Get your adrenaline pumping as you conquer the thrilling rapids of the Ganga.",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>),
        delay: 500,
    },
    {
        name: 'Unforgettable Experiences',
        description: 'Immerse yourself in the breathtaking scenery as you paddle through crystal-clear waters.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><path d="M12 2v7.5" /><path d="m19 5-5.23 5.23" /><path d="M22 12h-7.5" /><path d="m19 19-5.23-5.23" /><path d="M12 14.5V22" /><path d="M10.23 13.77 5 19" /><path d="M9.5 12H2" /><path d="M10.23 10.23 5 5" /><circle cx="12" cy="12" r="2.5" /></svg>),
        delay: 500,
    },
    {
        name: 'Expert Guides',
        description: 'Our knowledgeable guides will ensure your safety and provide fascinating insights along the way.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><circle cx="10" cy="8" r="2" /><path d="m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17" /></svg>),
        delay: 700,
    },
]

const Feature = () => {
    return (
        <>
            <section className='bg-white py-16 sm:py-20'>
                <div className='mx-auto px-6 lg:px-8'>
                    <div className='mx-auto grid gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
                        <div className='col-span-12 order-last lg:order-first lg:pr-8 lg:col-span-6'>
                            <div className=''>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
                                    data-aos="fade-up" data-aos-duration="500">
                                    Get ready to feel the excitement of rafting down the Ganges River.
                                </h2>
                                <p className='mt-6 text-base text-gray-700 md:text-lg'
                                    data-aos="fade-up" data-aos-duration="500">
                                    Embark on a memorable journey as you navigate the rapids of the Ganges, surrounded by stunning views.
                                </p>
                                <div className='mt-10 grid gap-y-10 max-w-xl text-base leading-7 text-gray-600 md:gap-y-0 md:gap-x-4 md:grid-cols-2 lg:max-w-none'>
                                    {features.slice(0, 2).map((feature) => (
                                        <div key={feature.name}
                                            data-aos="fade-right" data-aos-duration="500" data-aos-delay={feature.delay}>
                                            <div className='flex gap-4'>
                                                {feature.svg}
                                                <h2 className='my-auto text-2x font-semibold text-gray-900'>{feature.name}</h2>
                                            </div>
                                            <p className='mt-3'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex gap-x-6">
                                    <a href="/booking" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500"
                                        data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
                                        Book now
                                    </a>
                                    <a href="/explore/rafting" className="text-sm font-semibold leading-6 text-gray-900 my-auto"
                                        data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100">
                                        Explore rafting <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div className='my-auto col-span-12 order-first lg:order-last lg:col-span-6'
                            data-aos="zoom-out" data-aos-duration="500">
                            <Image
                                src={Rafting2}
                                alt='Product screenshot'
                                quality={100}
                                loading='eager'
                                className='md:h-[25rem] object-cover rounded-2xl'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='overflow-hidden bg-white py-16 sm:py-20'>
                <div className='mx-auto px-6 lg:px-8'>
                    <div className='mx-auto grid gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
                        <div className='col-span-12 lg:col-span-6'
                            data-aos="zoom-out" data-aos-duration="500">
                            <Image
                                src={Kayak1}
                                alt='Product screenshot'
                                quality={100}
                                loading='eager'
                                className='md:h-[25rem] object-cover rounded-2xl'
                            />
                        </div>
                        <div className='col-span-12 lg:pr-8 lg:col-span-6'>
                            <div className=''>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
                                    data-aos="fade-up" data-aos-duration="500">
                                    Set out on peaceful kayaking adventures in Uttarakhand.
                                </h2>
                                <p className='mt-6 text-base text-gray-700 md:text-lg'
                                    data-aos="fade-up" data-aos-duration="500">
                                    Discover Uttarakhand&apos;s beauty with our kayaking adventures. Expert guides lead unforgettable journeys along tranquil rivers and lakes.
                                </p>
                                <div className='mt-10 grid gap-y-10 max-w-xl text-base leading-7 text-gray-600 md:gap-y-0 md:gap-x-4 md:grid-cols-2 lg:max-w-none'>
                                    {features.slice(2, 4).map((feature) => (
                                        <div key={feature.name} data-aos="fade-left" data-aos-duration="500" data-aos-delay={feature.delay}>
                                            <div className='flex gap-4'>
                                                {feature.svg}
                                                <h2 className='my-auto text-2x font-semibold text-gray-900'>{feature.name}</h2>
                                            </div>
                                            <p className='mt-3'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex gap-x-6">
                                    <a href="/booking" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500"
                                        data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
                                        Book now
                                    </a>
                                    <a href="/explore/kayaking" className="text-sm font-semibold leading-6 text-gray-900 my-auto"
                                        data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="100">
                                        Explore kayaking <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature