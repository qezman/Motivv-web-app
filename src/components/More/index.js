import React from 'react';
import { Col, Container } from 'react-bootstrap';
import './styles.css';
import Fade from 'react-reveal';

export default function index() {
    return (
        <div className="mot-more-section justify-content-center text-center">
            <Container>
                <Col md={{ span: 8, offset: 2 }} className="white-text">
                    <div className="more-text">
                        Our creator, Aorthar,  is a full-service design and software development agency. We have helped brands to 
                        communicate their unique value proposition to target audiences in a perfectly 
                        relatable and compelling manner in branding, software development, user experience 
                        design and content developement.
                    </div>
                    <div className="pt-5">
                        <Fade>
                            <a href="https://aorthar.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mot-find-out-more">
                                Find out more
                            </a>
                        </Fade>
                    </div>
                </Col>
            </Container>
        </div>
    )
}
