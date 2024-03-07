import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/explore/kayaking/Hero'
import FAQ from '@/components/FAQ';
import Kayaking from '@/components/(pages)/home/Kayaking';
import Logo from '@/components/Logo';

import type { Metadata } from 'next'
import Newsletter from '@/components/Newsletter';
import Icons from '@/components/Icons';

export const metadata: Metadata = {
    title: 'Kayaking',
    description: 'Kayaking-page',
}

const faq = [
    {
        id: 1,
        question: "What is kayaking?",
        answer: "Kayaking is a water sport that involves paddling a small watercraft known as a kayak. The kayak is propelled by the paddler sitting in the cockpit and using a double-bladed paddle to move through the water.?",
    },
    {
        id: 2,
        question: "Is kayaking difficult to learn?",
        answer: "Kayaking can be relatively easy to learn, especially for beginners. With proper instruction and practice, most people can quickly grasp the basic techniques of paddling and maneuvering a kayak.",
    },
    {
        id: 3,
        question: "What equipment do I need for kayaking?",
        answer: "Basic kayaking equipment includes a kayak, paddle, personal flotation device (PFD), and appropriate clothing such as a wetsuit or quick-dry clothing. Depending on the type of kayaking and conditions, additional gear like a spray skirt, helmet, and kayak-specific footwear may be necessary."
    },
    {
        id: 4,
        question: "What types of kayaking are there?",
        answer: "There are several types of kayaking, including recreational kayaking, sea kayaking, whitewater kayaking, and kayak touring. Each type offers a unique experience, ranging from calm lake paddling to navigating challenging whitewater rapids or exploring coastal waters."
    },
    {
        id: 5,
        question: "How do I choose the right kayak for me?",
        answer: "Choosing the right kayak depends on factors such as your skill level, intended use (e.g., recreational paddling, whitewater kayaking, touring), body size, and budget. It's essential to try out different types and sizes of kayaks to find one that suits your needs and preferences."
    },
    {
        id: 6,
        question: "Can I kayak solo or should I go with a group?",
        answer: "Both solo kayaking and group kayaking have their advantages and considerations. Solo kayaking allows for independence and solitude but requires more experience and self-reliance. Going with a group can enhance safety, provide camaraderie, and offer opportunities for learning from others."
    }
]

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Icons/>
                <Hero />
                <Kayaking />
                <FAQ faq={faq} />
                <Newsletter />
                <Logo />
            </main>
            <Footer />
        </>
    )
}

export default page