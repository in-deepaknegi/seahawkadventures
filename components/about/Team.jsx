import React from 'react'
import Image from 'next/image'
import Profile1 from '@/public/Profile1.jpg'
const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl: Profile1,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 200,
    },
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl: Profile1,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 400,
    },
    {
        name: 'Lindsay Walton',
        role: 'Front-end Developer',
        imageUrl: Profile1,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 600,
    },
    {
        name: 'Courtney Henry',
        role: 'Designer',
        imageUrl: Profile1,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 800,
    },
]
const Team = () => {
    return (
        <section className='relative isolate bg-white py-20 sm:py-24'>
            <div className='mx-auto max-w-7xl px-5 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-4xl font-semibold md:text-5xl'
                        data-aos="fade-up" data-aos-duration="500">
                        Meet Our Team
                    </h2>
                    <p className='mt-5 text-[1.1011rem] text-gray-700'
                        data-aos="fade-up" data-aos-duration="500">
                        Get to know our friendly and knowledgeable experienced guides and staff, who are dedicated to providing you with a truly memorable and informative experience.
                    </p>
                </div>
                <ul role='list' className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
                    {people.map((person) => (
                        <li key={person.name} data-aos="fade-up" data-aos-duration="500" data-aos-delay={person.delay}>
                            <Image
                                src={person.imageUrl}
                                alt='person'
                                className='aspect-[3/2] w-full rounded-2xl object-cover'
                            />
                            <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-sm font-semibold leading-6 text-blue-700">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Team