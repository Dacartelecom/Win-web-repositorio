import React from 'react'
import Box from '../Box/Box'
import './Planes.css'
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DuosWin from './DuosWin';
import TrioWin from './TrioWin';
import DuoGamer from './DuoGamer';
import TrioGamer from './TrioGamer';


const  Planes=({onChange,number,onsubmit,error,pincipalNumber})=> {
  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='container-Planes'>
      <div className='Name-Planes'>
        <Box name={toggleState===1? 'Active-box-Planes':"box-Planes"} NamePlan="Planes TRÍO" onclick={() => toggleTab(1)}/>
        <Box name={toggleState===2? 'Active-box-Planes':"box-Planes"} NamePlan="Planes DÚO" onclick={() => toggleTab(2)}/>
        <Box name={toggleState===3? 'Active-box-Planes':"box-Planes"} NamePlan="Planes TRÍO GAMER" onclick={() => toggleTab(3)}/>
        <Box name={toggleState===4? 'Active-box-Planes':"box-Planes"} NamePlan="Planes DÚO GAMER" onclick={() => toggleTab(4)}/>
      </div>
      <div className='Container-Swiper-Planes'>
        <div className={toggleState===1?'Active-Planes-Swiper':'Planes-Swiper'}>
          <TrioWin onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={pincipalNumber}/>
        </div>

        <div className={toggleState===2?'Active-Planes-Swiper':'Planes-Swiper'}>
          <DuosWin onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={pincipalNumber}/>
        </div>

        <div className={toggleState===3?'Active-Planes-Swiper':'Planes-Swiper'}>
          <TrioGamer onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={pincipalNumber}/>
        </div>

        <div className={toggleState===4?'Active-Planes-Swiper':'Planes-Swiper'}>
          <DuoGamer onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={pincipalNumber}/>
        </div>
      </div>
    </div>
  )
}
export default Planes;