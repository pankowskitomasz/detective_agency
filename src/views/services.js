import React,{Component} from "react";
import AboutBusiness from "../components/about-business";
import ServicesExt from "../components/services-ext";

class Services extends Component{
    render(){
        return(        
            <main>
                <AboutBusiness classExt="p-header"/>
                <ServicesExt/>
            </main> 
        );
    }
}

export default Services;