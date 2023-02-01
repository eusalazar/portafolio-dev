import React from 'react';
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';


export default function Contacto() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zbw6rjn', 'template_bu0hsqm', e.target, 'GZbzxVmnYb426K8-V')
        .then(response => console.log(response))
        .catch(error => console.log(error))
        e.target.reset();
    }

    return (
        <div className='page'>
            <h1 className='heading'>
                <FormattedMessage id= "app.contacto.h1"/>
            </h1>
            <form className='contact' onSubmit={sendEmail} id='aaa'>
                <input type='text' name="from_name" placeholder='first name'/>
                <input type='text' name='user_name' placeholder='surname'/>
                <input type='text' name='user_email' placeholder='email'/>
                <textarea name='user_message' placeholder='inquiry'/>
                <input className='inpt' type='submit' value='Send'/>
            </form>
        </div>
    )
}
