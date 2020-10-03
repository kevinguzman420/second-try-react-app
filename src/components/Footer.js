import React from 'react';

import './styles/Footer.css';

class Footer extends React.Component {
    render () {
        // return "PAPÁ SABE QUE YO NO SÉ QUIÉN ES, PERO PAPÁ SABE QUE YO SÉ QUE ÉL SI SABE";
        return (
            <div className="footer">
                <p>
                    <i className="far fa-copyright"></i>
                    2019 Example-page. All rights reserved.
                </p>
                <div>
                    <p>PRIVACY POLICY</p>
                    <p>TERMS AND CONDITIONS</p>
                </div>
            </div>
        );
    }
}

export default Footer;