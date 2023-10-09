import React from 'react'
import Image from 'next/image'
import Avatar from '@/public/slide01.jpg'

const Blogs = () => {
    return (
        <div className='mx-20 mt-20 mb-10'>
            <div>
                <div>
                    <p className='relative uppercase mt-2 z-10 font-bold text-lg text-orange-400'>
                        Recent Blogs
                    </p>
                    <h3 className='text-5xl relative mb-10 z-[1]'>
                        Featured Blogs
                        <span className='absolute -z-[1] font-bold uppercase -left-2 -top-[40px] text-[110px] text-gray-200 hidden lg:block'>Posts</span>
                    </h3>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <Image
                            src={Avatar}
                            alt='demo image'
                        />
                    </div>
                    <div className='font-sans mr-20 text-left'>
                        <div className='mx-6 flex gap-8'>
                            <div>October 8, 2023</div>
                            <div>by Alisa Michaels</div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='mx-6 text-3xl font-semibold uppercase'>
                                Moving through: the everyday urban jungle of your city
                            </h1>
                        </div>
                        <div className='mt-4'>
                            <p className='mx-6 text-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam . . .
                            </p>
                        </div>
                        <button className='mx-6 mt-4 bg-orange-400 px-3 py-2 text-white rounded-md'>Read More</button>
                    </div>
                </div>

                <div className='mt-20 grid grid-cols-2 gap-3'>
                    <div className='font-sans ml-20 text-right'>
                        <div className='flex float-right mx-6 gap-8'>
                            <div>October 8, 2023</div>
                            <div>by Alisa Michaels</div>
                        </div>
                        <div className='mt-10'>
                            <h1 className='mx-6 text-3xl font-semibold uppercase'>
                                Moving through: the everyday urban jungle of your city
                            </h1>
                        </div>
                        <div className='mt-4'>
                            <p className='mx-6 text-md'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam . . .
                            </p>
                        </div>
                        <button className='mx-6 mt-4 bg-orange-400 px-3 py-2 text-white rounded-md'>Read More</button>
                    </div>
                    <div>
                        <Image
                            src={Avatar}
                            alt='demo image'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs