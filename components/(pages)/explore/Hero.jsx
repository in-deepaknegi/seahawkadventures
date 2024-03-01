"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hero1 from "@/public/hiking1.WEBP";
import Hero2 from "@/public/rafting3.WEBP";
import Hero3 from "@/public/kayak1.WEBP";

const gallery = [
    {
        id: 1,
        title: "Hiking",
        imageSrc: Hero1,
        href: "/explore/rafting",
    },
    {
        id: 2,
        imageSrc: Hero2,
        title: "Rafting",
        href: "/explore/rafting",
    },
    {
        id: 3,
        imageSrc: Hero3,
        title: "Kayaking",
        href: "/explore/kayaking",
    },
];

const Hero = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            <section className="bg-white px-6 py-16 lg:py-12 lg:px-8">
                <div className="max-w-2xl text-left">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Choose your adventure
                    </h2>
                    {/* <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p> */}
                </div>
                <div className="mt-16 md:flex justify-center items-center gap-4 mx-auto max-w-7xl">
                    {gallery.map((item, index) => (
                        <figure
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            className="relative isolate left-0 w-full my-8 md:my-0 md:w-24 h-[18rem] md:h-[20rem] rounded-2xl overflow-hidden transition-all ease-in-out duration-700 shadow-xl flex-auto md:flex-[0.33] hover:flex-[2] hover:cursor-pointer hover:rounded-xl"
                        >
                            <Image
                                src={item.imageSrc}
                                alt="hero-image-1"
                                loading="eager"
                                className="absolute inset-0 -z-10 h-[20rem] object-cover"
                            />
                            <a href={item.href} className="text-xl text-white">
                                <span className="absolute inset-0"></span>
                                {/* Title */}
                            </a>
                            {hoveredIndex === index && (
                                <div className="py-1.5 bg-black/60 text-white text-lg px-4 block transition-all ease-in duration-700">
                                    {item.title}
                                </div>
                            )}
                        </figure>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Hero;
