import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About/About'


import HomeBanner from './../static/img/bumphome.jpg'
import HomeMobile from './../static/img/bumpupMobile.jpg'

// import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile'

function Home() {
  return (
    <div className="App">
            {/* <Navbar class4="navbar-list-active" isSecondary={false} /> */}
            <NavbarMobile isSecondary={false} />
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} />
            <About />

    </div>
  );
}

export default Home;
