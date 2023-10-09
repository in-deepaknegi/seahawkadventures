import React from 'react'
import Image from 'next/image'
import Avatar from '@/public/rafting01.jpg'

const About = () => {
    return (
        <section className='w-full px-1 md:px-8 my-12'>
            <div className='flex md:flex-row flex-col mx-3'>
                <div className='w-[90%] relative mx-6'>
                    <p className='relative uppercase mt-2 z-10 font-bold text-lg text-orange-400'>
                        Discover Story
                    </p>
                    <h3 className='text-5xl relative mb-10 z-[1]'>
                        Of the Waves of Ganga
                        <span className='absolute -z-[1] font-bold uppercase -left-2 -top-[40px] text-[110px] text-gray-200 hidden lg:block'>story</span>
                    </h3>

                    <p className='font-mono my-2'>
                        At Sea Hawk Adventures, we are passionate about adventure and the great outdoors. With years of experience and a deep love for nature, our team of expert guides is dedicated to providing you with the ultimate white-water rafting experience.
                    </p>
                    <p className=' font-mono my-2'>
                        Nestled in the heart of Uttarakhand, our Ganga river offers thrilling rapids, stunning scenery, and memories that will last a lifetime. Whether you&apos;re an adrenaline junkie seeking the rush of the rapids or a nature enthusiast looking to explore untouched wilderness, we invite you to join us on an unforgettable journey through the untamed waters of Ganges.
                    </p>
                </div>
                <div className='flex items-center'>
                    <div className='mx-auto w-[70%]'>
                        <Image
                            src={Avatar}
                            alt='Sea Hawk Avatar'
                            className='max-w-full h-auto rounded-xl'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About