"use client";
import React from "react";
import Button from "@/components/ui/button";

const Hero = () => {
    return (
        <section
            className="relative isolate overflow-x-hidden -mt-20 min-h-full lg:min-h-screen transition-all ease-in duration-1000"
            style={{
                backgroundImage: "url('/rafting/m00.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                // backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute w-full h-full z-[-9] bg-gradient-to-t from-black via-black/10 to-black/50"></div>

            <div
                className="max-w-full px-8 md:px-16 lg:px-24 mx-auto pb-10 pt-56 lg:pt-[20rem]"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <h1
                    className="mt-5 text-5xl max-w-3xl text-center ml-auto md:text-right font-semibold text-white md:mt-0 lg:text-6xl"
                >
                    Dream, Explore: Adventure Awaits!
                </h1>
                <p
                    className="mt-12 md:ml-auto max-w-4xl text-center md:text-right text-base text-gray-50 md:mt-6 md:font-light md:text-lg"
                >
                    Embark on unforgettable hiking, rafting, and kayaking adventures in
                    the stunning landscapes of Uttarakhand, surrounded by the majestic
                    beauty of the Himalayas, and along the pristine Ganges River, where
                    every bend brings new thrills and breathtaking views.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row md:ml-auto justify-center md:justify-end gap-x-6">
                    <Button text="Explore more" url="/explore" />
                    <a
                        href="/#packages"
                        className="leading-6 mx-auto sm:mx-0 mt-3 sm:mt-0 text-orange-500 font-semibold text-sm my-auto px-3 py-2 rounded-md"
                    >
                        Book next adventure <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
