"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <>
            {/* section above navbar */}
            {/* <div className={`${scroll ? 'hidden' : 'fixed z-10'}`}>
                <Image
                    src={Logo}
                    width={200}
                    className='z-10'
                />
            </div> */}

            <header className={`fixed top-0 font-sans w-full transition-all duration-500 border-b border-t z-20 ${scroll ? 'bg-white mt-0 ease-in-out' : 'mt-10 ease-in-out'}`}>
                <div className='max-w-screen-xl px-6 sm:px-8 lg:px-8 mx-auto grid grid-flow-col md:py-2'>
                    <div className='col-start-1 col-end-2 flex items-center'>
                        <a href='/' className='flex'>

                            <div className={`my-auto ml-3 text-3xl ${scroll ? 'text-black' : 'text-white'}`}>
                                <Image
                                    src={Logo}
                                    alt='site logo'
                                    width={150}
                                    className='z-10'
                                />
                            </div>
                        </a>
                    </div>
                    <ul className={`hidden lg:flex col-start-4 col-end-8 items-center transition-all duration-100 ${scroll ? 'text-black' : 'text-white'}`}>
                        <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-green-600'>About</a>
                        <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-green-600'>Feature</a>
                        <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-green-600'>Testimonial</a>
                        <a href="/about" className='px-4 py-2 mx-2 cursor-pointer relative hover:text-green-600'>Contact Us</a>

                    </ul>
                    <div className='col-start-10 col-end-12 font-medium md:flex justify-end items-center hidden'>
                        <a href="/login" className={`mx-2 sm:mx-5 capitalize tracking-wide border px-4 py-2 rounded-xl hover:bg-orange-400 transition-all ${scroll ? 'text-black' : 'text-white'}`}>
                            Sign In
                        </a>
                    </div>
                </div>
            </header>
        </>

    )
}

export default Navbar