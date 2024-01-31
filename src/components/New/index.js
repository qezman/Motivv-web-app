import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal';
import './styles.css'



let Placeholder = 'https://res.cloudinary.com/denw9euui/image/upload/v1594323732/Motivv/placeholder_i6ami9.png';
let Dots = 'https://res.cloudinary.com/denw9euui/image/upload/v1594368678/Motivv/dots_gnsfmi.png';

export default function Index() {
    return (
        <div>
            <div className="mot-new-access-section">
                <Container>
                    <Row className="">
                        <Col className="mot-user-placeholders">
                            <Fade>
                                <h1 className="mot-access-section-header">
                                    Gain access to clients 
                                    in a single click!
                                </h1>
                                <p className="mot-access-section-caption">
                                    Getting hired for project gets easy by setting your profile. 
                                    Input your details and start getting gigs. No login processes, 
                                    No long story! 
                                </p>
                                <div className="mot-apply-as-designer">
                                    <Link to="/apply">
                                        <button type="submit" className="apply-as-designer">Apply as a designer</button>
                                    </Link>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={5}>
                            <Fade bottom>
                                <img src={Placeholder} alt="placeholder" className="fw-image"/>
                            </Fade>
                        </Col>
                    </Row>
                </Container>            
            </div>
            <Fade bottom duration={100} delay={1000}>
                <img src={Dots} alt="" className="d-dot-patterns"/>
            </Fade>
        </div>
    )
}