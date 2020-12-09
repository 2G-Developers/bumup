import React from 'react'
import BabyReadyImage from '../../static/img/Baby-ready.svg';

const BabyReady = () => {
    return (
        <>
            <div className="offer-page__image" style={{marginTop: "2rem"}}>
                <img src={BabyReadyImage} alt="Baby Ready" style={{maxWidth: "450px", width: "100%", height: "450px"}} />
            </div>

            <div className="offer-page__content" style={{marginTop: "2rem"}}>
                <div className="offer-page__wrapper">
                    <div className="offer-page__header">
                        <h1>Baby-ready</h1>
                    </div>
                    <div className="offer-page__text offer-page__text-subheading">
                        <p>A pre-conception couple’s workshop for parents-to-be designed to help you with everything you need to know to plan well for a safe and happy pregnancy.</p>
                    </div>
                    <div className="offer-page__text">
                        <p>So you are talking about planning for a baby, that’s a huge step! Now, other than tossing your birth control, what do you have to do? How do you know when you are ovulating? Can you go on that trip you’ve been planning? What about spa and salon sessions, are they out of bounds? Will you miss your usual glass of wine over the weekend? Is the weighing scale showing a ‘baby-friendly’ number? Is there really a right ‘position’? Does the dad-to-be have things to watch out for?</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Plenty of questions, right? In this couple’s workshop we'll be discussing all this and more*!</p>
                    </div>
                    <div className="offer-page__text">
                        <p>*everything non-clinical, of course.</p>
                    </div>
                    <div className="offer-page__text">
                        <a href="index" className="offer-page__button">Enquire now</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BabyReady
