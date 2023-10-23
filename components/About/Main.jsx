import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Support from './Support'
import Services from './Services'
import Footer from '../Footer'

const Main = () => {
    return (
        <main className='font-sf'>
            <Navbar />
            <Hero />
            <Support />
            <Services />
            <Footer />
        </main>
    )
}

export default Main