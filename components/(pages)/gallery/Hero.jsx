"use client";
import React from "react";
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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

const swiperz = [
    {
        id: 1,
        src: Image1,
        alt: "Image-1",
    },
    {
        id: 2,
        src: Image2,
        alt: "Image-2",
    },
    {
        id: 3,
        src: Kayak1,
        alt: "Image-3",
    },
    {
        id: 4,
        src: Kayak2,
        alt: "Image-4",
    },
    {
        id: 5,
        src: Image5,
        alt: "Image-5",
    },
    {
        id: 6,
        src: Image6,
        alt: "Image-6",
    },
    {
        id: 7,
        src: Image7,
        alt: "Image-7",
    },
    {
        id: 8,
        src: Kayak3,
        alt: "Image-8",
    },
    {
        id: 9,
        src: Kayak4,
        alt: "Image-9",
    },
    {
        id: 10,
        src: Kayak5,
        alt: "Image-10",
    },
    {
        id: 11,
        src: Image11,
        alt: "Image-11",
    },
    {
        id: 12,
        src: Kayak6,
        alt: "Image-12",
    },
    {
        id: 13,
        src: Image13,
        alt: "Image-13",
    },
    {
        id: 14,
        src: Kayak7,
        alt: "Image-14",
    },
    {
        id: 15,
        src: Image15,
        alt: "Image-15",
    },
];

const images = [
    {
        id: 1,
        src: Image1,
        alt: "Image-1",
    },
    {
        id: 2,
        src: Image2,
        alt: "Image-2",
    },
    {
        id: 3,
        src: Image3,
        alt: "Image-3",
    },
    {
        id: 4,
        src: Image4,
        alt: "Image-4",
    },
    {
        id: 5,
        src: Image5,
        alt: "Image-5",
    },
    {
        id: 6,
        src: Image6,
        alt: "Image-6",
    },
    {
        id: 7,
        src: Image7,
        alt: "Image-7",
    },
    {
        id: 8,
        src: Image8,
        alt: "Image-8",
    },
    {
        id: 9,
        src: Image9,
        alt: "Image-9",
    },
    {
        id: 10,
        src: Image10,
        alt: "Image-10",
    },
    {
        id: 11,
        src: Image11,
        alt: "Image-11",
    },
    {
        id: 12,
        src: Image12,
        alt: "Image-12",
    },
    {
        id: 13,
        src: Image13,
        alt: "Image-13",
    },
    {
        id: 14,
        src: Image14,
        alt: "Image-14",
    },
    {
        id: 15,
        src: Image15,
        alt: "Image-15",
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
    return (
        <>
            <section className="relative isolate bg-olive-200/60 overflow-hidden">
                <div className="my-10 max-w-6xl px-6 lg:px-10 mx-auto ">
                    <div className="relative w-full h-full isolate shadow-2xl rounded-2xl">
                        <Swiper
                            spaceBetween={30}
                            effect={"fade"}
                            speed={1000}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, EffectFade, Navigation]}
                            className="rounded-2xl"
                        >
                            {swiperz.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        quality={100}
                                        loading="eager"
                                        fill={true}
                                        sizes="100vw"
                                        className="w-full h-full rounded-2xl object-cover object-center inset-0 z-[-10]"
                                    />

                                    <div className="mx-auto px-8 pb-16 pt-[18.5rem] md:pt-[26rem]"></div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="relativeisolate py-8 lg:py-16">
                <div className="max-w-7xl min-h-screen  mx-auto px-8">
                    <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10 lg:flex-row">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Rafting Images
                        </h2>
                        <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                            Explore our beautiful collection of photos featuring rafting and
                            kayaking in Rishikesh.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div key={image.id} className="relative cursor-pointer">
                                <Image
                                    alt="Gallery Image"
                                    className="object-cover h-full object-center w-full rounded-xl"
                                    src={image.src}
                                    quality={100}
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-32 flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10 lg:flex-row">
                        <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                            Kayaking Images
                        </h2>
                        <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                            Explore our beautiful collection of photos featuring rafting and
                            kayaking in Rishikesh.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {kayaks.map((image) => (
                            <div key={image.id} className="relative cursor-pointer">
                                <Image
                                    alt="Gallery Image"
                                    className="object-cover h-full object-center w-full rounded-xl"
                                    src={image.src}
                                    quality={100}
                                    loading="eager"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
