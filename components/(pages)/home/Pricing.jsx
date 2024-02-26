import Image from "next/image";
import React from "react";
import Rafting1 from '@/public/rafting/r01.jpg';
import Rafting2 from '@/public/rafting/r02.jpg';
import Rafting3 from '@/public/rafting/r03.jpg';


const packages = [
    {
        name: "12 Km Rafting",
        image: Rafting1,
        desc: [
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>),
                location: "Marine Drive - Shivpuri"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
                location: "3 hours"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="m16 20 2 2 4-4" /></svg>),
                location: "Every day at 10:00 AM and 02:00PM"
            },
        ],
        rate: 620,
        link: "www.example.com",
        features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
        ],
    },
    {
        name: "16 Km Rafting",
        image: Rafting2,
        desc: [
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>),
                location: "Shivpuri to NIM Beach"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
                location: "3 hours"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="m16 20 2 2 4-4" /></svg>),
                location: "Every day at 10:00 AM and 02:00PM"
            },
        ],
        rate: 820,
        link: "www.example.com",
        features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time",
        ],
    },
    {
        name: "26 Km Rafting",
        image: Rafting3,
        desc: [
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>),
                location: "Marine drive to NIM Beach"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
                location: "3 hours"
            },
            {
                svg: (<svg xmlns="http://www.w3.org/2000/svg" className=" text-indigo-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M8 2v4" /><path d="M16 2v4" /><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" /><path d="M3 10h18" /><path d="m16 20 2 2 4-4" /></svg>),
                location: "Every day at 10:00 AM and 02:00PM"
            },
        ],
        rate: 1220,
        link: "www.example.com",
        features: [
            "5 products",
            "Up to 1,000 subscribers",
            "Basic analytics",
            "48-hour support response time",
        ],
    },
];

const Pricing = () => {
    return (
        <section id="packages" className="relative isolate bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-700">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        River Rafting in Rishikesh
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Book Rafting as per the Daily fixed River Rafting Departures. Get 40% off
                </p>

                <div className="mx-auto mt-10 grid lg:grid-cols-3 gap-y-6 gap-x-6">
                    {packages.map((pack, index) => (
                        <div
                            key={index}
                            className="rounded-3xl shadow-md ring-1 ring-gray-200 hover:ring-1 hover:shadow-2xl hover:ring-gray-300 hover:scale-[1.02] transition-all ease-in-out duration-300 overflow-hidden"
                        >
                            <Image
                                src={pack.image}
                                alt="alt"
                                className="h-[33%] object-cover object-center"
                            />
                            <h3 className="text-2xl text-center font-semibold pt-5 tracking-wide text-gray-900">
                                {pack.name}
                            </h3>

                            <div className="px-8 py-8 mb-6 md:mb-8">
                                <ul className="space-y-4 text-sm leading-6">
                                    {pack.desc.map((feature, i) => (
                                        <li key={i} className="flex gap-3">
                                            {feature.svg}
                                            {feature.location}
                                        </li>
                                    ))}
                                </ul>

                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {pack.para}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                                        {`₹ ${pack.rate} `}
                                    </span>
                                    <span className="text-base text-gray-700">
                                        /person
                                    </span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-6 block rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-xl hover:bg-blue-600"
                                >
                                    Buy plan
                                </a>
                                <ul className="mt-8 space-y-4 text-sm leading-6 xl:mt-10">
                                    {pack.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3">
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
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
