"use client";
import React from "react";
import Button from "@/components/ui/button";

const Hero = () => {
    return (
        <section
            className="relative isolate overflow-x-hidden -mt-20 min-h-screen"
            style={{
                backgroundImage: "url('/rafting/r03.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                // backgroundAttachment: "fixed",
            }}
        >
            <div className="md:absolute w-full h-full z-[-9] bg-gradient-to-t from-black via-black/30 to-black/10"></div>
            <div className="md:hidden block absolute w-full h-full z-[-9] bg-gradient-to-t from-black/10 via-black/30 to-black"></div>

            <div
                className="max-w-full px-8 md:px-16 lg:px-24 mx-auto pb-10 pt-40 lg:pt-[20rem]"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <h1
                    className="mt-5 text-5xl max-w-3xl text-center md:text-left font-semibold text-white md:mt-0 lg:text-6xl"
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    Explore, Dream, Discover: Adventure Awaits!
                </h1>
                <p
                    className="mt-12 md:ml-auto max-w-4xl text-center md:text-right text-base text-gray-50 md:mt-6 md:font-light md:text-lg"
                    data-aos="fade-left"
                    data-aos-duration="500"
                >
                    Embark on unforgettable hiking, rafting, and kayaking adventures in
                    the stunning landscapes of Uttarakhand, surrounded by the majestic
                    beauty of the Himalayas, and along the pristine Ganges River, where
                    every bend brings new thrills and breathtaking views.
                </p>
                <div className="mt-10 flex md:ml-auto justify-center md:justify-end gap-x-6">
                    <Button text="Explore more" />
                    <a
                        href="/#packages"
                        className="leading-6 text-orange-500 font-semibold text-sm my-auto px-3 py-2 rounded-md"
                    >
                        Book next adventure <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
