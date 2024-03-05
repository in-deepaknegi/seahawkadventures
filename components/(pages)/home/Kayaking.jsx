"use client";
import React, { useState } from "react";
import Image from "next/image";

import Kayak1 from "@/public/kayak/k02.jpg";

const desc = [
    {
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-indigo-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        title: "Location",
        det: "Rishikesh, Uttarakhand",
    },
    {
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-indigo-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Duration",
        det: "4 Days",
    },
    {
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-indigo-600"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Group Size",
        det: "1 - 5 (Age: 14 - 55)",
    },
    {
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-indigo-600"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="8" />
                <path d="M12 2v7.5" />
                <path d="m19 5-5.23 5.23" />
                <path d="M22 12h-7.5" />
                <path d="m19 19-5.23-5.23" />
                <path d="M12 14.5V22" />
                <path d="M10.23 13.77 5 19" />
                <path d="M9.5 12H2" />
                <path d="M10.23 10.23 5 5" />
                <circle cx="12" cy="12" r="2.5" />
            </svg>
        ),
        title: "Difficulty",
        det: "Challenging ",
    },
];

const Data = [
    {
        id: 1,
        question: "Itinerary",
        answer: [
            "Day 1 - Basic skills: Brief ,Introduction, equipment, swimming, paddling strokes.",
            "Day 2 - Introduction to whitewater: Swimming, River crossing, practice Eskimo roll. ",
            "Day 3 -Today time to put our Basic skills to use, and we would run class ll rapids With professional Kayaker.",
            "Day 4 - Today practice all the skills swimming, River crossing, practice Eskimo roll and how to exit from Kayak and we would run class ll Rapids",
        ],
    },
    {
        id: 2,
        question: "What's included",
        answer: [
            "Snacks.",
            "All necessary legal paperwork & documentation.",
            "All gears PFD, Kayak, Paddle, Helmet, Spraydeck, professional instructor.",
            "First-aid kit.",
            "Travel arrangements Location Point to Location.",
            "Experienced crew from Sea Hawk Advanture local guide and support.",
        ],
    },
    {
        id: 3,
        question: "Cancellation policy",
        answer: [
            "For a full refund, cancel at least 24 hours in advance of the start date of the experience.",
        ],
    },
    {
        id: 4,
        question: "Additional information",
        answer: [
            "Confirmation will be received at time of booking",
            "Not recommended for travellers with back problems",
            "Not recommended for pregnant travellers",
            "No heart problems or other serious medical conditions",
            "Travellers should have a strong physical fitness level",
            "This tour/activity will have a maximum of 5 travellers",
        ],
    },
];

const Feature = () => {
    const [active, setActive] = useState(null);

    const toggleActive = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <>
            <section className="relative isolate bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-duration="700">
                        <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl">
                            Kayak lessons in Rishikesh.
                        </h2>
                        <p className="mt-6 text-base text-center text-gray-700 md:text-lg">
                            Discover Uttarakhand&apos;s beauty with our kayaking adventures.
                            Expert guides lead unforgettable journeys along tranquil rivers
                            and lakes.
                        </p>
                    </div>
                    <div className="mt-10 mx-auto flex flex-col lg:gap-y-0 gap-x-0 gap-y-10 lg:gap-x-8 lg:flex-row h-full">
                        <div
                            className="relative w-full h-auto"
                            data-aos="zoom-out"
                            data-aos-duration="700"
                        >
                            <Image
                                src={Kayak1}
                                alt="Product screenshot"
                                quality={100}
                                priority={true}
                                loading="eager"
                                className="md:h-[25rem] object-cover rounded-2xl"
                            />
                        </div>
                        <div className="w-full px-2" 
                        data-aos="fade-left"
                        data-aos-duration="700">
                            <ul className=" grid md:grid-cols-2 gap-4 text-sm leading-6">
                                {desc.map((feature, i) => (
                                    <li key={i} className="flex gap-3 my-auto font-semibold">
                                        {feature.svg}
                                        <span>
                                            {feature.title} {": "} {feature.det}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    {`₹ 15,000 `}
                                </span>
                                <span className="text-base text-gray-700">/adult</span>
                            </p>

                            <div className="mt-10 space-y-6">
                                {Data.map((item, i) => (
                                    <div key={i}>
                                        <button
                                            onClick={() => toggleActive(i)}
                                            className="flex w-full items-start justify-between text-left"
                                        >
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
                                        {active === i && (
                                            <div className="mt-2 text-black">
                                                <ul className="space-y-2 text-sm leading-6 ml-2">
                                                    {item.answer.map((ans, j) => (
                                                        <li key={j} className="flex gap-3">
                                                            <span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                    className="h-5 w-5 text-indigo-700"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </span>
                                                            {ans}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href={`https://wa.me/919756620538/?text=Hello! I'm interested in your kayaking lessons and would love to learn more. Can you please provide details on the types of trips available and their durations? Thank you `}
                                    target="_blank"
                                    className="flex rounded-md bg-green-500 px-2 text-center text-sm font-semibold text-white shadow-xl hover:bg-green-600"
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
                                    <span className="my-auto">Chat with us</span>
                                </a>

                                <a
                                    href="/explore/kayaking"
                                    className="text-sm font-semibold leading-6 text-gray-900 my-auto"
                                >
                                    Explore kayaking <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
