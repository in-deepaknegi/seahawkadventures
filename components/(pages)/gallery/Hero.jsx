"use client";
import React, { useState } from "react";
import Image from "next/image";
import Image1 from "@/public/rafting/r00.png";
import Image2 from "@/public/rafting/r01.jpg";
import Image3 from "@/public/rafting/r02.jpg";
import Image4 from "@/public/rafting/r03.jpg";
import Image5 from "@/public/rafting/r14.jpg";
import Image6 from "@/public/rafting/r15.jpg";
import Image7 from "@/public/rafting/r06.jpg";
import Image8 from "@/public/rafting/r07.jpg";
import Image9 from "@/public/rafting/r08.jpg";
import Image10 from "@/public/rafting/r09.jpg";
import Image11 from "@/public/rafting/r10.jpg";
import Image12 from "@/public/rafting/r11.jpg";
import Image13 from "@/public/rafting/r13.jpg";
import Image14 from "@/public/rafting/r14.jpg";
import Image15 from "@/public/rafting/r15.jpg";

import Kayak1 from "@/public/kayak/k00.jpg";
import Kayak2 from "@/public/kayak/k01.jpg";
import Kayak3 from "@/public/kayak/k02.jpg";
import Kayak4 from "@/public/kayak/k03.jpg";
import Kayak5 from "@/public/kayak/k04.jpg";
import Kayak6 from "@/public/kayak/k05.jpg";
import Kayak7 from "@/public/kayak/k06.jpg";
import Kayak8 from "@/public/kayak/k07.jpg";
import Kayak9 from "@/public/kayak/k08.jpg";

const images = [
    {
        id: 1,
        src: Image1,
        alt: "Rafting-1",
    },
    {
        id: 2,
        src: Image2,
        alt: "Rafting-2",
    },
    {
        id: 3,
        src: Image3,
        alt: "Rafting-3",
    },
    {
        id: 4,
        src: Image4,
        alt: "Rafting-4",
    },
    {
        id: 5,
        src: Image5,
        alt: "Rafting-5",
    },
    {
        id: 6,
        src: Image6,
        alt: "Rafting-6",
    },
    {
        id: 7,
        src: Image7,
        alt: "Rafting-7",
    },
    {
        id: 8,
        src: Image8,
        alt: "Rafting-8",
    },
    {
        id: 9,
        src: Image9,
        alt: "Rafting-9",
    },
    {
        id: 10,
        src: Image10,
        alt: "Rafting-10",
    },
    {
        id: 11,
        src: Image11,
        alt: "Rafting-11",
    },
    {
        id: 12,
        src: Image12,
        alt: "Rafting-12",
    },
    {
        id: 13,
        src: Image13,
        alt: "Rafting-13",
    },
    {
        id: 14,
        src: Image14,
        alt: "Rafting-14",
    },
    {
        id: 15,
        src: Image15,
        alt: "Rafting-15",
    },
];

const kayaks = [
    {
        id: 1,
        src: Kayak1,
        alt: "Kayak-1",
    },
    {
        id: 2,
        src: Kayak2,
        alt: "Kayak-2",
    },
    {
        id: 3,
        src: Kayak3,
        alt: "Kayak-3",
    },
    {
        id: 4,
        src: Kayak4,
        alt: "Kayak-4",
    },
    {
        id: 5,
        src: Kayak5,
        alt: "Kayak-5",
    },
    {
        id: 6,
        src: Kayak6,
        alt: "Kayak-6",
    },
    {
        id: 7,
        src: Kayak7,
        alt: "Kayak-7",
    },
    {
        id: 8,
        src: Kayak8,
        alt: "Kayak-8",
    },
    {
        id: 9,
        src: Kayak9,
        alt: "Kayak-9",
    },
];

const Hero = () => {

    const [select, setSelect] = useState(Image1);
    const [selectr, setSelectr] = useState(Kayak1);

    const handleSelect = (image) => {
        setSelect(image);
    }
    const handleSelectr = (rimage) => {
        setSelectr(rimage);
    }

    return (
        <>
            <section className='relative bg-white py-16 sm:py-20'
                data-aos="fade-up" data-aos-duration="700">
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Rafting Images
                        </h2>
                        <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                            Explore our beautiful collection of photos featuring rafting and
                            kayaking in Rishikesh.
                        </p>
                    </div>

                    <div className='mt-10 mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row h-full'>
                        <div className='relative w-full'>
                            <div className='sticky top-24 h-[82.5vh] shadow-xl'>
                                <Image
                                    alt="Gallery Image"
                                    src={select}
                                    quality={100}
                                    loading="eager"
                                    className="object-cover h-full object-center w-full rounded-xl"
                                />
                            </div>
                        </div>

                        <div className='w-full h-auto overflow-hidden'
                            data-aos="zoom-out" data-aos-duration="700">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                                {images.map((image) => (
                                    <button
                                        onClick={() => handleSelect(image.src)}
                                        key={`${image.id}-${image.alt}`} className="relative cursor-pointer">
                                        <Image
                                            alt="Gallery Image"
                                            className="object-cover h-full object-center w-full rounded-lg"
                                            src={image.src}
                                            quality={100}
                                            loading="eager"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative bg-white py-16 sm:py-20'
                data-aos="fade-up" data-aos-duration="700">
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Kayaking Images
                        </h2>
                        <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                            Explore our beautiful collection of photos featuring rafting and
                            kayaking in Rishikesh.
                        </p>
                    </div>

                    <div className='mt-10 mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row h-full'>
                        <div className='w-full h-auto overflow-hidden'
                            data-aos="zoom-out" data-aos-duration="700">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-3">
                                {kayaks.map((image) => (
                                    <button
                                        onClick={() => handleSelectr(image.src)}
                                        key={`${image.id}-${image.alt}`} className="relative cursor-pointer">
                                        <Image
                                            alt="Gallery Image"
                                            className="object-cover h-full object-center w-full rounded-lg"
                                            src={image.src}
                                            quality={100}
                                            loading="eager"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='relative w-full'>
                            <div className='sticky top-24 h-[82.5vh] shadow-xl'>
                                <Image
                                    alt="Gallery Image"
                                    src={selectr}
                                    quality={100}
                                    loading="eager"
                                    className="object-cover h-full object-center w-full rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
