import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Form from '@/components/contact/Form';
import Hero from '@/components/contact/Hero';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page