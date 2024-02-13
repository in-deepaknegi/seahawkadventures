"use client"
import React, { useState } from 'react'

const FAQ = ({ faq }) => {
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
                            {faq.map((item, i) => (
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

export default FAQ