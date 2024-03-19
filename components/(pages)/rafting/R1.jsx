"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


import C1 from '@/public/kayak/kk.svg'
import Image from "next/image";
import R1 from '@/public/rafting/m00.jpg'
import R2 from '@/public/rafting/r01.jpg'
import R3 from '@/public/rafting/r03.jpg'
import R4 from '@/public/rafting/r04.jpg'
import R5 from '@/public/rafting/r05.jpg'
import R6 from '@/public/rafting/r07.jpg'



import S1 from '@/public/svg/s00.svg';
import S2 from '@/public/svg/sandtimer.svg';
import S3 from '@/public/svg/clock.svg';
import S4 from '@/public/svg/group.svg'
import S5 from '@/public/svg/age.svg'
import S6 from '@/public/svg/life.svg'


const packages = [
    {
        svg: S1,
        title: "Activity location:",
        description: "Shivpuri, Seahawk Adventures office"
    },
    {
        svg: S3,
        title: "Rafting Timing: ",
        description: "8:00 a.m. to 3:00 p.m."
    },
    {
        svg: S2,
        title: "Total Duration:",
        description: "1 and a half hours"
    },
    {
        svg: S4,
        title: "Number of people in a raft:",
        description: "8 pax max"
    },
    {
        svg: S5,
        title: "Minimum age for river rafting:",
        description: "12 years old"
    },
    {
        svg: S6,
        title: "Inclusions:",
        description: "life jackets, guides, and transportation."
    },
]

const Data = [
    {
        id: 1,
        question: "The best time to do river rafting",
        answer:
            "The best time to do river rafting would be from September to mid-June.",
    },
    {
        id: 2,
        question: "Longest River Rafting in Rishikesh",
        answer:
            "36 km of river rafting, i.e., from Kaudiyala, is the longest river rafting in Rishikesh.",
    },
    {
        id: 3,
        question: "Is there any kind of risk in river rafting?",
        answer:
            "Absoulutely No, there is no risk in river rafting. SeaHawk Adventures has the most trained guides, and adding to that, kayakers also follow the rafts.",
    },
    {
        id: 4,
        question: "Is river rafting safe for children?",
        answer:
            "Yes, river rafting is safe for children over 12 years old.",
    },
    {
        id: 5,
        question: "What should I wear during river rafting?",
        answer:
            "Sandles, T-shirts, and shorts are best during river rafting.",
    },
    {
        id: 3,
        question: " Do we need to know swimming before going river rafting?",
        answer:
            "No, there is no need to swim for river rafting.",
    },
];

const gallery = [
    {
        image: R1,
    },
    {
        image: R2,
    },
    {
        image: R3,
    },
    {
        image: R4,
    },
    {
        image: R5,
    },
    {
        image: R6,
    },
]

const Hero = () => {
    const [active, setActive] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="relative isolate bg-white py-10 md:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative z-50 max-w-full px-5 md:px-16">
                    <div className="flex flex-col justify-between space-y-10 rounded-xl bg-black p-6 shadow-2xl md:p-12 lg:flex-row lg:space-y-0">
                        <div className="text-center lg:text-left   ">
                            <h3 className="text-3xl md:text-5xl flex flex-col md:flex-row gap-4 items-center font-semibold text-white">
                                <Image
                                    src={C1}
                                    alt="kayak-1"
                                    className="w-16 h-16"
                                />
                                12 Km Rafting in Rishikesh
                            </h3>
                            <p className="mt-3 text-gray-300 md:block hidden text-base">
                                Please don&apos;t hesitate to get in touch with us for any type of information or problem that you may have. We are here to help and provide assistance in any way we can.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="relative isolate mx-auto -mt-28 pb-16 rounded-2xl bg-gray-100/40 px-4 md:px-10 pt-24">
                    <div className="mx-auto mt-16 font-sans max-w-4xl text-lg flex flex-col space-y-7 text-left">
                        <p>
                            Rishikesh is known for its holistic, spiritual, and mythological value in Hinduism and is famous not only in India but in the in the whole world. Along with that, it is also known as the yoga capital of the world. Adding to that, Rishikesh is also famous for its thrilling and rejuvenating adventure activities like bungee jumping, rafting, camping, sky cycling, reverse bungee, and many more. One of the best-beheld adventures is river rafting in Rishikesh.
                        </p>
                        <p>
                            River Rafting in Rishikesh is the most adventurous and thrilling adventure activity that you can enjoy and have a whale of a time with your family and friends.
                        </p>
                        <h2 className="text-3xl uppercase font-semibold text-black">
                            12km River Rafting
                        </h2>
                        <p>
                            12km of river rafting stretches from Marine Drive to Shivpuri residing Grade 3 rapids, which will give an amazing adrenaline rush. The rapids that you will experience are as follows:
                        </p>
                        <ul className="list-disc ml-6">
                            <li>
                                Good morning, rapid
                            </li>
                            <li>
                                Black money
                            </li>
                            <li>
                                Three blind mice
                            </li>
                            <li>
                                Crossfire
                            </li>
                            <li>
                                Butterfly
                            </li>
                            <li>
                                Body surfing
                            </li>
                            <li>
                                Welcome to Shivpuri Rapid.
                            </li>
                        </ul>

                        <hr />

                        <ul className="space-y-2 text-lg leading-6">
                            {packages.map((feature, i) => (
                                <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-3">
                                    <Image
                                        src={feature.svg}
                                        alt="jsj"
                                        className="w-8"
                                    />
                                    <span>
                                        <span className=" font-semibold">
                                            {feature.title}
                                        </span>
                                        {feature.description}
                                    </span>

                                </li>
                            ))}
                        </ul>
                        <a
                            href={`https://wa.me/919756620538/?text=Hello! I'm interested in your rafting packages (12Km) and would love to learn more. Can you please provide details on the types of trips available and their durations? Thank you `}
                            target="_blank"
                            className="flex w-60 items-center rounded-md bg-green-500 px-2 text-center text-sm font-semibold text-white shadow-xl hover:bg-green-600"
                        >

                            <svg
                                className="w-9 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"></path>{" "}
                                </g>
                            </svg>
                            <span className="my-auto">
                                Book your next trip with us
                            </span>
                        </a>

                        <hr />

                        <h3 className="text-2xl mt-10 uppercase font-semibold text-black">
                            Frequently asked question
                        </h3>

                        <div className=" w-full md:w-[55%] z-20">
                            <dl className="space-y-4">
                                {Data.map((item, i) => (
                                    <div key={i}>
                                        <dt>
                                            <button
                                                onClick={() => toggleActive(i)}
                                                className="flex w-full items-start justify-between text-left">
                                                <span className="text-base font-semibold leading-7 text-gray-900">
                                                    {item.question}
                                                </span>
                                                <span>
                                                    {active === i ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14" />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14" />
                                                            <path d="M12 5v14" />
                                                        </svg>
                                                    )}
                                                </span>
                                            </button>
                                        </dt>
                                        {active === i && (
                                            <dd className="mt-2 text-base leading-7 text-gray-700">
                                                {item.answer}
                                            </dd>
                                        )}
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <hr />

                        <h3 className="text-2xl mt-10 uppercase font-semibold text-black">
                            Things to remember during river rafting
                        </h3>
                        <ul className="list-disc ml-6">
                            <li>
                                Any kind of alcohol, knife, mouthfresher, sharp object, cigarettes, or lighters are not allowed.
                            </li>
                            <li>
                                Photography and videography from personal devices are not allowed; the guide will take your photos and videos, which are not included in the rafting package.
                            </li>
                            <li>
                                Your mobile phones will be in a dry bag carried by the guide.
                            </li>
                            <li>
                                Guests are requested to report at least half an hour before the time slot allotted to them.
                            </li>
                        </ul>

                        <hr />

                        {/* Image gallery */}
                        <div className="w-full h-full px-1 md:px-10 lg:px-20">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="w-full relative h-full z-50"
                            >
                                {gallery.map((sub, i) => (
                                    <SwiperSlide key={i}>
                                        <Image
                                            src={sub.image}
                                            alt="sub"
                                            className="h-[17rem] md:h-[25rem] rounded-2xl object-cover"
                                        />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper mt-5"
                            >
                                {gallery.map((sub, i) => (
                                    <SwiperSlide key={i}>
                                        <Image
                                            src={sub.image}
                                            alt="sub"
                                            className="h-32 md:h-40 w-full rounded-lg object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;