"use client"

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import Newsletter from '@/components/Newsletter';
import Hiw from '@/components/home/Hiw';
import Blog from '@/components/home/Blog';

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
      <main>
        <Hero />
        <Feature />
        <Hiw />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
