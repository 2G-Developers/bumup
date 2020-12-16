import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About/About'


import HomeBanner from './../static/img/bumphome.jpg'
import HomeMobile from './../static/img/bumphome.jpg'
// import Founder from '../components/Founder/Founder'
// import Mantra from '../components/Mantra/Mantra'
// import OfferSecondary from '../components/Offer/OfferSecondary'
import Navbar from '../components/Navbar/Navbar';

function Home() {
  return (
    <div className="App">
            <Navbar class4="navbar-list-active"/>
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} />
            <About />

    </div>
  );
}

export default Home;
