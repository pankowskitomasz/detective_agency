import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class ServicesExt extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.href}>
                <Button variant="outline-light">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"services-ext align-items-center px-0 py-5 bg-dark minh-100vh d-flex "+this.props.classExt}>
                <div>
                    <Row className="mx-auto text-center py-3 w-100">
                        <Col xs={10} className="mx-auto text-shadow text-white p-0 text-left">
                            <h1 className="display-4 font-weight-bold font-logo text-center mb-4">
                                Our Services
                            </h1>
                            <p className="initialism mb-5">
                                Looking for someone to help protect your business? Detective Agency is here 
                                to help corporations and small businesses across Albany, Schenectady, Troy, 
                                Saratoga, Glens Falls and the rest of State. Whether its performing 
                                pre-employment background checks, uncovering employee misconduct and internal 
                                fraud, or providing bodyguard services, our team is here to help protect your 
                                company!
                            </p>
                            <h5 className="font-weight-bold">
                                Types of Investigations for Corporations
                            </h5>
                            <ol className="initialism mb-4">
                                <li>Pre-employment Background Investigations</li> 
                                <li>Executive Protection</li>
                                <li>Undercover Operations</li>
                            </ol>
                            <h5 className="font-weight-bold">
                                Services Performed within Corporate Investigations
                            </h5>
                            <ol className="initialism mb-4">
                                <li>Criminal records</li> 
                                <li>Education verification</li>
                                <li>Employment history</li>
                                <li>Civil records</li>
                                <li>DMV record check</li>
                                <li>Authorized credit report</li>
                                <li>Social Security verification</li>
                                <li>Address history</li>
                            </ol>
                            <h5 className="font-weight-bold">
                                Executive Protection
                            </h5>
                            <p className="initialism mb-3">
                                Our agency offers the safety of corporate personnel who may be at high risk for being 
                                taken hostage or physical criminal acts taken towards them.
                            </p>
                            <h5 className="font-weight-bold">
                                Undercover Operations
                            </h5>
                            <p className="initialism mb-3">
                                Perform undercover ops for small business owners or corporations to reveal 
                                what is being stolen or compromised, where the activity is taking place, 
                                how it is being carried out and the identity of the people involved.
                            </p>
                            <div class="w-100 text-center">
                                {linking}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>    
        );
    }
}

export default ServicesExt;