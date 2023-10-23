import React from 'react'
import Icon1 from '@/public/icons/support/icon_1.png'
import Icon2 from '@/public/icons/support/icon_2.png'
import Icon3 from '@/public/icons/support/icon_3.png'
import Icon4 from '@/public/icons/support/icon_4.png'

import Image from 'next/image'
const Services = () => {
    return (
        <section className='mx-6 lg:mx-16 mt-8 mb-20'>
            <div className='w-full'>
                <div className='flex lg:flex-row flex-col-reverse mx-3'>
                    <div className='w-[90%] relative mx-6'>
                        <p className='relative uppercase mt-2 z-10 tracking-wider font-bold text-lg text-orange-400'>
                            What we do
                        </p>
                        <h3 className='text-5xl relative mb-10 z-[1]'>
                            Our Services
                            <span className='absolute -z-[1] font-bold tracking-wider uppercase -left-2 -top-[40px] text-[110px] text-gray-200 hidden lg:block'>WE DO</span>
                        </h3>

                        <p className='text-lg text-gray-500 my-2'>
                            At Sea Hawk Adventures, we are passionate about adventure and the great outdoors. With years of experience and a deep love for nature, our team of expert guides is dedicated to providing you with the ultimate white-water rafting experience.
                        </p>

                    </div>
                </div>
                <div className='w-[70%] mx-auto mt-10'>
                    <div className='grid grid-row-2'>
                        <div className='grid grid-cols-2'>
                            <div className='flex gap-4'>
                                <Image 
                                    src={Icon1}
                                    alt='icon_1'
                                />
                                <div className='my-auto'>
                                    <h2 className='text-2xl text-gray-600'>In Every Condition</h2>
                                    <p className='text-lg text-gray-500'>Sausage bresaola pican jerky ribeye.</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <Image 
                                    src={Icon2}
                                    alt='icon_1'
                                />
                                <div className='my-auto'>
                                    <h2 className='text-2xl text-gray-600'>Professional Team</h2>
                                    <p className='text-lg text-gray-500'>Sausage bresaola pican jerky ribeye.</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 grid grid-cols-2'>
                            <div className='flex gap-4'>
                                <Image 
                                    src={Icon3}
                                    alt='icon_1'
                                />
                                <div className='my-auto'>
                                    <h2 className='text-2xl text-gray-600'>Support 24/7</h2>
                                    <p className='text-lg text-gray-500'>Sausage bresaola pican jerky ribeye.</p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <Image 
                                    src={Icon4}
                                    alt='icon_1'
                                />
                                <div className='my-auto'>
                                    <h2 className='text-2xl text-gray-600'>Expert Hikers</h2>
                                    <p className='text-lg text-gray-500'>Sausage bresaola pican jerky ribeye.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services