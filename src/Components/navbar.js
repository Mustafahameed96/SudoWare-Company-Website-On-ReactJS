import React, {Component} from 'react';
//import {BrowserRouter, NavLink} from 'react-router-dom';

class Navbar extends Component {

    render() {

        return (

            <div>
                <div className="navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button  type="button"
                                 className="navbar-toggle"
                                 data-toggle="collapse"
                                data-target=".navbar-collapse"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" id="logo" href="#home">
                                <img alt="Logo" src={require("../images/logo.png")}/>
                            </a>
                        </div>
                        <nav id="my-nav" className="navbar-collapse collapse"  role="navigation"
                        >
                            <ul className="nav navbar-nav navbar-right" id="mynav">
                                <li>
                                    <a  href="#header"
                                    >Home</a>
                                </li>
                                <li>
                                    <a href="#about"
                                    >About Us</a>
                                </li>
                                <li>
                                    <a href="#services"
                                    >Services</a>
                                </li>
                                <li>
                                    <a href="#contact"
                                    >Contact</a>
                                </li>
                                <li>
                                    <a href="portfolio.html"
                                    >Portfolio</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Navbar;