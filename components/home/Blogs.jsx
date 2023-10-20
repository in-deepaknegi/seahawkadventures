import React from 'react'
import Image from 'next/image'
import Avatar from '@/public/temp/slide01.jpg'

const Blogs = () => {
    return (
        <div className='mx-8 md:mx-20 mt-[7rem] mb-10'>
            <div>
                <div className='w-full'>
                    <p className='relative uppercase mt-2 z-10 font-bold text-lg text-orange-400'>
                        Recent Blogs
                    </p>
                    <h3 className='text-5xl relative mb-10 z-[1]'>
                        Featured Blogs
                        <span className='absolute -z-[1] font-bold uppercase -left-2 -top-[40px] text-[110px] text-gray-200 hidden lg:block'>Posts</span>
                    </h3>
                </div>

                <div className='grid lg:grid-cols-2 gap-3'>
                    <div>
                        <Image
                            src={Avatar}
                            alt='demo image'
                        />
                    </div>
                    <div className='font-sans md:mr-20 md:mx-6 text-left'>
                        <div className='flex gap-8'>
                            <div>October 8, 2023</div>
                            <div>by Alisa Michaels</div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-3xl font-semibold uppercase'>
                                Moving through: the everyday urban jungle of your city
                            </h1>
                        </div>
                        <div className='mt-4'>
                            <p className='text-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam . . .
                            </p>
                        </div>
                        <button className='mt-4 bg-orange-400 px-3 py-2 text-white rounded-md'>Read More</button>
                    </div>
                </div>

                <div className='mt-20 flex lg:flex-row flex-col-reverse gap-3'>
                    <div className='font-sans md:mx-6 lg:ml-20 lg:text-right ml-0'>
                        <div className='flex lg:float-right gap-8'>
                            <div>October 8, 2023</div>
                            <div>by Alisa Michaels</div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='text-3xl font-semibold uppercase'>
                                Moving through: the everyday urban jungle of your city
                            </h1>
                        </div>
                        <div className='mt-4'>
                            <p className='text-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam . . .
                            </p>
                        </div>
                        <button className='mt-4 bg-orange-400 px-3 py-2 text-white rounded-md'>Read More</button>
                    </div>
                    <div className='w-[100%]'>
                        <Image
                            src={Avatar}
                            alt='demo image'
                            className=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs