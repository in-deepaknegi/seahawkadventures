import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/explore/rafting/Hero'
import FAQ from '@/components/FAQ';

import type { Metadata } from 'next'
import Newsletter from '@/components/Newsletter';
import Pricing from '@/components/(pages)/home/Pricing';

export const metadata: Metadata = {
    title: 'Rafting',
    description: 'Rafting-page',
}

const faq = [
    {
        id: 1,
        question: "What is rafting?",
        answer: "Rafting, also known as whitewater rafting, is an outdoor recreational activity that involves navigating a river or other bodies of water using an inflatable raft. It typically involves teamwork to maneuver through rough waters and obstacles.",
    },
    {
        id: 2,
        question: "What equipment do I need for rafting?",
        answer: "Basic equipment for rafting includes a raft, paddles, personal flotation devices (life jackets), helmets, and appropriate clothing such as wetsuits or quick-dry clothing. Depending on the difficulty of the river and conditions, additional gear like throw bags, helmets, and river shoes might be recommended.",
    },
    {
        id: 3,
        question: "Is rafting safe?",
        answer: "While rafting involves inherent risks, with proper safety measures, professional guides, and adherence to safety protocols, it can be a relatively safe activity. However, it's essential to be aware of the risks associated with whitewater rafting, including strong currents, submerged obstacles, and cold water."
    },
    {
        id: 4,
        question: "Do I need prior experience to go rafting?",
        answer: "No prior experience is necessary for most commercial rafting trips, as professional guides typically provide instruction and guidance before embarking on the journey. However, it's essential to choose a trip appropriate for your skill level and comfort."
    },
    {
        id: 5,
        question: "How long does a rafting trip last?",
        answer: "The duration of a rafting trip can vary greatly depending on factors such as the length of the river, the difficulty of the rapids, and whether it's a half-day, full-day, or multi-day trip. Half-day trips typically last around 2-4 hours, while full-day trips can range from 6-8 hours. Multi-day trips can last anywhere from 2 to several days."
    },
    {
        id: 6,
        question: "Can I go rafting if I can't swim?",
        answer: "While being able to swim is recommended for rafting, it's not always a requirement, especially on commercial rafting trips where participants wear personal flotation devices (PFDs) or life jackets. However, it's essential to inform your guide if you're not a confident swimmer so they can provide additional assistance and guidance."
    }
]

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Pricing />
                <FAQ faq={faq} />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page