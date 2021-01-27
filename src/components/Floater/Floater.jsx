import React from 'react'
import {ReactComponent as Whatsapp} from '../../static/img/whatsapp.svg'
import {ReactComponent as Call} from '../../static/img/phone-call.svg'

const Floater = () => {
    return (
        <section id="floater" className="floater">
            <ul className="floater__list">
                <li className="floater__item"><a href="https://api.whatsapp.com/send?phone=918248749487" aria-label="Whatsapp" className="floater__link"><Whatsapp width="42px" /></a></li>
                <li className="floater__item"><a href="tel:+918248749487" aria-label="Call" className="floater__link"><Call width="42px" height="42px" fill="#fff" strokeWidth="12" /></a></li>
            </ul>
        </section>
    )
}

export default Floater
