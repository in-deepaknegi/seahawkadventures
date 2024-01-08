import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/rafting2.WEBP'
import Hero3 from '@/public/hiking1.WEBP'
import Hero2 from '@/public/kayak1.WEBP'

const posts = [
    {
        id: 1,
        title: 'Rafting Adventures',
        href: '#',
        img: Hero1,
        description: 'Experience the heart-pounding thrill of white water rafting and discover the absolute best spots around the world to take on this exhilarating adventure.',
        time: '5 min read',
        category: { title: 'Marketing', href: '#' },
        delay: 500,
    },
    {
        id: 2,
        title: 'Kayaking Escapades',
        href: '#',
        img: Hero2,
        description: 'Discover the serene beauty and tranquility of kayaking as you explore the best places to paddle and immerse yourself in the stunning natural surroundings.',
        time: '6 min read',
        category: { title: 'Marketing', href: '#' },
        delay: 1000,
    },
    {
        id: 3,
        title: 'Hiking in the Himalayas',
        href: '#',
        img: Hero3,
        description: 'Discover the breathtaking beauty of hiking in the majestic Himalayas, where towering peaks kiss the sky, and experience the exhilarating challenges that come with traversing this awe-inspiring mountain range.',
        time: '4 min read',
        category: { title: 'Marketing', href: '#' },
        delay: 2000,
    },
]

const Blog = () => {
    return (
        <section className="bg-white py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                        data-aos="fade-up" data-aos-duration="1000">
                        Recent blogs and articles
                    </h2>
                    <p className="mt-3 text-lg leading-8 text-gray-600"
                        data-aos="fade-up" data-aos-duration="1000">
                        Discover new adventures, tips, and tricks for hiking, rafting, and kayaking in various breathtaking locations around the world.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start"
                            data-aos="fade-up" data-aos-duration="1000">
                            <div className='relative w-full'>
                                <Image
                                    src={post.img}
                                    alt='post-img'
                                    className='aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                                />
                                <div className='absolute inset-0 rounded-2xl shadow-xl ring-inset ring-gray-100'></div>
                            </div>
                            <div className='mt-4 md:mt-10 max-w-xl'>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a href={post.category.href} className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-200"
                                    >
                                        {post.category.title}
                                    </a>
                                    <div className="text-gray-950">
                                        {post.time}
                                    </div>
                                </div>
                                <div className="relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="mt-4">
                                    <a href={post.href} className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                        Read more <span aria-hidden="true">→</span></a>
                                </div>
                                {/* <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image src={post.author.imageUrl} alt='id-1' className="h-10 w-10 rounded-full object-cover bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div> */}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog