import React from 'react'
import style from './Banner.module.css'
export const Banner = ({ styling = '', content }) => {
  return <div className={`${style.banner} ${styling}`}>{content}</div>
}
