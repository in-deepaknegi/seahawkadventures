"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Feature from '@/components/(pages)/home/Feature';
import Newsletter from '@/components/Newsletter';
import Hiw from '@/components/(pages)/home/Hiw';
import Blog from '@/components/(pages)/home/Blog';
import Gallery from '@/components/(pages)/home/Gallery';
import Pricing from '@/components/(pages)/home/Pricing';
import Icons from '@/components/Icons';

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.seahawkadventures.com/" />
        <meta itemProp="name" content="Sea Hawk Adventures" />
      </div>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Icons />
        <Hero />
        <Pricing />
        <Gallery />
        <Feature />
        {/* <Hiw /> */}
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
