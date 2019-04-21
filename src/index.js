import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
//Components
import Navbar from './Components/navbar';
import Slider from './Components/slider';
import Services from './Components/services'
import Portfolio from './Components/ourportfolio'
import AboutUs from './Components/aboutus'
import ContactUs from './Components/contactus'
import Footer from './Components/footer'
class App extends Component {

    render(){
    return(

        <div>
        <Navbar/>
        <Slider/>
        <Services/>
        <Portfolio/>
        <AboutUs/>
        <ContactUs/>
        <Footer/>
        </div>
    )
}
}

ReactDOM.render(<App/>, document.getElementById("root"));
