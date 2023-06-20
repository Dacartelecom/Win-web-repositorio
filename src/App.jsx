import { useEffect, useState } from 'react'
import Content from './components/Contenido/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Planes from './components/Planes/Planes'
import Portada from './components/Portada/Portada'
import Formulario from './components/Formulario/Formulario'
import './App.css'

function App() {
  const [tSource, setTSource] =useState(undefined);
  const [numberCall, setNumberCall] = useState('(01) 6806774');
  const[number,setNumber]=useState('');
  const[error,setError]=useState('');
  const wsDataA = new URLSearchParams();

  const conprobacion=(number)=>{
    console.log(number)
    setNumber('')
  }

  const interval =(error)=>{
    setError(error) 
    setTimeout(() => {
      setError('')
    }, 3000);
  }
  const onChange= ev=>{
    const valor=(ev.target.value)
     if(/^\d*$/.test(valor)){
      if(valor.length-1>=9){
        setNumber((prev)=>(prev))
      }else{
        setNumber(valor)
      }
     }
  };

    useEffect(() => {
      if (window) {
          const url = new URLSearchParams(window.location.search);

          const tSource = url.get('T-source');

          if (tSource) {
              setTSource(tSource);
          }
      }
  },[]);
  useEffect(() => {
    if (tSource) {
        switch (tSource) {
        case '01winperu':
            setNumberCall(() => '(01) 6806775');
            break;
        
        default:
            setNumberCall(() => '(01) 6806774');
            break;
        }
    }
},[tSource]);

  const onsubmit=ev=>{
    ev.preventDefault();
    
    conprobacion(number)
        /*url
        const urlParams = new URLSearchParams(window.location.search);
        const paramValue = urlParams.get('param'); */

    /*Agregar Datos*/
        /*Número */

        if(tSource=='01winperu'){
          wsDataA.append("service", "callmeWinPeru1");
        }else{
          wsDataA.append("service", "callmeWinPeru");
        }
        wsDataA.append("username", "dacarEs");
        wsDataA.append("password", "jAcXDq35DJLBWfMzTxGG");
        wsDataA.append("telephone", number);
        wsDataA.append("ip", "127.0.0.1");
        wsDataA.append("tsource", tSource);
        const leadUrlA = "https://ws-dacar-ica.octopus-latam.com/?" + wsDataA.toString();
      
        /* */
        fetch(leadUrlA)
        .then(res => res.json())
        .catch(error => console.log(error))
        .then(response => {
        console.log(response);
        console.log(leadUrlA);
        if(response.status==='ERROR'){
          interval('Estimado cliente el número debe tener 9 dígitos o esta mal colocado.')
        }else{
          interval('En breve un asesor se pondrá en contacto contigo para resolver tus dudas. Gracias')
        }
        });
        
  }
  return (
    <div className="App">   
    <div className='Container-Page'>
     <Header number={numberCall}/>
     </div>
     <Portada/>
     <Formulario number={number} onChange={onChange} onsubmit={onsubmit} error={error} />
     <div className='Container-Page'>
     <Content/> 
     <Planes  onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={numberCall}/>
     </div>
   <Footer number={numberCall}/> 
     </div>
  )
}

export default App
