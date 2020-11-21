import React from 'react'
import Carousel from './../components/Carousel/Carousel'
import Offer from './../components/Offer/offer'


import HomeBanner from './../static/img/Home-Banner.png'
import HomeMobile from './../static/img/Mobile-Banner.png'

function Home() {
  return (
    <div className="App">
            <Carousel images={HomeBanner} altText="Hero" 
                imagesMobile={HomeMobile} heading="Strong,happy mummas" subheading="At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help 
                mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to 
                make the best of their bump(y) times. " />
            <Offer />
    </div>
  );
}

export default Home;
