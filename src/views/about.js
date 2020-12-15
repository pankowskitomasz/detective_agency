import React,{Component} from "react";
import AboutGeneral from "../components/about-general";
import AboutGeneralExt from "../components/about-general-ext";

class About extends Component{
    render(){
        return(        
            <main>
                <AboutGeneral classExt="p-header"/>
                <AboutGeneralExt/>
            </main> 
        );
    }
}

export default About;