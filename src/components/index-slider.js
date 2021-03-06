import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class IndexSlider extends Component{
    render(){
        return(        
            <Container fluid className="index-slider d-flex align-items-center p-0 bg-dark">
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item>
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover"
                                    src="img/index-slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo">
                                        Detective services
                                    </h1>
                                    <p className="initialism">
                                        Our agency provides wide range of services for different
                                        customer groups, adjusting offers to individual needs.
                                    </p>
                                    <Link to="/about" className="btn btn-outline-light">
                                        About us
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh fit-cover"
                                    src="img/index-slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="display-3 font-weight-bold font-logo">
                                        Search for missing persons
                                    </h1>
                                    <p className="initialism">
                                        Every year many people are missing. We specialize in search
                                        of missing people.
                                    </p>
                                    <Link to="/services" className="btn btn-outline-light">
                                        Our Services
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default IndexSlider;