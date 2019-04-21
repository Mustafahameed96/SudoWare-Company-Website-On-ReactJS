import React , {Component} from 'react';

class ContactUs extends Component{

    render(){

        return(
            <div>
                 <section id="contact" className="cbp-so-section cbp-so-init cbp-so-animate">
        <div className="container cbp-so-side cbp-so-side-top">
            <h1>Contact Us</h1>
            <p>Like something? Quotations? Have questions? We are merely a call away.</p>
            <div className="row">
                <div className="col-sm-2 col-sm-offset-3">
                    <div className="icon"> <i className="fa fa-map-marker fa-2x"></i></div>
                    <p className="contact-meta">Caesor Tower, main Shahrah-e-Faisal.</p>
                </div>
                <div className="col-sm-2">
                    <div className="icon"> <i className="fa fa-envelope fa-2x"></i></div>
                    <p className="contact-meta">contact@sudoware.pk</p>
                </div>
                <div className="col-sm-2">
                    <div className="icon"> <i className="fa fa-phone fa-2x"></i></div>
                    <p className="contact-meta">+92-314-2045566</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form id="ajax-contact" method="post" action="http://sudoware.pk/connect.php">
                        <div className="form-group"> <input type="text" className="form-control input-lg" id="name" placeholder="Name" name="name" required="yes"/></div>
                        <div className="form-group"> <input type="email" className="form-control input-lg" id="email" placeholder="Email" name="email" required="yes"/></div>
                        <div className="form-group"><textarea className="form-control" rows="6" id="message" name="message" placeholder="Your Message" required="yes"></textarea></div>
                        <div className="form-group"> <button type="submit" className="btn green-back btn-big" id="contact-submit">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
            </div>
        )
    }
}

export default ContactUs;