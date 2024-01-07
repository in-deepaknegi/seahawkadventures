import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import Newsletter from '@/components/Newsletter';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Newsletter />
      <Footer />
    </>
  )
}
