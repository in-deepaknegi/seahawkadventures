"use client"
import React from "react";

import C1 from '@/public/kayak/kk.svg'
import Image from "next/image";

import S1 from '@/public/svg/s00.svg';
import S2 from '@/public/svg/sandtimer.svg';
import S3 from '@/public/svg/clock.svg';
import S4 from '@/public/svg/group.svg'
import S5 from '@/public/svg/age.svg'
import S6 from '@/public/svg/life.svg'



const Hero = () => {


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
                                26 Km Rafting in Rishikesh
                            </h3>
                            <p className="mt-3 text-gray-300 md:block hidden text-base">
                                Please don&apos;t hesitate to get in touch with us for any type of information or problem that you may have. We are here to help and provide assistance in any way we can.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="relative isolate mx-auto -mt-28 pb-16 rounded-2xl bg-gray-100/40 px-4 md:px-10 pt-24">
                    <div className="mx-auto mt-16 font-sans max-w-4xl text-lg flex flex-col space-y-7 text-left">
                        
                        {/* Image gallery */}
                        {/* <div className="w-full h-full px-20">
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
                                            className="h-[25rem] rounded-2xl object-cover"
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
                                            className="h-40 w-full rounded-lg object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div> */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;