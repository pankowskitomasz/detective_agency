import React,{Component} from "react";
import IndexSlider from "../components/index-slider";
import AboutGeneral from "../components/about-general";
import AboutBusiness from "../components/about-business";
import ContactData from "../components/contact-data";
import {homeCfg} from "../config"; 

class Home extends Component{
    render(){
        return(        
            <main>
                <IndexSlider/>
                <AboutGeneral backLink={homeCfg[0]}/>
                <AboutBusiness backLink={homeCfg[1]}/>
                <ContactData backLink={homeCfg[2]}/>
            </main>
        );
    }
}

export default Home;