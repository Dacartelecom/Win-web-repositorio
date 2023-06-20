import React, { useState } from 'react'
import Box from '../Box/Box'
import './Planes.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { TrioWinItems,DouGoBasico,DouGoFull } from './PlanesArr'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import PlanBox from '../PlanBox/PlanBox';
import PlanBoxGo from '../PlanBox/PlanBoxGo';



export default function TrioWin({onChange,number,onsubmit,error,pincipalNumber}) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index)
  };

  return (
    <div className='container-Planes'>

    <div className='container-buttons'>
      <button className={toggleState===1? 'left Active-Button3':'Button3 left'} 
        onClick={() => toggleTab(1)}
      >
        Internet + Televisión + FonoWIN
      </button>

      <button className={toggleState===2? 'Active-ButtonGo3':'ButtonGo3'} 
        onClick={() => toggleTab(2)}
      >
         Internet + DGO Básico + FonoWIN
      </button>

      <button className={toggleState===3? 'Active-ButtonGo3 rigth':"ButtonGo3 rigth"} 
        onClick={() => toggleTab(3)}
      >
        Internet + DGO Full + FonoWIN
      </button>
      </div>
      <div className='responsive'>
      <div className='Container-Swiper-Planes'>
        <div className="version-Desktop">
          <div className={toggleState===1?'Active-Planes-Swiper':'Planes-Swiper'}>
      <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
        >
        {TrioWinItems.map((item,index)=>{
          return(
            <SwiperSlide>
            <PlanBox key={index}
            /*--------Funcionalidades--------*/
            onChange={onChange} 
            number={number} 
            onsubmit={onsubmit}
            error={error}
            pincipalNumber={pincipalNumber}
            /*--------Arrays--------*/
            head={item.head}
            Titulo={item.Titulo}
            Megas={item.Megas}
            MegasPromo={item.MegasPromo}
            Descripcion={item.Descripcion}
            Promo={item.Promo}
            tiempoPromo={item.tiempoPromo}
            Precio={item.Precio}
            Mesh={item.Mesh}
            img1Cl1={item.img1Cl1}
            txt1Cl1={item.txt1Cl1}
            img2Cl1={item.img2Cl1}
            txt2Cl1={item.txt2Cl1}
            img3Cl1={item.img3Cl1}
            txt3Cl1={item.txt3Cl1}

            img1Cl2={item.img1Cl2}
            txt1Cl2={item.txt1Cl2}
            img2Cl2={item.img2Cl2}
            txt2Cl2={item.txt2Cl2}
            img3Cl2={item.img3Cl2}
            txt3Cl2={item.txt3Cl2}

            img1Cl3={item.img1Cl3}
            txt1Cl3={item.txt1Cl3}
            img2Cl3={item.img2Cl3}
            txt2Cl3={item.txt2Cl3}
            img3Cl3={item.img3Cl3}
            txt3Cl3={item.txt3Cl3}
            />
            </SwiperSlide>
          )
        })
        }
        </Swiper>
          </div>

          <div className={toggleState===2?'Active-Planes-Swiper':'Planes-Swiper'}>
          <Swiper 
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
            >

              {/*--------Duo Go Básico--------*/}
              {DouGoBasico.map((item,index)=>{
                return(
                  <SwiperSlide>
                    <PlanBoxGo key={index}
                     /*--------Funcionalidades--------*/
                    onChange={onChange} 
                    number={number} 
                    onsubmit={onsubmit}
                    error={error}
                    pincipalNumber={pincipalNumber}
                    /*--------Arrays--------*/
                    head={item.head}
                    Titulo={item.Titulo}
                    Megas={item.Megas}
                    MegasPromo={item.MegasPromo}
                    Descripcion={item.Descripcion}
                    Promo={item.Promo}
                    tiempoPromo={item.tiempoPromo}
                    Precio={item.Precio}
                    Mesh={item.Mesh}
                    img1Cl1={item.img1Cl1}
                    txt1Cl1={item.txt1Cl1}
                    img2Cl1={item.img2Cl1}
                    txt2Cl1={item.txt2Cl1}
                    img3Cl1={item.img3Cl1}
                    txt3Cl1={item.txt3Cl1}
        
                    img1Cl2={item.img1Cl2}
                    txt1Cl2={item.txt1Cl2}
                    img2Cl2={item.img2Cl2}
                    txt2Cl2={item.txt2Cl2}
                    img3Cl2={item.img3Cl2}
                    txt3Cl2={item.txt3Cl2}
        
                    img1Cl3={item.img1Cl3}
                    txt1Cl3={item.txt1Cl3}
                    img2Cl3={item.img2Cl3}
                    txt2Cl3={item.txt2Cl3}
                    img3Cl3={item.img3Cl3}
                    txt3Cl3={item.txt3Cl3}
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>

          </div>

          <div className={toggleState===3?'Active-Planes-Swiper':'Planes-Swiper'}>
          <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
            >
              {/*--------Duo TRIO DGO full--------*/}
              {DouGoFull.map((item,index)=>{
                return(
                  <SwiperSlide>
                    <PlanBoxGo key={index}
                    onChange={onChange} 
                    number={number} 
                    onsubmit={onsubmit}
                    error={error}
                    pincipalNumber={pincipalNumber}
                    head={item.head}
                    Titulo={item.Titulo}
                    Megas={item.Megas}
                    MegasPromo={item.MegasPromo}
                    Descripcion={item.Descripcion}
                    Promo={item.Promo}
                    tiempoPromo={item.tiempoPromo}
                    Precio={item.Precio}
                    Mesh={item.Mesh}
                    img1Cl1={item.img1Cl1}
                    txt1Cl1={item.txt1Cl1}
                    img2Cl1={item.img2Cl1}
                    txt2Cl1={item.txt2Cl1}
                    img3Cl1={item.img3Cl1}
                    txt3Cl1={item.txt3Cl1}
        
                    img1Cl2={item.img1Cl2}
                    txt1Cl2={item.txt1Cl2}
                    img2Cl2={item.img2Cl2}
                    txt2Cl2={item.txt2Cl2}
                    img3Cl2={item.img3Cl2}
                    txt3Cl2={item.txt3Cl2}
        
                    img1Cl3={item.img1Cl3}
                    txt1Cl3={item.txt1Cl3}
                    img2Cl3={item.img2Cl3}
                    txt2Cl3={item.txt2Cl3}
                    img3Cl3={item.img3Cl3}
                    txt3Cl3={item.txt3Cl3}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className='Container-Swiper-Planes'>
      <div className="version-Mobil">
          <div className={toggleState===1?'Active-Planes-Swiper':'Planes-Swiper'}>
          <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        {/*--------Duo TRIO WIN--------*/}

        {TrioWinItems.map((item,index)=>{
          return(
            <SwiperSlide>
            <PlanBox key={index}
            /*--------Funcionalidades--------*/
            onChange={onChange} 
            number={number} 
            onsubmit={onsubmit}
            error={error}
            pincipalNumber={pincipalNumber}
            /*--------Arrays--------*/
            head={item.head}
            Titulo={item.Titulo}
            Megas={item.Megas}
            MegasPromo={item.MegasPromo}
            Descripcion={item.Descripcion}
            Promo={item.Promo}
            tiempoPromo={item.tiempoPromo}
            Precio={item.Precio}
            Mesh={item.Mesh}
            img1Cl1={item.img1Cl1}
            txt1Cl1={item.txt1Cl1}
            img2Cl1={item.img2Cl1}
            txt2Cl1={item.txt2Cl1}
            img3Cl1={item.img3Cl1}
            txt3Cl1={item.txt3Cl1}

            img1Cl2={item.img1Cl2}
            txt1Cl2={item.txt1Cl2}
            img2Cl2={item.img2Cl2}
            txt2Cl2={item.txt2Cl2}
            img3Cl2={item.img3Cl2}
            txt3Cl2={item.txt3Cl2}

            img1Cl3={item.img1Cl3}
            txt1Cl3={item.txt1Cl3}
            img2Cl3={item.img2Cl3}
            txt2Cl3={item.txt2Cl3}
            img3Cl3={item.img3Cl3}
            txt3Cl3={item.txt3Cl3}
            />
            </SwiperSlide>
          )
        })
        }
          </Swiper>
          </div>

          <div className={toggleState===2?'Active-Planes-Swiper':'Planes-Swiper'}>
          <Swiper 
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={50}
            pagination={{
              type: "bullets",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >

              {/*--------Duo Go Básico--------*/}

              {DouGoBasico.map((item,index)=>{
          return(
            <SwiperSlide>
            <PlanBox key={index}
            /*--------Funcionalidades--------*/
            onChange={onChange} 
            number={number} 
            onsubmit={onsubmit}
            error={error}
            pincipalNumber={pincipalNumber}
            /*--------Arrays--------*/
            head={item.head}
            Titulo={item.Titulo}
            Megas={item.Megas}
            MegasPromo={item.MegasPromo}
            Descripcion={item.Descripcion}
            Promo={item.Promo}
            tiempoPromo={item.tiempoPromo}
            Precio={item.Precio}
            Mesh={item.Mesh}
            img1Cl1={item.img1Cl1}
            txt1Cl1={item.txt1Cl1}
            img2Cl1={item.img2Cl1}
            txt2Cl1={item.txt2Cl1}
            img3Cl1={item.img3Cl1}
            txt3Cl1={item.txt3Cl1}

            img1Cl2={item.img1Cl2}
            txt1Cl2={item.txt1Cl2}
            img2Cl2={item.img2Cl2}
            txt2Cl2={item.txt2Cl2}
            img3Cl2={item.img3Cl2}
            txt3Cl2={item.txt3Cl2}

            img1Cl3={item.img1Cl3}
            txt1Cl3={item.txt1Cl3}
            img2Cl3={item.img2Cl3}
            txt2Cl3={item.txt2Cl3}
            img3Cl3={item.img3Cl3}
            txt3Cl3={item.txt3Cl3}
            />
            </SwiperSlide>
          )
        })
        }
          </Swiper>
          </div>

          <div className={toggleState===3?'Active-Planes-Swiper':'Planes-Swiper'}>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={50}
            pagination={{
              type: "bullets",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
              {/*--------Duo TRIO DGO full--------*/}

              {DouGoFull.map((item,index)=>{
                return(
                  <SwiperSlide>
                    <PlanBoxGo key={index}
                    onChange={onChange} 
                    number={number} 
                    onsubmit={onsubmit}
                    error={error}
                    pincipalNumber={pincipalNumber}
                    head={item.head}
                    Titulo={item.Titulo}
                    Megas={item.Megas}
                    MegasPromo={item.MegasPromo}
                    Descripcion={item.Descripcion}
                    Promo={item.Promo}
                    tiempoPromo={item.tiempoPromo}
                    Precio={item.Precio}
                    Mesh={item.Mesh}
                    img1Cl1={item.img1Cl1}
                    txt1Cl1={item.txt1Cl1}
                    img2Cl1={item.img2Cl1}
                    txt2Cl1={item.txt2Cl1}
                    img3Cl1={item.img3Cl1}
                    txt3Cl1={item.txt3Cl1}
        
                    img1Cl2={item.img1Cl2}
                    txt1Cl2={item.txt1Cl2}
                    img2Cl2={item.img2Cl2}
                    txt2Cl2={item.txt2Cl2}
                    img3Cl2={item.img3Cl2}
                    txt3Cl2={item.txt3Cl2}
        
                    img1Cl3={item.img1Cl3}
                    txt1Cl3={item.txt1Cl3}
                    img2Cl3={item.img2Cl3}
                    txt2Cl3={item.txt2Cl3}
                    img3Cl3={item.img3Cl3}
                    txt3Cl3={item.txt3Cl3}
                    />
                  </SwiperSlide>
                )
              })}
          </Swiper>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}
