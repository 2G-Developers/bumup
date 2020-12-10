import React from 'react'
import Carousel from './../components/Carousel/Carousel'
import About from './../components/About/About'


import HomeBanner from './../static/img/Home-Banner.png'
import HomeMobile from './../static/img/Mobile-Banner.png'
import Founder from '../components/Founder/Founder'
import Mantra from '../components/Mantra/Mantra'
import OfferSecondary from '../components/Offer/OfferSecondary'
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div className="App">
            <Navbar class1="navbar-list-active"/>
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} />
            <OfferSecondary />
            <About />
            <Mantra />
            <Founder />
    </div>
  );
}

export default Home;
