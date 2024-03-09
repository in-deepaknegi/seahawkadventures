import Image from "next/image";
import React from "react";

import L1 from "@/public/logos/trip.png";
import L2 from "@/public/logos/ut.png";
import L3 from "@/public/logos/atoai.jpeg";
import L4 from "@/public/logos/IAPRO.jpg";
import L5 from "@/public/logos/mot.png";
import Link from "next/link";

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
        <section
            className="relative isolate py-8"
            data-aos="fade-left"
            data-aos-duration="500"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 h-15 md:h-30 gap-x-10">
                    {logos.map((logo) => (
                        <Link href={logo.href} key={logo.id} className="my-auto">
                            <Image src={logo.image} alt={logo.alt} className="object-cover" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logo;
