"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Newsletter from '@/components/Newsletter';
import Hiw from '@/components/(pages)/home/Hiw';
import Blog from '@/components/(pages)/home/Blog';
import Gallery from '@/components/(pages)/home/Gallery';
import Rafting from '@/components/(pages)/home/Rafting';
import Kayaking from '@/components/(pages)/home/Kayaking';
import Icons from '@/components/Icons';
import Logo from '@/components/Logo';

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
        <Logo />
        <Rafting />
        <Kayaking />
        <Gallery />
        {/* <Hiw /> */}
        {/* <Blog /> */}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
