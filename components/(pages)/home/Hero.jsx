"use client";
import React from "react";

const Hero = () => {
    return (
        <section
            className="relative isolate overflow-x-hidden -mt-20"
            style={{
                backgroundImage: "url('/kayak1.WEBP')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                // backgroundAttachment: 'fixed',
            }}
        >
            <div className="md:absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 via-black/10 to-black/90"></div>
            <div className="md:hidden block absolute w-full h-full z-[-9] bg-gradient-to-b from-black/10 via-black/30 to-black/80"></div>

            <div
                className="mx-auto max-w-5xl text-center px-6 py-52 lg:py-40 lg:px-0"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white bg-black/60 ring-1 ring-gray-200 hover:ring-gray-900/20">
                        Explore our upcoming adventures.
                        <a href="/explore" className="text-sky-500">
                            <span className="absolute inset-0" aria-hidden="true">
                                {" "}
                            </span>
                            &nbsp;Read more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
                <h1
                    className="mt-5 font-semibold text-white text-5xl md:mt-0 lg:text-6xl"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    Explore, Dream, Discover: Adventure Awaits!
                </h1>
                <p
                    className="mt-12 text-base text-gray-50 md:mt-6 md:font-light md:text-lg"
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    Embark on unforgettable hiking, rafting, and kayaking adventures in
                    the stunning landscapes of Uttarakhand, surrounded by the majestic
                    beauty of the Himalayas, and along the pristine Ganges River, where
                    every bend brings new thrills and breathtaking views.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/explore"
                        className="rounded-md bg-orange-500 font-semibold px-3.5 tracking-wide py-2.5 text-sm text-white shadow-sm hover:bg-orange-600"
                    >
                        Explore more
                    </a>
                    <a
                        href="/#packages"
                        className="leading-6 text-orange-500 font-semibold text-sm my-auto"
                    >
                        Book next adventure <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
