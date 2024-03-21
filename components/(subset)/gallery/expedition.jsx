"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import R1 from '@/public/expedition/mu00.jpg'
import R2 from '@/public/expedition/mu01.jpg'
import R3 from '@/public/expedition/m02.jpg'
import R4 from '@/public/expedition/m03.jpg'
import R5 from '@/public/expedition/m04.jpg'
import R6 from '@/public/expedition/m05.jpg'

const gallery = [
    {
        image: R1,
    },
    {
        image: R2,
    },
    {
        image: R3,
    },
    {
        image: R4,
    },
    {
        image: R5,
    },
    {
        image: R6,
    },
]

const Kayak = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <section className="w-full relative h-full z-50 rounded-2xl">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {gallery.map((sub, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={sub.image}
                                alt="sub"
                                className="h-[17rem] md:h-[23rem] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="mt-5">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {gallery.map((sub, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                src={sub.image}
                                alt="sub"
                                className="h-32 md:h-40 w-full rounded-lg object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Kayak;