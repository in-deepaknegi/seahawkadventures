'use client'
import Image from 'next/image';
import React from 'react'
import Kayak1 from '@/public/kayak/k01.jpg'
import Rafting2 from '@/public/rafting/r02.jpg'
import Hiking1 from '@/public/rafting/r08.jpg'

const timeline = [
    {
        id: 1,
        imageSrc: Rafting2,
        time: 'February 2022',
        title: 'Company Founded',
        para: "The company was founded with a burning passion for adventure and a relentless drive to explore the unknown, seeking to create a community of like-minded individuals who crave excitement and the thrill of new experiences.",
    },
    {
        id: 2,
        imageSrc: Kayak1,
        time: 'February 2022',
        title: 'Expanded Services',
        para: "We have recently expanded our services to include the exciting and adventurous activity of kayaking, which has quickly become a favorite pastime for many of our customers looking to embrace the great outdoors and experience the beauty of nature from a new perspective.",
    },
    {
        id: 3,
        imageSrc: Hiking1,
        time: 'February 2022',
        title: 'Opened New Location',
        para: "We have recently opened a stunning new location along the beautiful and sacred Ganges River, renowned for its rich cultural significance and breathtaking natural beauty.",
    },
]

const Timeline = () => {

    return (
        <section className='relative bg-white py-16 sm:py-20'
            data-aos="fade-up" data-aos-duration="700">
            <div className='mx-auto px-6 lg:px-8'>
                <div className='mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row h-full'>
                    <div className='relative w-full'>
                        <div className='sticky top-24'>
                            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'
                                >
                                The Incredible Journey We&apos;re On: A Story of Adventure and Discovery
                            </h2>
                            <p className='mt-6 text-[1.1011rem] leading-7 text-gray-600'
                               >
                                Join us on an absolutely unforgettable journey through time and space, where you&apos;ll experience history coming to life before your very eyes.
                            </p>
                            <div className="mt-10 flex gap-x-6">
                                <a href="/booking" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-orange-600 shadow-sm ring-1 ring-orange-500 hover:text-white hover:bg-orange-500"
                                  >
                                    Book now
                                </a>
                                <a href="/explore/rafting" className="text-sm font-semibold leading-6 text-gray-900 my-auto"
                                    >
                                    Explore rafting <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-auto overflow-hidden'
                        data-aos="zoom-out" data-aos-duration="700">
                        <div className='w-full flex flex-col gap-y-10 gap-x-0'>
                            {timeline.map((item) => (
                                <div key={item.id} className='flex gap-2 md:gap-6' >
                                    <div className='lg:block hidden items-center' data-aos="fade-up" data-aos-duration="500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-700'><circle cx="12" cy="12" r="8" /><path d="M12 2v7.5" /><path d="m19 5-5.23 5.23" /><path d="M22 12h-7.5" /><path d="m19 19-5.23-5.23" /><path d="M12 14.5V22" /><path d="M10.23 13.77 5 19" /><path d="M9.5 12H2" /><path d="M10.23 10.23 5 5" /><circle cx="12" cy="12" r="2.5" /></svg>

                                        <div className='mt-2 h-full w-[1.8px] bg-gray-200 lg:static mx-auto'>
                                        </div>
                                    </div>
                                    <div className='mt-2 mr-0 lg:mr-0 container'>
                                        <Image
                                            src={item.imageSrc}
                                            alt='jdf'
                                            className='aspect-video object-cover mb-3 rounded-2xl'
                                            data-aos="fade-left" data-aos-duration="500"
                                        />
                                        <time className="mt-4 text-sm font-normal leading-none text-gray-900"
                                            data-aos="fade-left" data-aos-duration="500">
                                            {item.time}
                                        </time>
                                        <p className='mt-3 text-2xl font-semibold leading-8 tracking-tight text-gray-800'
                                            data-aos="fade-left" data-aos-duration="500">
                                            {item.title}
                                        </p>
                                        <p className='mt-2 text-[1.015rem] leading-6 text-gray-900'
                                            data-aos="fade-left" data-aos-duration="500">
                                            {item.para}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline