import React, {Component} from 'react';
import '../css/slider.css'
class Slider extends Component {
    render() {
        return (
            <div>
                
                <section className="jumbotron" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">

                                <div className="main-photo" id="header-photo">
                                    <img
                                        className="round-photo"
                                        src={require("../images/icon.png")}
                                        alt="Main Logo"
                                        height="350px"/>
                                </div>
                                <h1 id="output">O
                                    <span
                                        style={{
                                        "font-size": ".7em"
                                    }}>
                                        utput</span>
                                    D
                                    <span
                                        style={{
                                        "font-size": ".7em"
                                    }}>
                                        elivered
                                    </span>
                                </h1>
                                <p id="contact-us-btn">
                                    <a className="btn btn-outline-white btn-big" href="#contact">Contact Us</a>

                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }

}

export default Slider;