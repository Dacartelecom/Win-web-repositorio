import React, { useState } from 'react'
import Logo from '../../img/winLogo.png'
import './Header.css'
import { Modal } from 'rsuite'

export default function Header({number}) {

  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  return (
    <>
      <div className='Header-content'>
        <div className='Logo-header'>
          <img src={Logo} alt="Logo Win" />
        </div>

        <div className='number-header'>
          <ul>
            <li><h2>Llamanos al</h2></li>
            <li style={{ height: '39px' }}><a href={`tel:${number}`}>{number}</a></li>
          </ul>
          <span className='help' onClick={ open }>ATENCIÓN AL CLIENTE Y/O RECLAMOS, HAZ CLIC AQUÍ</span>
        </div>
      </div>
      <Modal className='Modal' open={ openModal } onClose={ close }>
        <div className='body-help'>
          <span className='text-help'>Teléfonos solo para atención al cliente y reclamos</span>
          <a href="tel:7073000" className='number-help'>707-3000</a>
        </div>
      </Modal>
    </>
  )
}
