import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Form from '@/components/(pages)/booking/Form';

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Booking',
    description: 'Booking-page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page