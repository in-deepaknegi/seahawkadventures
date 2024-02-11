import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/about/Hero'
import Timeline from '@/components/(pages)/about/Timeline'
import Team from '@/components/(pages)/about/Team'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
    title: 'About',
    description: 'About-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main className=' overflow-x-hidden'>
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