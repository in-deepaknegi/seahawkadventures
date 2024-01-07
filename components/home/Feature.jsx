import React from 'react';
import Image from 'next/image';
import Hiking1 from '@/public/hiking1.WEBP';
import Kayak1 from '@/public/kayak1.jpg';

const features = [
    {
        name: 'Safety',
        description: 'Your safety is our top priority. We provide experienced guides and top-quality equipment.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" /></svg>),
    },
    {
        name: 'Adventure.',
        description: "Get your adrenaline pumping as you conquer the thrilling rapids of the Ganga.",
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>)
    },
    {
        name: 'Unforgettable Experiences',
        description: 'Immerse yourself in the breathtaking scenery as you paddle through crystal-clear waters.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>)
    },
    {
        name: 'Expert Guides',
        description: 'Our knowledgeable guides will ensure your safety and provide fascinating insights along the way.',
        svg: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>)
    },
]

const Feature = () => {
    return (
        <>
            <section className='overflow-hidden bg-white py-16 sm:py-20'>
                <div className='mx-auto px-6 lg:px-8'>
                    <div className='mx-auto grid gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none grid-cols-12'>
                        <div className='col-span-12 order-last lg:order-first lg:pr-8 lg:col-span-6'>
                            <div className=''>
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                    Get ready to feel the excitement of rafting down the Ganges River.
                                </h2>
                                <p className='mt-6 text-base text-gray-700 md:text-lg'>
                                    Embark on a memorable journey as you navigate the rapids of the Ganges, surrounded by stunning views.
                                </p>
                                <div className='mt-10 grid gap-y-10 max-w-xl text-base leading-7 text-gray-600 md:gap-y-0 md:gap-x-4 md:grid-cols-2 lg:max-w-none'>
                                    {features.slice(0, 2).map((feature) => (
                                        <div key={feature.name}>
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
                                    <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500">
                                        Book now
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                        Explore more <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <div className='my-auto col-span-12 order-first lg:order-last lg:col-span-6'>
                            <Image
                                src={Hiking1}
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
                        <div className='col-span-12 lg:col-span-6'>
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
                                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                                    Set out on peaceful kayaking adventures in Uttarakhand.
                                </h2>
                                <p className='mt-6 text-base text-gray-700 md:text-lg'>
                                    Discover Uttarakhand&apos;s beauty with our kayaking adventures. Expert guides lead unforgettable journeys along tranquil rivers and lakes.
                                </p>
                                <div className='mt-10 grid gap-y-10 max-w-xl text-base leading-7 text-gray-600 md:gap-y-0 md:gap-x-4 md:grid-cols-2 lg:max-w-none'>
                                    {features.slice(2, 4).map((feature) => (
                                        <div key={feature.name}>
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
                                    <a href="#" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500">
                                        Book now
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                        Explore more <span aria-hidden="true">→</span></a>
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