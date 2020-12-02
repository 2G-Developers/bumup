import React from 'react'
import Carousel from './../components/Carousel/Carousel'
import Offer from './../components/Offer/offer'
import About from './../components/About/About'


import HomeBanner from './../static/img/Home-Banner.png'
import HomeMobile from './../static/img/Mobile-Banner.png'
import Founder from '../components/Founder/Founder'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Mantra from '../components/Mantra/Mantra'
import Navbar from '../components/Navbar/Navbar'
import Floater from '../components/Floater/Floater'

function Home() {
  return (
    <div className="App" style={{overflowX: "hidden"}}>
            <Navbar />
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} />
            <Offer />
            <About />
            <Mantra />
            <Founder />
            <Contact />
            <Footer />
            <Floater />
    </div>
  );
}

export default Home;
