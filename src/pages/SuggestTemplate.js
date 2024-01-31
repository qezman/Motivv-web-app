import React from 'react'
import { Banner } from '../components/Banner/Banner'
import Helmet from '../components/Helmet'
import Footer from '../components/Footer'

import SugggestTemplateComponent from '../components/SuggestTemplate'

const SuggestTemplate = () => {
  return (
    <>
      <Helmet
        page='Business Templates | Motivv'
        title='Access to readily created template contents for your needs'
        description=''
      />
      <Banner
        content={
          <p>
            {' '}
            🎉 🎉 🎉 Level up your design skills by working on real design
            challenge.
            <a href='/challenges'>Discover Now</a>
          </p>
        }
        styling='banner-challenge-advertise'
      />
      <SugggestTemplateComponent />
      <Footer />
    </>
  )
}

export default SuggestTemplate
