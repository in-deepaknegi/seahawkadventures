import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Form from '@/components/(pages)/contact/Form';
import Hero from '@/components/(pages)/contact/Hero';
import Icons from '@/components/Icons';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Icons />
                <Hero />
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page