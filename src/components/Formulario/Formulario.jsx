import Button from '../Button/Button';
import './Formulario.css'

const Formulario = ({ onsubmit, number, onChange, error }) => {

  return (
    <div className='content-all'>
      <div className='Container-form'>

        <form onSubmit={ onsubmit } action="" className='Form-win'>

          <div className='Movil-text'>
            <h1 className='Titulo-frm'>¡Déjanos tu número y nos pondremos en contacto!</h1>
            <h1 className='contrata'>¡CONTRATA WIN!</h1>
          </div>

          <div className='text-box'>
            <input
              type="text"
              name='number'
              placeholder='Ingresa tu nro. Aquí'
              autoComplete='off'
              value={ number }
              onChange={ onChange }
            />
          </div>
          <div className='Mensaje-Error'>{ error }</div>
          <div className='name'>
            <Button Contenido="Envíanos Tu Número" type='onsubmit' disabled={ number.length === 9 ? false : true } />
          </div>
        </form>
      </div>

      {/*Version mobil */}


      <div className='Container-form-mobil'>
        <form onSubmit={ onsubmit } action="" className='Form-win-mobil'>
          <div className='Movil-text-mobil'>
            <h1 className='Titulo-frm-mobil'>¡Déjanos tu número y nos pondremos en contacto!</h1>
            <h1 className='contrata-mobil'>¡CONTRATA WIN!</h1>
          </div>

          <div className='text-box-mobil'>
            <input
              type="text"
              name='number'
              placeholder='Ingresa tu nro. Aquí'
              autoComplete='off'
              value={ number }
              onChange={ onChange }
            />
          </div>
          <div className='Mensaje-Error-modal'>{ error }</div>
          <div className='name'>
            <Button Contenido="Envíanos Tu Número" type='onsubmit' disabled={ number.length === 9 ? false : true } />
          </div>
        </form>

      </div>
    </div>
  )
}

export default Formulario;
