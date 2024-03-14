import React from 'react'
import Image from 'next/image'
import Profile1 from '@/public/team/t00.jpg'
import Profile2 from '@/public/team/t01.jpg'
import Profile3 from '@/public/team/t02.jpg'


const people = [
    {
        name: 'Rishi Rana (Founder)',
        role: 'Professional Kayaker & Raft Guide',
        description: "Rishi Rana, is a dynamic individual known for his exceptional leadership and passion for adventure. Rishi has navigated numerous rivers across India, showcasing his expertise over the past decade.",
        imageUrl: Profile1,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 200,
    },
    {
        name: 'Rakesh Rana',
        role: 'Professional Raft Guide & kayaker ',
        description: "Very friendly person in our team Rakesh Rana has run many rivers in India and he has 8 years of experience. He’s very professional Raft guide and safety Kayaker !",
        imageUrl: Profile2,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 400,
    },
    {
        name: 'Nitesh Negi',
        role: 'Professional Raft Guide & kayaker ',
        description: "Nitesh Negi He has been working with Sea Hawk Adventures for 6 years and has a lot of experience. He has done a lot of river in India. ",
        imageUrl: Profile3,
        social: {
            twitter: 'https://twitter.com/username',
            facebook: 'https://facebook.com/username',
            instagram: 'https://instagram.com/username',
        },
        delay: 600,
    },

]
const Team = () => {
    return (
        <section className='relative overflow-hidden isolate bg-white py-20 sm:py-24'>
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
                <ul role='list' className='mx-auto mt-20 md:px-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                    {people.map((person) => (
                        <li key={person.name} className='border bg-gray-50 flex flex-col items-center rounded-2xl shadow-xl p-6' data-aos="fade-up" data-aos-duration="500" data-aos-delay={person.delay}>
                            <Image
                                src={person.imageUrl}
                                alt='person'
                                className='w-52 h-52 rounded-full object-cover mx-auto'
                            />
                            <h3 className="mt-6 text-2xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="mt-3 text-lg font-semibold leading-6 text-blue-700">{person.role}</p>
                            <p className='text-sm mt-3 text-gray-900'>{person.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Team