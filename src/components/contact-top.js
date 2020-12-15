import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";

class ContactTop extends Component{
    render(){
        return(        
            <Container fluid className={"contact-top align-items-center p-0 bg-secondary d-flex minh-25vh "+this.props.classExt}>
            </Container>    
        );
    }
}

export default ContactTop;