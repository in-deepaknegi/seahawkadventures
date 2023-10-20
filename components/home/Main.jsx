import React from 'react'
import Navbar from '../Navbar'
import Slider from './Slider'
import Hero from './Hero'
import Aboutus from './About'
import Gallery from './Gallery'
import Blogs from './Blogs'
import Footer from '../Footer'

const Main = () => {
  return (
    <main>
        <Navbar />
        {/* <Slider /> */}
        <Hero />
        <Aboutus />
        <Gallery />
        <Blogs />
        <Footer />
    </main>
  )
}

export default Main