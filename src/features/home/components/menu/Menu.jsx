import React from 'react'
import './Menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <button className='btn-menu'><strong>Agregados recientemente</strong></button>
      <button className='btn-menu'>En tendencia</button>
    </div>
  )
}
