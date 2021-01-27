import React from 'react'
import photo from '../../static/img/Kavya.png'

const Founder = () => {
    return (
        <section id="founder" className="founder">
            <div className="container">
                <div className="row">
                    <div className="founder__img">
                        <div className="founder__picture">
                            <img src={photo} className="founder__tag" alt="author"/>
                        </div>
                    </div>
                    <div className="founder__content">
                        <p className="founder__text">Hey mummas, I am Kavya — mother to a toddler girl, super passionate about fitness, a
cannot-do-without-coffee person and someone who loves the brighter things of life.</p>

                        <p className="founder__text">My pregnancy and postpartum was an absolutely happy experience and I have always
owed that to fitness and the right lifestyle. I started Bump up with the sole purpose of
helping more mummas enjoy their pregnancy and make it a time in their life they look back
to with nothing but a smile!</p>

                        <p className="founder__text">
                        As a trained professional in Pregnancy Fitness, I would love to
be part of your pregnancy journey in assisting you with all the right information, motivating
you to stay active and eat healthy, answer all your questions and just make sure you have
a happy pregnancy!
                        </p>

                        <div className="founder__signature">
                            <p className="founder__text--signature">Kavya Natarajan</p>
                            <p className="founder__text" style={{marginBottom: "0", textAlign: "center"}}>Founder, Bump up</p>
                            <p className="founder__text" style={{marginBottom: "0", textAlign: "center"}}>Certified Pregnancy Fitness Educator (CAPPA)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Founder
