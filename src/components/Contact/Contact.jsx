import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import ArrowRightCircle from '../../static/img/send.svg'
import Phone from '../../static/img/Call_Icon.svg'
import Mail from '../../static/img/Mail_Icon.svg'
import Dropdown from '../Dropdown/Dropdown';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const [isMailSent, setMailSent] = useState(false);
    const [dropdownValue, setdropdownValue] = useState('')

    const toastStyle = {
        "marginTop": "1rem"
    }

    const onSubmit = (data, e) => {

        data.type = dropdownValue;

        var form_data = new FormData();

        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        var requestOptions = {
            method: 'POST',
            body: form_data,
            redirect: 'follow'
        };
        
        fetch("/registerBump.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            
            setMailSent(prevState => !prevState)

            fetch("/register.php", requestOptions)
            .then(response => response.text())
            .then(result => e.target.reset())
            .catch(error => console.log('error', error));  
        })
        .catch(error => console.log('error', error));
    
        setMailSent(prevState => !prevState)
    };

    return (
        <section id="enquiry" className="enquiry">
            <div className="container container-enquiry">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="enquiry__medium">
                        <div className="enquiry__wrapper">
                                <div className="enquiry__header">
                                    <h1 style={{fontSize: "3.75rem"}}>Get in touch</h1>
                                    <div className="enquiry__details">
                                        <a href="mailto:contact@bumpup.co"><img src={Mail} style={{width: "1.5rem", height: "1.5rem"}} alt="mail"/> contact@bumpup.co</a>
                                        <a href="tel:+918248749487"><img src={Phone} style={{width: "1.5rem", height: "1.5rem"}} alt="Phone"/> +91 82487 49487</a>
                                    </div>
                                </div>
                            <div className="enquiry__content">
                                <div className="enquiry__pane mt-4">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="enquiry__form">
                                            <input type="text" style={{borderColor: `${errors.fname ? 'red': ''}`}} className="enquiry__input" name="fname" placeholder="Name" ref={register({required: true, minLength: 2, pattern: /^[A-Za-z]+$/i})} />
                                            <input type="email" style={{borderColor: `${errors.email ? 'red': ''}`}} className="enquiry__input" name="email" placeholder="Email address" ref={register({required: true, minLength: 2})} />
                                            <input type="tel" style={{borderColor: `${errors.phone ? 'red': ''}`}} className="enquiry__input" name="phone" placeholder="Phone" ref={register({required: true, minLength: 2, pattern: /^[0-9+]+$/i})} />
                                            
                                            <Dropdown setdropdownValue={setdropdownValue} dropdownValue={dropdownValue} />
                                        </div>
                                        <div className="enquiry__button">
                                            <button type="submit" className="enquiry__button--text" >Send <img  className="enquiry__button--img" src={ArrowRightCircle} alt="Arrow right circle"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMailSent ? (
                <div class="alert alert-success" style={toastStyle} role="alert">
                    We will get in touch with you shortly.
                </div>
            ) : null}
        </section>
    )
}

export default Contact
