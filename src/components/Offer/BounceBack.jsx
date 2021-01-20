import React from 'react'
import BounceBackImage from '../../static/img/BounceBack.svg';
// import { Link } from 'react-router-dom';

const BounceBack = () => {
    return (
        <>
            <div className="offer-page__image" style={{marginTop: "2rem"}}>
                <img src={BounceBackImage} alt="Baby Ready" style={{maxWidth: "450px", width: "100%", height: "450px"}} />
            </div>

            <div className="offer-page__content" style={{marginTop: "2rem"}}>
                <div className="offer-page__wrapper">
                    <div className="offer-page__header">
                        <h1>Bounce back</h1>
                    </div>
                    <div className="offer-page__text offer-page__text-subheading">
                        <p>A postnatal fitness program focused on nutrition planning and workout routines customised to suit your body and schedule</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Eager to rock that pre-baby body soon? Getting back to your workouts or even giving yourself some me-time will be a far fetched thought with all the feeding, burping, erratic sleep patterns and diaper runs.</p>
                    </div>
                    <div className="offer-page__text">
                        <p>Our ‘Bounce back’ program gives you all the flexibility you will need as a new mumma! Unable to get any baby-free time that particular day? No problem, we’ll give you options to workout with your little one! You will also have regular check-ins to track your progress and together, we’ll get you feeling your old, pre-baby self soon!</p>
                    </div>
                    <div className="offer-page__text">
                        <a href="/contact" className="offer-page__button">Enquire now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BounceBack
