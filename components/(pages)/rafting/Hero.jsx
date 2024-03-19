"use client"
import React, { useState } from "react";
import C1 from '@/public/kayak/kk.svg'
import Image from "next/image";
import R1 from '@/public/rafting/m00.jpg'
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
        image: R1,
    },
    {
        image: R1,
    },
    {
        image: R1,
    },
]

const Hero = () => {
    const [active, setActive] = useState(null);

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
                        <Image
                            src={R1}
                            alt="teke"
                            className=" aspect-video h-80 object-cover rounded-2xl shadow-2xl"
                        />
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
                                    <span className=" font-semibold">
                                        {feature.title}
                                    </span>
                                    {feature.description}
                                </li>
                            ))}
                        </ul>

                        <hr />

                        <h3 className="text-2xl mt-10 uppercase font-semibold text-black">
                            Frequently asked question
                        </h3>

                        <div className=" w-full md:w-1/2 z-20">
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

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;