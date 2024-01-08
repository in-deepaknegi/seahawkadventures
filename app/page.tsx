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
      <Navbar />
      <Hero />
      <Feature />
      <Hiw />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  )
}
