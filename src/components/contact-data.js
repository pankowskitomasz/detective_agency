import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ContactData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"contact-data align-items-center p-0 bg-secondary d-flex minh-50vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/contact/contact-data.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow text-white p-0 d-flex align-items-center">
                        <div className="p-5 contact-bg">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Contact us
                            </h1>
                            <p className="lead">
                                There is no case we won't take! Visit us or call us to check
                                how we can solve your problem. Our contact phone is available 
                                24h per day, from monday to friday.
                            </p>
                            <p className="lead font-weight-bold">
                                Call us now:
                            </p>
                            <div className="lead text-center font-weight-bold mb-4">
                                <span className="rounded-pill bg-dark d-block w-50 mx-auto">
                                    678 142 838
                                </span>                                
                            </div>
                            <p className="lead font-weight-bold">
                                Visit us:
                            </p>
                            <address className="rounded bg-dark d-block w-50 mx-auto p-2 mb-4">
                                00-001 City,<br/> 
                                Street 12A,<br/>
                                678 142 838
                            </address>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ContactData;