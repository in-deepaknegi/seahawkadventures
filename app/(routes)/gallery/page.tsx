import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/gallery/Hero'
import Icons from '@/components/Icons'

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Gallery-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Icons />
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page