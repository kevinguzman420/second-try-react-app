import React from 'react';

import './styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <p className="contact_title">NEWSLETTER</p>
            <p className="contact_description">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="">
                <input 
                    type="text"
                    placeholder="Enter a email"
                />
            </form>
        </div>
    );
}

export default Contact;