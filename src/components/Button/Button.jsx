import React from 'react'
import './Button.css'

export default function Button({Contenido, Acction,type, disabled}) {
  return (
    <div className='button'>
      <button className={`Button-win ${ disabled ? 'disabled' : '' }`} onClick={Acction} type={type}>
        <h2>{Contenido}</h2>
      </button>
    </div>
  )
}
