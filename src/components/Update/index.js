import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';
import {Link} from "react-router-dom"
import UpdateCard from "./UpdateCard"
let Logo = "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow = "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";
export default function Apply(props) {
 
    return (
        <div>
        <div className="mot-landing-page-blue">
            <div className="mot-landing-page">
                <Container className="m-auto">
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <div>
                                <Link to="/">
                                    <img src={Logo} alt="" className="logo" />                                
                                </Link>
                            </div>
                            <Row className="pt-5">
                                <Col md={8} className="mot-text-color">
                                    <div className="mot-catch-phrase">
                                        Create a striking <br/>
                                        profile and get vetted <br/>
                                        for your design cause. 
                                    </div>
                                </Col>
                                <Col md={4} className="mot-apply-instruction">
                                    <h6 className="white-text small-texts">
                                        How it works:
                                    </h6>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> 
                                        <span className="pl-3">Input your name and Job Headline</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> 
                                        <span className="pl-3">Upload your avatar</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> 
                                        <span className="pl-3">Include your portfolio link</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> 
                                        <span className="pl-3">Add your preferred software</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> 
                                        <span className="pl-3">Gain approval</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
                <Row className="justify-content-md-center mot-form-container">
                    <UpdateCard {...props} />
                </Row>
        <Footer />
        </div>
    )
}
