import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/about/Hero'
import Timeline from '@/components/about/Timeline'
import Team from '@/components/about/Team'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
    title: 'About',
    description: 'About-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Team />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page