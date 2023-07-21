import React from 'react'
import { Modal } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import Button from '../Button/Button'
import './Modal.css'

export default function ModalC({ onsubmit, number, onChange, error, pincipalNumber }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button Acction={handleOpen} Contenido="Quiero este plan" />
      <div className='container-Modal'>
        <Modal className='Modal' open={open} onClose={handleClose}>
          <form onSubmit={onsubmit} className='Form-win'>

            <h1 className='Titulo-mod'>¡Excelente elección!</h1>
            <h1 className='contrata-mod'>Llámanos gratis al</h1>
            <h1 className='Titulo-mod'><a href={`tel:${pincipalNumber}`}>{pincipalNumber}</a></h1>

            <h1 className='contrata-mod'>O si prefieres dejanos tu número y te llamaremos inmediatamente...</h1>
            <div className='text-box-mod'>
              <input
                type="text"
                name='number'
                placeholder='Ingresa tu nro. Aquí'
                autoComplete='off'
                className='input-mod'
                value={number}
                onChange={onChange}
              />
            </div>
            <div className='Mensaje-Error-modal'>{error}</div>
            <div className='name'>
              <Button Contenido="Envianos Tu numero" type='onsubmit' disabled={ number.length === 9 ? false : true } />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  )
}
