import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutGeneral extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-outline-light">
                {this.props.backLink.name}
            </Link>;
        }
        return(        
            <Container fluid className={"about-general align-items-center px-0 py-5 bg-dark minh-50vh d-flex "+this.props.classExt}>
                <div>
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} className="mx-auto text-shadow text-white p-0">
                            <h1 className="display-4 font-weight-bold font-logo">
                                The Agency
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center w-100 py-3">
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-group icon-big opacity-7 mb-3"></span>
                            <p className="lead font-weight-bold">
                                Individual approach
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-eye icon-big opacity-7 mb-3"></span>
                            <p className="lead font-weight-bold">
                                Discreete operation
                            </p>
                        </Col>
                        <Col xs={12} md={4} className="mx-auto text-shadow text-white p-0">
                            <span className="fa fa-certificate icon-big opacity-7 mb-3"></span>
                            <p className="lead font-weight-bold">
                                Certified detectives
                            </p>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center py-3 w-100">
                        <Col xs={10} className="mx-auto text-shadow text-white p-0">
                            <p className="initialism">
                                Our detective agency is certified detective services provider with
                                wide experience in individual and business area. We specialize in:
                                adultery and search of missing people. There is no case we won't 
                                take! 
                            </p>
                            {linking}
                        </Col>
                    </Row>
                </div>
            </Container>    
        );
    }
}

export default AboutGeneral;