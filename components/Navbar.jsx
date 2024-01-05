import React from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.jpg';

const Navbar = () => {
    return (
        <header className='relative z-10 overflow-hidden'>
            <nav>
                <div className='bg-black'>
                    <div className='mx-auto flex h-10 items-center justify-between px-6 lg:px-8'>
                        <div className='flex'>
                            <div className='text-white text-sm lg:block'>
                                Rupees
                            </div>
                            <span className='my-auto ml-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='text-white'><path d="m6 9 6 6 6-6" /></svg>
                            </span>
                        </div>
                        <div className='hidden flex-1 items-center lg:flex-none'>
                            <a href='#' className='text-gray-200 text-sm'>
                                Get 20% discount on your first trip
                            </a>
                        </div>
                        <div className='lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                            <a href='/login' className='text-gray-100 text-sm'>Log In</a>
                            <span className='hidden h-4 w-[1px] bg-gray-200 mx-2 lg:block'></span>
                            <a href='/signup' className='hidden text-gray-100 text-sm lg:block'>Create an account</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-b border-gray-300 flex items-center justify-between lg:py-[0.25rem] lg:px-8'>
                    <div className='flex lg:flex-none'>
                        <a href='/' className='-m-1.5 p-1.5 text-2xl font-medium'>
                            <Image
                                src={Logo}
                                alt='site-logo'
                                className='w-32'
                            />
                        </a>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12 ml-10'>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>Explore</a>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>Plan Trip</a>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>Contacts</a>
                        <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>About</a>
                    </div>
                    <div className='hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8'>
                        <a href='#' className='text-gray-700'>Search</a>
                        <a href='#' className='text-gray-700'>Help</a>
                        <span className='h-5 w-[1px] bg-gray-500'></span>
                        <a href=''>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true' className='w-6 h-6 text-gray-400'><path strokeLinecap='round' strokeLinejoin='round' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'></path></svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar