import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

const CreateProfile = () => {
    return (
        <div className="mot-create-profile-con">
            <Container>
            <Row>
                <Col md={12}>
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="title-big">Create a profile card to <br /> <span>apply to any of these jobs</span></h1>
                        <p className="my-2">It's not going to take a long process, we promise.</p>
                        <span className="mot-profile-create-btn"><Link to="/apply">Start Creating</Link></span>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>        
    )
}

export default CreateProfile