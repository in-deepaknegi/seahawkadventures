"use client"
import React, { useState } from 'react'

const Data = [
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
        id: 3,
        question: "What is the duration?",
        answer: "The duration of our trips varies depending on the chosen package. We offer half-day, full-day, and multi-day options."
    },

]

const Faq = () => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index)
    }

    return (
        <section className='relative isolate'>
            <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='lg:col-span-5'>
                        <h2 className='text-4xl font-bold leading-10 text-gray-800'>Frequently asked questions</h2>
                        <p className='mt-4 leading-7 text-gray-500'>
                            Can&apos;t find the answer you&apos;re looking for? Reach out to our
                            <a href="/contacts" className='text-orange-600'> customer support </a>
                            team.
                        </p>
                    </div>
                    <div className='lg:col-span-7 mt-8 lg:mt-0'>
                        <ul className='space-y-9'>
                            {Data.map((item, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => toggleActive(i)}
                                        className='flex w-full items-start justify-between text-left'>
                                        <span className='text-base font-semibold leading-7 text-gray-900'>
                                            {item.question}
                                        </span>
                                        <span>
                                            {active === i ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            )}
                                        </span>
                                    </button>
                                    {active === i && (
                                        <dd className='mt-2 text-base leading-7 text-gray-600'>
                                            {item.answer}
                                        </dd>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq