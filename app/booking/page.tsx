import React from 'react'
import type { Metadata } from 'next'
import Form from '@/components/booking/Form';

export const metadata: Metadata = {
    title: 'Booking',
    description: 'Booking-page',
}

const page = () => {
    return (
        <>
            <Form />
        </>
    )
}

export default page