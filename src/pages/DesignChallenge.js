import React from 'react'

import { DesignChallengeHero } from '../components/DesignChallengeHero/'
import { DesignChallengeInsider } from '../components/DesignChallengeInsider/'
import { DesignChallengeGrow } from '../components/DesignChallengeGrow/'
import { DesignChallengeAdvertise } from '../components/DesignChallengeAdvertise/'
import Footer from '../components/Footer'
import Helmet from '../components/Helmet'

export default function HomePage(props) {
  return (
    <>
      <Helmet
        page='Design Challenge'
        title='We connect prospective clients to vetted designers'
        description='Get access to the Latest Design Challenge for your track and improve as a Designers'
      />
      <DesignChallengeHero />
      <DesignChallengeInsider />
      <DesignChallengeGrow />
      <DesignChallengeAdvertise />
      <Footer />
    </>
  )
}
