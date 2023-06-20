import React from 'react'
import Logo from '../../img/winLogo.png'
import './Header.css'

export default function Header({number}) {
  return (
    <div className='Header-content'>
        <div className='Logo-header'>
        <img src={Logo} alt="" />
        </div>

      <div className='number-header'>
       <ul>
        <li><h2>Llamanos al</h2></li>
        <li><a href={`tel:${number}`}>{number}</a></li>
       </ul>
      </div>
    </div>
  )
}
