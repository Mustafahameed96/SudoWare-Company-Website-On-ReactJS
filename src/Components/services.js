import React, {Component} from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <section
                    id="services"
                    className="cbp-so-section cbp-so-init anim-vertical expand-vertical cbp-so-animate">
                    <div className="container cbp-so-side cbp-so-side-top">
                        <h1>Our Services</h1>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <p>Sudoware is a professional IT-related company in Pakistan. Like our slogan,
                                    &#34;Output Delivered&#34;, we ensure to provide optimal solutions without
                                    compromising on the quality. Covering numerous areas such as Web Applications,
                                    Mobile Applications, Desktop Application, Machine Learning, Data Sciences and
                                    Graphic Designing. With so much to offer, we invite you to look through as there
                                    is nothing but quality on show and on promise from Sudoware.</p>
                            </div>
                            <div className="col-md-4 service-column">
                                <figure className="service-icon">
                                    <i className="fa fa-mobile-phone"></i>
                                </figure>
                                <h2>Mobile Apps</h2>
                                <p className="service-description">We at Sudoware build innovative applications
                                    for start-ups and enterprises alike. We provide with highly polished native
                                    applications for Android and Cross-platform applications for Android, iOS and
                                    Windows. We also deal with hybrid applications. We are highly encouraged to work
                                    from Client's scope elaboration to their approval to provide them with the best
                                    there exists.</p>
                            </div>
                            <div className="col-md-4 service-column">
                                <figure className="service-icon">
                                    <i className="fa fa-desktop"></i>
                                </figure>
                                <h2>UI / UX</h2>
                                <p className="service-description">We are a team of young and innovative
                                    programmers who are always thinking out of the box to provide with beautiful and
                                    engaging designs. We believe that a great user experience and interface plays an
                                    important role in the success of any product. We go to an arm's length to
                                    provide with attractive and intuitive user interface design.</p>
                            </div>
                            <div className="col-md-4 service-column">
                                <figure className="service-icon">
                                    <i className="fa fa-code"></i>
                                </figure>
                                <h2>Web Development</h2>
                                <p className="service-description">We offer to create websites on PHP,
                                    WordPress, Magento, React, ASP.Net, Angular, Laravel and .NET MVC. These
                                    websites do not only amaze on the engaging designs but also conveys all parts of
                                    functionality with the most smooth of structures.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }

}

export default Services;