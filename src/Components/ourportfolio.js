import React, {Component} from 'react';
import '../css/ourportfolio.css'
// var Image1 = require('../images/portfolioBack.png')

// var styleSection={
//     backgroundImage: "url('../images/pattern2.png')" ,  backgroundRepeat: "no-repeat", backgroundSize: "cover" , color:"white"
// }


class Portfolio extends Component {

    render() {
        return (

            <div >
                <section
                   
                    id="portfolio"
                    className="sectionStyle cbp-so-section cbp-so-init  cbp-so-animate"
                    >
                    <div className="container cbp-so-side cbp-so-side-top">
                        <h1>Our Portfolio</h1>
                        <a className="btn btn-outline-white btn-big" href="portfolio">View All...</a>
                    </div>
                </section>
            </div>
        )
    }
}
export default Portfolio;