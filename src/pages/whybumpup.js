import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About/About'
import {Helmet} from "react-helmet";

import NavbarMobile from '../components/Navbar/NavbarMobile'

function Home() {
  return (
    <div className="App">
            <Helmet>
              <title>Bumpup | Why bumpup</title>
              <meta name="title" content="Bumpup | Why bumpup" />

              <meta property="og:title" content="Bumpup | Why bumpup" />

              <meta property="twitter:title" content="Bumpup | Why bumpup" />
            </Helmet>
            <NavbarMobile isSecondary={false} />
            <Carousel images="https://res.cloudinary.com/gopal1996/image/upload/v1611749493/Bumpup/Why-Bump-up-Banner_cskrvj.webp" altText="Hero" 
                imagesMobile="https://res.cloudinary.com/gopal1996/image/upload/v1611749408/Bumpup/Mobile-Banner-3_umdqum.webp" />
            <About />

    </div>
  );
}

export default Home;
