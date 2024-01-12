import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/about/Hero'
import Timeline from '@/components/about/Timeline'
import Team from '@/components/about/Team'

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
            </main>
            <Footer />
        </>
    )
}

export default page