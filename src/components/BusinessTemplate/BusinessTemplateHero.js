import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TemplateLabel } from './TemplateLabel'
import GreenMark from '../../assets/green-mark.svg'

export const BusinessTemplateHero = () => {
  return (
    <Container>
      <Row className='mot-business-template-hero align-items-center justify-content-center'>
        <h1 className='mot-business-template-hero__h1'>
          Free Business Templates and Resources Links for Everyone
        </h1>
        <p>
          More than hundreds of buisness resources on design, strategy,
          management and much more in just a click.{' '}
        </p>
        <Row className='d-flex px-2 px-md-0 justify-content-center flex-md-wrap'>
          <Col md={4} className='mot-template-feature'>
            <TemplateLabel
              svg={GreenMark}
              content='Easy to access'
              styling='hero-label'
            />
          </Col>
          <Col md={4} className='mot-template-feature'>
            <TemplateLabel
              svg={GreenMark}
              content='100% free'
              styling='hero-label'
            />
          </Col>
          <Col md={4} className='mot-template-feature'>
            <TemplateLabel
              svg={GreenMark}
              content='Ready to use'
              styling='hero-label'
            />
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
