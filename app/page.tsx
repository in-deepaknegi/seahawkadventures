import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import Newsletter from '@/components/Newsletter';
import Hiw from '@/components/home/Hiw';
import Blog from '@/components/home/Blog';

export default function Home() {
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
