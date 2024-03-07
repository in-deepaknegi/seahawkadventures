"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.jpg';

const Navbar = () => {

    const [mobilemenu, setMobileMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    }
    return (

        <>
            <nav>
                <div className='bg-black'>
                    <div className='mx-auto flex h-10 items-center justify-between px-6 lg:px-8'>
                        <div className='flex-1'>
                            <div className='text-white text-sm inline-flex my-auto mt-1 gap-6'>
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-200'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <a href="tel:+91 97566 20538">+91 97566 20538</a>
                                </div>
                                <div className='hidden md:flex gap-2 border-l pl-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-200'><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                    <a href="mailto:office@seahawkadventures.com">office@seahawkadventures.com</a>
                                </div>
                            </div>

                        </div>
                        {/* <div className='hidden justify-center items-center lg:flex'>
                            <div className='text-gray-200 text-sm'>
                                Get 20% discount on your first booking
                            </div>
                        </div> */}
                        <div className='lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                            <a href='/login' className='hidden text-gray-100 text-sm lg:block'>Log In</a>
                            <span className='hidden h-4 w-[1px] bg-gray-200 mx-2 lg:block'></span>
                            <a href='/signup' className='hidden text-gray-100 text-sm lg:block'>Create an account</a>
                        </div>
                    </div>
                </div>
            </nav>

            <header className='sticky top-0 z-10'>
                <div className='relative'>
                    <div className='bg-white top-0 sticky border-b border-gray-200 flex items-center justify-between px-6 lg:py-[0.35rem] lg:px-8'>
                        <div className='flex lg:flex-none'>
                            <a href='/' className='-m-1.5 p-1.5 text-2xl font-medium'>
                                <Image
                                    src={Logo}
                                    alt='site-logo'
                                    className='w-36'
                                />
                            </a>
                        </div>
                        <div className='flex lg:hidden'>
                            <button
                                onClick={toggleMobileMenu}
                                type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                </svg>
                            </button>
                        </div>
                        <div className='hidden lg:flex lg:gap-x-12 ml-10'>
                            <button onClick={toggleDropdown} className='flex text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600'>
                                Explore
                                <span className='mt-[0.15rem] ml-1 text-gray-800'>
                                    {isOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    )}
                                </span>

                                {/* </a> */}
                                {isOpen && (
                                    <div className="absolute mt-6 w-32 bg-white border rounded-lg shadow-xl">
                                        <a
                                            href="/explore/rafting"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Rafting
                                        </a>
                                        <a
                                            href="/explore/kayaking"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Kayaking
                                        </a>
                                        <a
                                            href="/explore/rafting"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Hiking
                                        </a>
                                    </div>
                                )}
                            </button>


                            <a href='/gallery' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600'>Gallery</a>
                            <a href='/contacts' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600'>Contacts</a>
                            <a href='/about' className='text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600'>About</a>
                        </div>
                        <div className='hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8'>
                            <a href='#' className='text-gray-700'>Search</a>
                            <a href='#' className='text-gray-700'>Help</a>
                            <span className='h-5 w-[1px] bg-gray-500'></span>
                            <div>
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true' className='w-6 h-6 text-gray-600'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
                {mobilemenu && (
                    <div className='w-full h-full lg:hidden' role='dialog' aria-modal='true'>

                        <div className='fixed inset-y-0 top-0 right-0  overflow-y-auto px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-full w-full bg-white bg-clip-padding backdrop-filter bg-opacity-80 backdrop-blur-md'>
                            <div className='flex items-center justify-between'>
                                <a href='/' className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>Your Company</span>
                                </a>
                                <button
                                    onClick={toggleMobileMenu}
                                    type='button' className='-m-2.5 rounded-md p-4 ml-2 mt-1 text-gray-700'>
                                    <span className='sr-only'>Close menu</span>
                                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>
                            <div className='mt-6 flow-root'>
                                <div className='-my-6 divide-y divide-gray-500/10'>
                                    <div className='space-y-2 py-6'>

                                        <button onClick={toggleDropdown} className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900'>
                                            {/* <a href='/explore' className='text-sm font-semibold leading-6 text-gray-900'> */}
                                            <span className='text-left'>
                                                Explore
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="ml-4 flex flex-col text-left gap-y-4 text-base font-semibold leading-7 text-gray-900">
                                                <a
                                                    href="/explore/rafting"
                                                    className="hover:bg-gray-50 px-3 rounded-lg"
                                                >
                                                    Rafting
                                                </a>
                                                <a
                                                    href="/explore/kayaking"
                                                    className="hover:bg-gray-50 px-3 rounded-lg"
                                                >
                                                    Kayaking
                                                </a>
                                                <a
                                                    href="/explore/rafting"
                                                    className="hover:bg-gray-50 px-3 rounded-lg"
                                                >
                                                    Hiking
                                                </a>
                                            </div>
                                        )}
                                        <a href='/booking' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Plan Trip</a>
                                        <a href='/contacts' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Contacts</a>
                                        <a href='/about' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>About</a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col mx-auto gap-4 mt-4'>
                                <a href='/login' className='px-4 py-2 bg-black text-white text-center text-base rounded-lg'>Log In</a>

                                <a href='/register' className='py-2 bg-black text-white  text-center text-base rounded-lg'>Create an Account</a>

                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>

    )
}

export default Navbar