import React from 'react'
import style from './template-sidebar.module.css'

export const TemplateSidebarItem = ({ icon, type, amount }) => {
  return (
    <div className={style.motTemplateSidebarItem}>
      <span className={style.motTemplateSidebarItemInfo}>
        <img src={icon} alt={type} className='img-fluid' />
        <h4 className='ml-2'>{type}</h4>
      </span>
      <span className={style.motTemplateSidebarItemAmount}>
        <p>{`{${amount}}`}</p>
      </span>
    </div>
  )
}
