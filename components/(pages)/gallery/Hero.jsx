"use client";
import React, { useState } from "react";
import Image from "next/image";
import R1 from "@/public/rafting/r00.png";
import R2 from "@/public/rafting/r01.jpg";
import R3 from "@/public/rafting/r02.jpg";
import R4 from "@/public/rafting/r03.jpg";
import R5 from "@/public/rafting/r14.jpg";
import R6 from "@/public/rafting/r15.jpg";
import R7 from "@/public/rafting/r06.jpg";
import R8 from "@/public/rafting/r07.jpg";
import R9 from "@/public/rafting/r08.jpg";
import R10 from "@/public/rafting/r09.jpg";
import R11 from "@/public/rafting/r10.jpg";
import R12 from "@/public/rafting/r11.jpg";
import R13 from "@/public/rafting/r13.jpg";
import R14 from "@/public/rafting/r14.jpg";
import R15 from "@/public/rafting/r15.jpg";

import K1 from "@/public/kayak/k00.jpg";
import K2 from "@/public/kayak/k01.jpg";
import K3 from "@/public/kayak/k02.jpg";
import K4 from "@/public/kayak/k03.jpg";
import K5 from "@/public/kayak/k04.jpg";
import K6 from "@/public/kayak/k05.jpg";
import K7 from "@/public/kayak/k06.jpg";
import K8 from "@/public/kayak/k07.jpg";
import K9 from "@/public/kayak/k08.jpg";

import M1 from '@/public/expedition/mu00.jpg';
import M2 from '@/public/expedition/mu01.jpg';
import M3 from '@/public/expedition/m02.jpg';
import M4 from '@/public/expedition/m03.jpg';
import M5 from '@/public/expedition/m04.jpg';
import M6 from '@/public/expedition/m05.jpg';

const images = [
    { category: 'Rafting', url: R1 },
    { category: 'Rafting', url: R2 },
    { category: 'Kayaking', url: K3 },
    { category: 'Rafting', url: R3 },
    { category: 'Expedition', url: M2 },
    { category: 'Rafting', url: R4 },
    { category: 'Rafting', url: R5 },
    { category: 'Kayaking', url: K9 },
    { category: 'Rafting', url: R6 },
    { category: 'Expedition', url: M6 },
    { category: 'Rafting', url: R7 },
    { category: 'Rafting', url: R8 },
    { category: 'Kayaking', url: K1 },
    { category: 'Rafting', url: R9 },
    { category: 'Kayaking', url: K2 },
    { category: 'Rafting', url: R10 },
    { category: 'Rafting', url: R12 },
    { category: 'Rafting', url: R13 },
    { category: 'Expedition', url: M1 },
    { category: 'Kayaking', url: K4 },
    { category: 'Expedition', url: M5 },
    { category: 'Kayaking', url: K5 },
    { category: 'Rafting', url: R11 },
    { category: 'Expedition', url: M4 },
    { category: 'Kayaking', url: K6 },
    { category: 'Rafting', url: R14 },
    { category: 'Rafting', url: R15 },
    { category: 'Kayaking', url: K7 },
    { category: 'Expedition', url: M3 },
    { category: 'Kayaking', url: K8 },
];

const Hero = () => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(images.map(image => image.category))];

    const filteredImages = selectedCategory
        ? images.filter(image => image.category === selectedCategory)
        : images;

    return (
        <>
            <section className="relative isolate py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
                    <div className="flex mb-4 sm:mb-10 flex-col mx-auto justify-center items-center text-center gap-y-5 py-4 md:gap-x-10">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Images Gallery
                        </h2>
                        <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                            Explore our beautiful collection of photos featuring rafting,
                            kayaking, camping and expedition in Rishikesh.
                        </p>
                    </div>

                    <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2  sm:space-x-2">
                        <button
                            className={`${selectedCategory === '' ? 'bg-blue-700 text-white' : 'border-2 hover:border-blue-600'
                                } px-3 py-1 rounded-xl cursor-pointer`}
                            onClick={() => setSelectedCategory('')}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`${selectedCategory === category ? 'bg-blue-700 text-white' : 'border-2 hover:border-blue-600'
                                    } px-3 py-1 rounded-xl cursor-pointer`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className='w-full mt-10 h-full overflow-hidden'>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {filteredImages.map((image, i) => (
                                <button
                                    key={i} className="relative cursor-pointer">
                                    <Image
                                        alt="Gallery Image"
                                        className="object-cover w-full h-full object-center rounded-lg"
                                        src={image.url}
                                        loading="eager"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
