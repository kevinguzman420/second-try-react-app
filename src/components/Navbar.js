import React, { Fragment } from 'react';

import './styles/Navbar.css';


class Navbar extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <Fragment>
                {this.props.header 
                    ?
                        <nav className="navbar">
                            <div className="navbar-logo">
                                <i className="fab fa-docker"></i>
                            </div>
                            <div className="navbar-links">
                                <ul className="navbar-links-page">
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">COURSES</a></li>
                                    <li><a href="#">GEAR SHOP</a></li>
                                    <li><a href="#">CONTACTS</a></li>
                                </ul>
                                <ul className="navbar-links-account">
                                    <li><a id="link__sign-up" href="#">SIGN UP</a></li>
                                    <li><a id="link__create-account" href="#">CREATE ACCOUNT</a></li>
                                </ul>
                            </div>
                        </nav>

                    :
                        <nav className="navbar second">
                            <ul className="navbar-links-page">
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">COURSES</a></li>
                                <li><a href="#">GEAR SHOP</a></li>
                                <li><a href="#">CONTACTS</a></li>
                            </ul>
                            <ul className="navbar-links-account">
                                <li><a href="#">FACEBOOK</a></li>
                                <li><a href="#">TWITTER</a></li>
                                <li><a id="last-link" href="#">INSTAGRAM</a></li>
                            </ul>
                        </nav>
                }
            </Fragment>
        )
    }
}

export default Navbar;