import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from "react-router-dom"

import "./styles.css";
let Logo = "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow = "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";
export default function Explore() {
    return (
        <div className="mot-landing-page-blue">
            <div className="mot-explore-page">
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
                                        Explore profiles of
                                        designers and select 
                                        your creative knight.   
                                    </div>
                                    <h6 className="pt-3 pb-4 white-texts">
                                    </h6>
                                </Col>
                                <Col md={4} className="mot-explore-process">
                                    <h6 className="white-text small-texts">
                                        How it works:
                                    </h6>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Select preferred talent</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Generate talent profile snapshot</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Connect to our admin</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Get talent contact</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Continue with negotaition</span>
                                    </div>
                                    <div className="white-text pt-2">
                                        <img src={arrow} alt=""/> <span className="pl-3">Hire Creative</span>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
