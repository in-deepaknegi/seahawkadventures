import React from 'react'
import User from '@/public/icons/support/users.svg'
import Globe from '@/public/icons/support/globe.svg'
import Home from '@/public/icons/support/home.svg'
import Setting from '@/public/icons/support/settings.svg'
import Image from 'next/image'
import FaUsers from 'react-icons/fa';


const Support = () => {
    return (
        <section className='relative overflow-hidden clear-both bg-support h-[50vh] bg-cover bg-no-repeat'>
            <div className='relative px-10 mx-10 mt-20 z-[4] py-12'>
                <div className='grid grid-cols-4 gap-5'>
                    <div className=' text-white text-center'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg" className='mx-auto text-orange-400'><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                        <h2 className='text-4xl tracking-wider'>Talented Staff</h2>
                        <p className='text-lg mt-5'>Pastrami chuck porchetta pig prosciutto strip steak.</p>
                    </div>
                    <div className=' text-white text-center'>
                        <Image
                            src={Globe}
                            alt='user-logo'
                            className='w-16 mx-auto'
                        />
                        <h2 className='text-4xl tracking-wider'>Amazing Places</h2>
                        <p className='text-lg mt-5'>Pastrami chuck porchetta pig prosciutto strip steak.</p>
                    </div>
                    <div className=' text-white text-center'>
                        <Image
                            src={Home}
                            alt='user-logo'
                            className='w-16 mx-auto'
                        />
                        <h2 className='text-4xl tracking-wider'>Accommodation</h2>
                        <p className='text-lg mt-5'>Pastrami chuck porchetta pig prosciutto strip steak.</p>
                    </div>
                    <div className=' text-white text-center'>
                        <Image
                            src={Setting}
                            alt='user-logo'
                            className='w-16 mx-auto'
                        />
                        <h2 className='text-4xl tracking-wider'>24/7 Support</h2>
                        <p className='text-lg mt-5'>Pastrami chuck porchetta pig prosciutto strip steak.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support