import Image from "next/image";
import React from "react";

import L1 from "@/public/logos/trip.png";
import L2 from "@/public/logos/ut.png";
import L3 from "@/public/logos/atoai.jpeg";
import L4 from "@/public/logos/IAPRO.jpg";
import L5 from "@/public/logos/mot.png";

const logos = [
    {
        id: 1,
        image: L1,
        alt: "#",
        href: "https://www.tripadvisor.in/Attraction_Review-g580106-d21358541-Reviews-Sea_Hawk_Adventure-Rishikesh_Dehradun_District_Uttarakhand.html",
    },
    {
        id: 2,
        image: L2,
        alt: "#",
        href: "#",
    },
    {
        id: 3,
        image: L3,
        alt: "#",
        href: "#",
    },
    {
        id: 4,
        image: L4,
        alt: "#",
        href: "#",
    },
    {
        id: 5,
        image: L5,
        alt: "#",
        href: "#",
    },
];

const Logo = () => {
    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2> */}
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {logos.map((logo) => (
                        <a href={logo.href} target="_blank" key={logo.id} className="my-auto">
                            <Image
                                src={logo.image}
                                alt={logo.alt}
                                className="h-full w-[80%] object-cover lg:col-span-1"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;
