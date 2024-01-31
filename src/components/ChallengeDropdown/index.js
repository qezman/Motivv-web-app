import React from 'react'
import { ReactComponent as ChatSvg } from '../../assets/chat.svg'
import { ReactComponent as TwitterSvg } from '../../assets/twitter-vector.svg'

import './ChallengeDropdown.css'

export const ChallengeDropDown = ({ state }) => {
  return (
    <div
      className={
        state ? `challenge-dropdown hidden` : `challenge-dropdown pressed`
      }
    >
      <div className='challenge-dropdown--item'>
        <span className='challenge-dropdown--svg'>
          <ChatSvg />
        </span>
        <p>Feedback</p>
      </div>
      <div className='challenge-dropdown--item'>
        <span className='challenge-dropdown--svg'>
          <TwitterSvg />
        </span>
        <p>Share</p>
      </div>
    </div>
  )
}
