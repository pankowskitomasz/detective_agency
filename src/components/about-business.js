import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Button from "../../node_modules/react-bootstrap/Button";

class AboutBusiness extends Component{
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
            <Container fluid className={"about-business align-items-center px-0 py-5 bg-dark minh-25vh d-flex "+this.props.classExt}>
                <div>
                    <Row className="mx-auto text-center d-flex w-100 mb-3">
                        <Col xs={12} className="mx-auto text-shadow text-white p-0">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Business Support
                            </h1>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center d-flex w-100">
                        <Col xs={8} className="mx-auto text-shadow text-white p-0">
                            <p className="lead">
                                Our agency provides active business intelligence services, with ethical 
                                business standards. We provide silent audits in our customers companies 
                                in terms of electronic safety. With us your secrets will remain secret.
                            </p>
                            {linking}
                        </Col>
                    </Row>
                </div>
            </Container>    
        );
    }
}

export default AboutBusiness;