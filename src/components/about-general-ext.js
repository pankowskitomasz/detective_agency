import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutGeneralExt extends Component{
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
            <Container fluid className={"about-general-ext align-items-center px-0 py-5 bg-dark minh-100vh d-flex "+this.props.classExt}>
                <div>
                    <Row className="mx-auto text-center py-3 w-100">
                        <Col xs={10} className="mx-auto text-shadow text-white p-0 text-left">
                            <h1 className="display-4 font-weight-bold font-logo text-center mb-4">
                                What we do?
                            </h1>
                            <p className="lead">
                                Are you searching for answers? Looking to find problems before they affect 
                                your business? Whether you’re an attorney, small business, insurance company, 
                                or member of the general public, our result driven team of devoted Albany 
                                area investigators can help solve your case beyond expectation. Our trained 
                                professionals are licensed, bonded, and insured to work anywhere in State. 
                                We are even proud to be a FAA Certified Pilot for sUAS (drones) to assist 
                                with surveillance.
                            </p>
                            <p className="lead">
                                With our office in Albany, we proudly serve local areas such as Albany, 
                                Schenectady, Troy, Saratoga Springs and Glens Falls, however we will work 
                                anywhere in State.
                            </p>
                            <p className="lead">
                                No matter where your case takes us in State private investigation team is
                                dedicated to finding the answers you seek through investigative services 
                                including:
                            </p>
                            <ul className="lead">
                                <li>Missing Persons</li>
                                <li>Skip Tracing</li>
                                <li>Asset Searches</li>
                                <li>Accident Investigations</li>
                                <li>Drone Surveillance</li>
                                <li>Pre-Employment Background Checks</li>
                                <li>Surveillance</li>
                            </ul>
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

export default AboutGeneralExt;