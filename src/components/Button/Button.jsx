import React from 'react'
import './Button.css'

export default function Button({Contenido, Acction,type}) {
  return (
    <div className='button'>
      <button className='Button-win' onClick={Acction} type={type}>
        <h2>{Contenido}</h2>
      </button>
    </div>
  )
}
