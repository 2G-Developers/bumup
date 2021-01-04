import React from 'react'
import EverythingLaborImage from '../../static/img/EverythingLabor.svg';
// import { Link } from 'react-router-dom';

const EverythingLabor = () => {
    return (
        <>
            <div className="offer-page__image" style={{marginTop: "2rem"}}>
                <img src={EverythingLaborImage} alt="Baby Ready" style={{maxWidth: "450px", width: "100%", height: "450px"}} />
            </div>

            <div className="offer-page__content" style={{marginTop: "2rem"}}>
                <div className="offer-page__wrapper">
                    <div className="offer-page__header">
                        <h1>Everything-labor</h1>
                    </div>
                    <div className="offer-page__text offer-page__text-subheading">
                        <p>A carefully curated birth-preparedness workshop that will get you feeling confident and empowered to take on labor, and ace it!</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Labor can be happy! There, we said it. We are conditioned to believe that labor is the most painful and difficult time in a woman’s life. Yes, it comes with it’s fair share of discomforts. But it is also possible for you to have a smooth, calm and peaceful labor.</p>
                    </div>
                    <div className="offer-page__text">
                        <p>In this workshop, we’ll get you and your partner all prepped for the big day! You might be looking for answers to many things like, what goes in a hospital bag? What are the signs you should look out for in the days before labor? When should you go to the hospital —what if you are too late or too early? How do you identify real labor from false labor? Timing contractions — how do you do that? How can your partner help you get more comfortable? What is labor breathing? What are the different stages in labor — what can you expect at each stage?</p>
                    </div>
                    <div className="offer-page__text">
                        <p>‘Everything labor’ will take you through all these steps to ensure you and your partner are equipped with handy information and tips for the big day.</p>
                    </div>
                    <div className="offer-page__text">
                        <a href="/contact" className="offer-page__button">Enquire now</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EverythingLabor
