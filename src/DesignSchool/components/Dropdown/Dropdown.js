import React from 'react'
import { Link } from 'react-router-dom'

import style from './dropdown.module.css'

export const DropDown = ({ state }) => {
  return (
    <div
      className={
        state === false ? `${style.dropdown}  ${style.hidden}` : `${style.dropdown}  ${style.pressed}`
      }
    >
      <div className={style.dropdownItem}>
        <Link className={style.droddownItemLink} to="/challenges/dashboard">
          <p>Design Challenge</p>
        </Link>
      </div>
      <div className={style.dropdownItem}>
        <Link className={style.droddownItemLink} to="/jobs">
          <p>Design Jobs</p>
        </Link>
      </div>
    </div>
  )
}
