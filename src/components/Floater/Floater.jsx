import React from 'react'
import {ReactComponent as Whatsapp} from '../../static/img/whatsapp.svg'
import {ReactComponent as Mail} from '../../static/img/mail.svg'

const Floater = () => {
    return (
        <section id="floater" className="floater">
            <ul className="floater__list">
                <li className="floater__item"><a href="mailto:bumup@gmail.com" className="floater__link"><Whatsapp width={{width: "42px"}} /></a></li>
                <li className="floater__item"><a href="https://api.whatsapp.com/send?phone=917092353742" className="floater__link"><Mail width={{width: "42px"}} /></a></li>
            </ul>
        </section>
    )
}

export default Floater
