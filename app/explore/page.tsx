import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/explore/Hero'
import Faq from '@/components/(pages)/explore/Faq'
import Newsletter from '@/components/Newsletter'
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Explore',
    description: 'Explore-page',
}


const faq = [
    {
        id: 1,
        question: "Is rafting safe for beginners?",
        answer: "Yes, our rafting trips are suitable for beginners. Our experienced guides provide thorough safety instructions and ensure your adventure is both fun and secure.",
    },
    {
        id: 2,
        question: "What should I bring?",
        answer: "We recommend bringing comfortable clothes, sunscreen, a hat, and a water bottle. We provide all necessary rafting and kayaking equipment.",
    },
    {
        id: 3,
        question: "Are there age restrictions?",
        answer: "Yes, participants must be at least 12 years old for rafting and 16 years old for kayaking. Minors must be accompanied by a parent or guardian."
    },
    {
        id: 4,
        question: "What is the duration?",
        answer: "The duration of our trips varies depending on the chosen package. We offer half-day, full-day, and multi-day options."
    },

]

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <FAQ faq={faq} />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page