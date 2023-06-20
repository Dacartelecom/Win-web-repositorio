import "./PlanBox.css";
import ModalC from "../Modal/Modal";


export default function PlanBox({
  tiempoPromo,
  onChange,
  number,
  onsubmit,
  head,
  Titulo,
  Megas,
  MegasPromo,
  Descripcion,
  Promo,
  Precio,
  error,
  pincipalNumber,
  key,
  img1Cl1,
  txt1Cl1,
  img2Cl1,
  txt2Cl1,
  img3Cl1,
  txt3Cl1,
  img1Cl2,
  txt1Cl2,
  img2Cl2,
  txt2Cl2,
  img3Cl2,
  txt3Cl2,
  img1Cl3,
  txt1Cl3,
  img2Cl3,
  txt2Cl3,
  img3Cl3,
  txt3Cl3
}) {
  return (
    <div className="Box-Container" key={key}>
      <div className="Box-head" >
        <h1>{head}</h1>
      </div>
      <div className="Box-Planes">
        <ul>
          <li className="Box-Titulo">
            <h1>{Titulo}</h1>
          </li>
          <li className="Box-PromoM">
            <span>{MegasPromo}</span>
          </li>
          <li className="Box-Megas">
            <h3>{Megas}</h3>
          </li>
          <li className="Box-Descripcion">
            <h3>{Descripcion}</h3>
          </li>
          <li className="Box-PromoP">
            <p>{Promo}</p>
          </li>
          <li className="Box-Tpromo">
            <p>{tiempoPromo}</p>
          </li>
          <li className="Box-Precio">
            <p>{Precio}</p>
          </li>
          <li className="Box-Button">
            <ModalC onChange={onChange} number={number} onsubmit={onsubmit} error={error} pincipalNumber={pincipalNumber}/>
          </li>
          <li className="Box-imgs">
          
          <div className="Box-foot">
            
          <div className="col">
                <div className="block">
                    <li><img src={img1Cl1} alt="" /></li>
                    <li><span>{txt1Cl1}</span></li>  
                </div>
                <div className="block">
                    <li><img src={img2Cl1} alt="" /></li>
                    <li><span>{txt2Cl1}</span></li> 
                </div>
                <div className="block">
                    <li><img src={img3Cl1} alt="" /></li>
                    <li><span>{txt3Cl1}</span></li> 
                </div>
          </div>
          <div className="col">
                <div className="block">
                    <li><img src={img1Cl2} alt="" /></li>
                    <li><span>{txt1Cl2}</span></li> 
                  </div> 
                  <div className="block">
                    <li><img src={img2Cl2} alt="" /></li>
                    <li><span>{txt2Cl2}</span></li> 
                  </div>
                  <div className="block">
                    <li><img src={img3Cl2} alt="" /></li>
                    <li><span>{txt3Cl2}</span></li> 
                  </div>  
            </div>               
            <div className="col">
                  <div className="block">
                    <li><img src={img1Cl3} alt="" /></li>
                    <li><span className="text">{txt1Cl3}</span></li>  
                  </div>
                  <div className="block">
                    <li><img src={img2Cl3} alt="" /></li>
                    <li><span>{txt2Cl3}</span></li> 
                  </div>
                  <div className="block">
                    <li><img src={img3Cl3} alt="" /></li>
                    <li><span>{txt3Cl3}</span></li> 
                  </div> 
            </div>       
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
