import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/explore/Hero'

export const metadata: Metadata = {
    title: 'Explore',
    description: 'Explore-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Footer />
        </>
    )
}

export default page