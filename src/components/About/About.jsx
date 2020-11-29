import React from 'react'
import {ReactComponent as Bumpup} from '../../static/img/Bump.svg'

function About(){
    return(
        <section id="about" className="about">
            
            <div className="container">
                <div className="row">
                    <h1 className="about__header">Why Bump up?</h1>

                    <div className="about__text">
                        <p>
                            Pregnancy is an absolutely wonderful adventure for a couple looking to create a family. Just imagine, nurturing a life inside you that starts off as one tiny cell and grows into a whole little human in 9 months!  As parents, you are going to be nurturing, caring and welcoming a new person into your lives, who will soon become the centre of your world.
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            Amazing, right?
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            Remember, we called this an adventure and the reason we did, is because most couples, once they are past the initial "big announcement" euphoria, find themselves in unfamiliar territory. As beautiful as this phase of life is, it does come with its share of anxieties which, believe me, is totally normal.
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            As parents, we want nothing more than the best for our little ones!
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            There will be those times when you and your partner could feel overwhelmed and unsure of what is best for you and your baby. You will come across tons of information out there-- on the internet, well-meaning elders in the family, friends who have just had babies and those who just enjoy giving advice. Not to forget, the unrealistic expectations movies have set for us—fancy yes, but how is it really going to be? Is there a formula to a smooth pregnancy? How do I ensure the wellness of my baby and me, without getting swept up in that vortex of too-much-information?
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            At Bump Up, we understand just how important it is to focus on your well-being while navigating the changes in your body and environment. We are here to help put all those myths and doubts--valid or crazy ones--to rest.
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            Our mantra--strong, happy mummas (and daddies) = strong, happy babies.
                        </p>
                    </div>

                    <div className="about__text">
                        <p>
                            So come along, and let's help you prepare for this exciting journey ahead!
                        </p>
                    </div>
                </div>
            </div>

            <Bumpup className="about__img" />

        </section>
    )
}
export default About;