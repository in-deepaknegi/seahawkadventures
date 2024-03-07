import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/gallery/Hero'
import Logo from '@/components/Logo';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Gallery-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Logo />
            </main>
            <Footer />
        </>
    )
}

export default page