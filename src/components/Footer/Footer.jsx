import React from 'react';
import './Footer.css';
import Logo from '../../img/winLogoB.png'


export default function Footer({number}) {

  return (
    /*Footer*/
<div className='Container'>
    <div className='container-footer'>
    <div className='footer-links'>
    <div className='Logo-header-footer'>
        <img src={Logo} alt="" />
        </div>

      <div className='number-header-footer'>
       <ul>
        <li><h2>Llámanos al</h2></li>
        <li><a href={`tel:${number}`}>{number}</a></li>
       </ul>

      </div>
    </div>
      <div className='line'>
        <hr />
        Distribuidor Autorizado de WIN
      </div>
    </div>
</div>
  )
}
