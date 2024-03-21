"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import R1 from '@/public/kayak/k00.jpg'
import R2 from '@/public/kayak/k01.jpg'
import R3 from '@/public/kayak/k03.jpg'
import R4 from '@/public/kayak/k04.jpg'
import R5 from '@/public/kayak/k05.jpg'
import R6 from '@/public/kayak/k07.jpg'
import R7 from '@/public/kayak/k08.jpg'

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
    {
        image: R7,
    }
]

const Kayak= () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
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
                            claasName="h-[17rem] md:h-[25rem] rounded-2xl object-cover"
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
                            className="h-32 md:h-40 w-full rounded-lg object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Kayak;