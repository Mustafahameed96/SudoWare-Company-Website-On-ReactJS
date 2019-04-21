import React, {Component} from 'react';

class AboutUs extends Component {

    render() {

        return (
            <div>

                <section id="about" className="cbp-so-section cbp-so-init">
                    <h1>Meet Us</h1>
                    <section id="hexagons">
                        <div
                            className="container"
                            style={{
                            marginbottom: "15px"
                        }}>
                            <div className="row">
                                <ul id="hexGrid">
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-1">
                                                <img src='assets/mursal-sm.jpg' alt='mursal'/>
                                                <p>Mursal Khan</p>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-2">
                                                <img src="assets/asad-sm.jpg" alt='asad'/>
                                                <p>Asad Kamran</p>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-3">
                                                <img src="assets/saif-sm.jpg" alt="sAIF"/>
                                                <p>Malik Saifullah</p>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-5">
                                                <img src="assets/kashif-sm.jpg" alt="kASHIF"/>
                                                <p>Kashif Jawed</p>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-6">
                                                <img src="assets/sohail-sm.jpg" alt="sohail"/>
                                                <p>Sohail Memon</p>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink">
                                                <img src="img/Icon4.png" alt="Sudoware"/>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="hex">
                                        <div className="hexIn">
                                            <label className="hexLink" for="modal-4">
                                                <img src="assets/shah-sm.jpg" alt="Shahvaiz"/>
                                                <p>Shahvaiz Ahmed</p>
                                            </label>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </section>

                    <input className="team-state" id="modal-1" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-1"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-1"></label>
                            <h2>Mursal Khan</h2>
                            <p><img src="assets/mursal-lm.jpg" alt="Mursal"/>
                                <strong>
                                    <i>Need something coded? Ask him. Besides having eye and appetite for coding, he
                                        likes to spend his time exploring new technologies, Currently working on
                                        Node.js, React and Android Application Development.
                                        <br/><br/></i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/mursal.khan47">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/mursal-khan-28a7b0100/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="team-state" id="modal-2" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-2"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-2"></label>
                            <h2>Asad Kamran</h2>
                            <p><img src="assets/asad-lm.jpg" alt="Asad Kamran"/>
                                <strong>
                                    <i>I love to solve all sorts of problems regardless of its type to increase my
                                        knowledge and experience. When it comes down to making iOS/Android applications
                                        and doing back-end development, one can count me in.</i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/asad.k477">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/asad-kamran-116422a2/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="team-state" id="modal-3" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-3"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-3"></label>
                            <h2>Saifullah Malik</h2>
                            <p><img src="assets/saif-lm.jpg" alt="Saifullah"/>
                                <strong>
                                    <i>Need an Android application built? Consult him. Besides being work
                                        enthusiast, Saif likes to explore the new world of Artificial Intelligence (Deep
                                        Learning).<br/>Productive,
                                        Reliable and Focused are the words best suited for him and his work define these
                                        words in more detail.</i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/malikevilx?ref=br_rs">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/saifullah-malik-31438299">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="team-state" id="modal-4" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-4"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-4"></label>
                            <h2>Shahvaiz Ahmed</h2>
                            <p><img src="assets/shah-lm.jpg" alt="Shahvaiz Ahmed"/>
                                <strong>
                                    <i>A person who can get the job done. Regardless of its difficulty level.
                                        Currently working on Web development and exploring other new technologies.
                                        <br/>
                                        Shahvaiz believes that with persistence anything can be achieved. Quick,
                                        hardworking and self-motivated.</i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/shahvaizahmed.29?fref=ts">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/shahvaiz-ahmed-81a513125/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="team-state" id="modal-5" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-5"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-5"></label>
                            <h2>Kashif Jawed</h2>
                            <p><img src="assets/kashif-lm.jpg" alt="Kashif"/>
                                <strong>
                                    <i>A good learner and love to accept challenges. Working on Android
                                        Applications. Recently, in a relationship with python.</i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/kashif.jawed.399?ref=br_rs">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/kashif-jawed-868a0358/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="team-state" id="modal-6" type="checkbox"/>
                    <div className="team">
                        <label className="modal__bg" for="modal-6"></label>
                        <div className="modal__inner">
                            <label className="modal__close" for="modal-6"></label>
                            <h2>Sohail Memon</h2>
                            <p><img src="assets/sohail-lm.jpg" alt/>
                                <strong>
                                    <i>PHP Guru, All rounder. Ask him anything. He's there to back you up.
                                        Passionate programmer. Angular, Wordpress,python on fingertips.</i>
                                </strong>
                            </p>
                            <div className="row social-icons">
                                <div
                                    className="col-lg-2 col-md-2 col-sm-2 col-xs-6 col-lg-offset-3 col-md-offset-2 col-sm-offset-1">
                                    <a
                                        className="icon-social icon-facebook"
                                        target="_blank"
                                        href="https://www.facebook.com/M.Sohail.Rauf?ref=br_rs">Facebook</a>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                    <a
                                        className="icon-social icon-linkedin"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/sohail-memon-ab93a39a/">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="container cbp-so-section.cbp-so-animate  cbp-so-side-top ">
                        <p id="about-para">What questions do you ask a developer/designer? Timeliness?
                            Amount of bugs? Unique features? A “wow” worthy design? We give them all.
                            Customized and right-sized. That’s right, we do not just develop and design; we
                            make and craft.</p>
                        <div className="row social-icons">
                            <div className="col-sm-1 col-sm-offset-4">
                                <a
                                    className="icon-social icon-facebook"
                                    target="_blank"
                                    href="https://www.facebook.com/sudowarepk">Facebook</a>
                            </div>
                            <div className="col-sm-1">
                                <a className="icon-social icon-contact" href="#contact">Contact</a>
                            </div>
                            <div className="col-sm-1">
                                <a
                                    className="icon-social icon-skype"
                                    target="_blank"
                                    href="skype:live:contactsudoware?call">"Skype</a>
                            </div>
                            <div className="col-sm-1">
                                <a
                                    className="icon-social icon-linkedin"
                                    target="_blank"
                                    href="https://www.linkedin.com/company-beta/13335757/">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default AboutUs;