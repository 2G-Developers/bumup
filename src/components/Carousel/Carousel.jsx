import React from 'react'

function Carousel({images, imagesMobile, altText}) {
    return (
        <header id="hero" className="hero">
            <div className="hero__img">
                <img src={images} className="img-fluid desktop-carousel" alt={altText} />
                <img src={imagesMobile} className="img-fluid mobile-carousel" alt={altText} />
                <div className="hero__caption">
                    <h3 className="hero__header mobile">Strong, <br />happy mummas</h3>
                    <h3 className="hero__header desktop">Strong, happy mummas</h3>
                    
                    <div className="hero__content desktop">
                        <p>At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help</p>
                        <p>mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to </p>
                        <p>make the best of their bump(y) times.</p>
                    </div>

                    <div className="hero__content mobile">
                        <p>At Bump up, we believe that every pregnancy should be a happy pregnancy! We offer programs to help
                        mummas (and daddies) simply enjoy their experience of pregnancy and stay healthy, fit and sorted to
                        make the best of their bump(y) times.</p>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Carousel
