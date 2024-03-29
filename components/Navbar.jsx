"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, PieChart } from "lucide-react";

import Logo from '@/public/logo.jpg';
import R1 from '@/public/rafting/m00.jpg'
import K1 from '@/public/kayak/k06.jpg'
import M1 from '@/public/expedition/mu00.jpg'

const menu = [
    {
        title: "Rafting",
        image: R1,
        solutions: [
            {
                name: "12 Km Rafting",
                description: "Read more about 12 km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 Km Rafting",
                description: "Read more about 16 km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 Km Rafting",
                description: "Read more about 26 km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
        width: "max-w-[34rem]"
    },
    {
        title: "Kayak School",
        image: K1,
        solutions: [
            {
                name: "Beginner",
                description: "Read more about our 4 days kayak lesson.",
                href: "/kayak/beginners-course",
            },
            {
                name: "Intermediate",
                description: "Read more about our 7 days kayak lesson.",
                href: "/kayak/intermediate-course",
            },
        ],
        width: "max-w-[35rem]"
    },
    {
        title: "Multi-day trip",
        image: M1,
        solutions: [
            {
                name: "Rafting Expedition",
                description: "Book your next expedition with us.",
                href: "#",
            },
            {
                name: "Kayak Expedition",
                description: "Book your next expedition with us.",
                href: "#",
            },
        ],
        width: "max-w-[32rem]"
    },
    {
        title: "Camping Package",
        image: K1,
        solutions: [
            {
                name: "Only Camping",
                description: "Book your next expedition with us.",
                href: "#",
            },
            {
                name: "Combo Package",
                description: "(Rafting + Camping)",
                href: "#",
            },
        ],
        width: "max-w-[33rem]"
    },
    {
        title: "More Links",
        solutions: [
            {
                name: "About us",
                href: "/about",
            },
            {
                name: "Contact us",
                href: "/contacts",
            },
            {
                name: "Gallery",
                href: "/gallery",
            },
        ],
        width: "max-w-[10rem]"
    },
];

const mobile = [
    {
        title: "Rafting",
        sub: [
            {
                name: "12 Km Rafting",
                href: "/rafting/12-km-rafting",
            },
            {
                name: "16 Km Rafting",
                href: "/rafting/16-km-rafting",
            },
            {
                name: "26 Km Rafting",
                href: "/rafting/26-km-rafting",
            },
        ],
    },
    {
        title: "Kayak School",
        sub: [
            {
                name: "Beginner",
                href: "/kayak/beginners-course",
            },
            {
                name: "Intermediate",
                href: "/kayak/intermediate-course",
            },
        ],
    },
    {
        title: "Multi-day trip",
        sub: [
            {
                name: "Rafting Expedition",
                href: "#",
            },
            {
                name: "Kayak Expedition",
                href: "#",
            },
            {
                name: "Camp Expedition",
                href: "#",
            },
        ],
    },
    {
        title: "More Links",
        sub: [
            {
                name: "About us",
                href: "/about",
            },
            {
                name: "Contact us",
                href: "/contacts",
            },
            {
                name: "Gallery",
                href: "/gallery",
            },
        ],
        width: "max-w-[10rem]"
    },
]

const Navbar = () => {

    const [mobilemenu, setMobileMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index);
    };

    const toggleDropdown = (index) => {
        setIsOpen(isOpen === index ? null : index);
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
                                    priority='true'
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

                        <div className='hidden lg:flex lg:gap-x-10 ml-10'>
                            {menu.map((item, i) => (
                                <div key={i} className="relative hidden lg:flex lg:gap-x-12">
                                    <button
                                        onMouseEnter={() => toggleOpen(i)}
                                        onMouseLeave={() => toggleOpen(i)}
                                        className="inline-flex justify-center items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown className={`h-5 w-5 ${open === i ? 'rotate-180 transition-all ease-in duration-200' : ''}`} aria-hidden="true" />

                                        {open === i && (
                                            <div className="absolute -left-5 z-50 mt-5 top-1 pt-2 flex w-screen max-w-max px-4">
                                                <div className={`w-screen ${item.width} flex-auto overflow-hidden rounded-3xl bg-white bg-clip-padding backdrop-filter bg-opacity-80 backdrop-blur-md text-[0.9005rem] leading-6 shadow-lg ring-1 ring-gray-900/5`}>
                                                    <div className="p-2 flex flex-row space-x-3">
                                                        {item.image && (
                                                            <Image
                                                                src={item.image}
                                                                alt="image"
                                                                className="w-[15rem] rounded-2xl object-cover"
                                                            />
                                                        )}

                                                        <div className="p-2 flex flex-col">
                                                            {item.solutions.map((c, j) => (
                                                                <a href={c.href}
                                                                    key={j}
                                                                    className="group relative flex rounded-lg py-1 px-4 hover:bg-gray-50"
                                                                >
                                                                    <div className="text-left">
                                                                        <h3
                                                                            className="font-semibold text-black"
                                                                        >
                                                                            {c.name}
                                                                        </h3>
                                                                        <p className="mt-1 text-gray-600 font-medium">
                                                                            {c.description}
                                                                        </p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className='hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8'>
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
                                    <div className='space-y-2 py-6 max-h-screen overscroll-y-none'>
                                        {mobile.map((menu, i) => (
                                            <div key={i}>
                                                <button
                                                    onClick={() => toggleDropdown(i)}
                                                    className='block rounded-lg py-2 mb-2 text-base font-semibold leading-7 text-gray-900'>
                                                    <span className='text-left flex'>
                                                        {menu.title}
                                                    </span>

                                                </button>
                                                {isOpen === i && (
                                                    <div className="flex ml-4 mt-2 flex-col gap-y-4 text-base font-semibold leading-7 text-gray-900">
                                                        {menu.sub.map((c, j) => (
                                                            <a
                                                                key={i}
                                                                href={c.href}
                                                                className="hover:bg-gray-50 px-3 rounded-lg"
                                                            >
                                                                {c.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
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