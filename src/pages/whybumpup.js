import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About/About'

// import Navbar from '../components/Navbar/Navbar';
import NavbarMobile from '../components/Navbar/NavbarMobile'

function Home() {
  return (
    <div className="App">
            {/* <Navbar class4="navbar-list-active" isSecondary={false} /> */}
            <NavbarMobile isSecondary={false} />
            <Carousel images="https://res.cloudinary.com/gopal1996/image/upload/v1611749493/Bumpup/Why-Bump-up-Banner_cskrvj.webp" altText="Hero" 
                imagesMobile="https://res.cloudinary.com/gopal1996/image/upload/v1611749408/Bumpup/Mobile-Banner-3_umdqum.webp" />
            <About />

    </div>
  );
}

export default Home;
