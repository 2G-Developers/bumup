import React, {Suspense} from 'react'
import Carousel from './../components/Carousel/Carousel'

// import Founder from '../components/Founder/Founder'
import Skeleton from 'react-loading-skeleton';
import Mantra from '../components/Mantra/Mantra'
import OfferSecondary from '../components/Offer/OfferSecondary'
import NavbarMobile from '../components/Navbar/NavbarMobile'
import {Helmet} from 'react-helmet'

const Founder = React.lazy(() => import(
  /* 
  webpackChunkName: "founder-chunk",
  webpackPrefetch: true
 */ '../components/Founder/Founder'
  )
);

function Home() {
  return (
    <div className="App">
            <Helmet>
              <title>Bumpup | Home</title>
              <meta name="title" content="Bumpup | Home" />

              <meta property="og:title" content="Bumpup | Home" />

              <meta property="twitter:title" content="Bumpup | Home" />
            </Helmet>
            <NavbarMobile />
            <Carousel images="https://res.cloudinary.com/gopal1996/image/upload/v1611745202/Bumpup/Home-Banner_uceivk.webp" altText="Hero" 
                imagesMobile="https://res.cloudinary.com/gopal1996/image/upload/v1611745355/Bumpup/Mobile-Banner_d8o5sh.webp" />
            <OfferSecondary />

            <Mantra />
            <Suspense fallback={<Skeleton count={10} />}>
              <Founder />
            </Suspense>
    </div>
  );
}

export default Home;
