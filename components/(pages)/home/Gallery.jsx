import React from "react";
import Image from "next/image";
import Image1 from "@/public/rafting/m00.jpg";
import Image2 from "@/public/rafting/r00.png";
import Image3 from "@/public/rafting/r01.jpg";
import Image4 from "@/public/rafting/r02.jpg";
import Image5 from "@/public/rafting/r03.jpg";
import Image6 from "@/public/rafting/r04.jpg";
import Image7 from "@/public/rafting/r05.jpg";
import Image8 from "@/public/rafting/r06.jpg";
import Image9 from "@/public/rafting/r07.jpg";
import Image10 from "@/public/rafting/r08.jpg";
import Image11 from "@/public/rafting/r09.jpg";
import Image12 from "@/public/rafting/r10.jpg";
import Image13 from "@/public/rafting/r11.jpg";
import Image14 from "@/public/rafting/r13.jpg";

const Gallery = () => {
    return (
        <section id="gallery" className="relative isolate py-8 lg:py-16">
            <div className="max-w-7xl min-h-screen  mx-auto px-8">
                <div className="flex mb-10 flex-col justify-between gap-y-5 py-4 md:gap-x-10 lg:flex-row">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
                        Image Gallery
                    </h2>
                    <p className="my-auto max-w-xl text-base leading-8 text-gray-900 md:text-lg">
                        Explore our beautiful collection of photos featuring rafting and
                        kayaking in Rishikesh.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <div className="flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image1}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image3}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image4}
                            loading="eager"
                        />
                    </div>

                    <div className="hidden sm:flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[60%] object-cover object-center w-full rounded-xl"
                            src={Image6}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-lg"
                            src={Image7}
                            loading="eager"
                        />
                    </div>

                    <div className="flex h-screen flex-col gap-y-4 sm:mt-0 mt-8">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image8}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image13}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[25%] object-cover object-center w-full rounded-lg"
                            src={Image11}
                            loading="eager"
                        />
                    </div>

                    <div className="hidden sm:flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-xl"
                            src={Image12}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[60%] object-cover object-center w-full rounded-lg"
                            src={Image10}
                            loading="eager"
                        />
                    </div>
                    <div className="flex h-screen flex-col gap-y-4">
                        <Image
                            alt="Gallery Image"
                            className="h-[50%] object-cover object-center w-full rounded-xl"
                            src={Image9}
                            loading="eager"
                        />
                        <Image
                            alt="Gallery Image"
                            className="h-[40%] object-cover object-center w-full rounded-lg"
                            src={Image14}
                            loading="eager"
                        />
                        <a href="/gallery" className="text-black hover:text-sky-700 font-semibold">
                            Show more ...
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
