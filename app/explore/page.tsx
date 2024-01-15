import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/explore/Hero'
import Faq from '@/components/explore/Faq'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
    title: 'Explore',
    description: 'Explore-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Faq />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page