import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import './AdContainer.css'

import { ReactComponent as ImageAdvertise } from '../../assets/group-5.svg'

export const AdContainer = () => {
  return (
    <div className='mot-ad--container'>
      <figure className="ad--image_placholder">
          <ImageAdvertise />
      </figure>
      <span className='challenge-label mb-2 d-block'>Design School</span>
      <h3>
        Fast track your Self-taught Design Career
      </h3>
      <p>
        Our complete 4-year University-feel Curriculum was built to Level up your design skills by working on real design challenge sent to your inbox every week.
      </p>
      <Link to="/school">
        <Button
          variant="primary"
          size="md"
          className="mot-ad-btn align-self-center"
        >
          Learn More
        </Button>
      </Link>
    </div>
  )
}
