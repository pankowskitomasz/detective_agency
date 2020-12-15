import React,{Component} from "react";
import ContactData from "../components/contact-data";
import ContactTop from "../components/contact-top";
import ContactForm from "../components/contact-form";

class Contact extends Component{
    render(){
        return(        
            <main>
                <ContactTop classExt="p-header"/>
                <ContactData/>
                <ContactForm/>
            </main> 
        );
    }
}

export default Contact;