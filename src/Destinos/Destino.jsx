"use client";

import React from "react";
import Head from "../Head";
import Footer from "../Footer";
import QuebradaQuinteroMap from "/src/assets/Quebrada_quintero_mapa.png";
import TelefericoOption from "/src/assets/teleferico-option.jpg";
import LagunazoOption from "/src/assets/lagunazo-option.jpg";
import QuebradaOption from "/src/assets/quebrada-option.jpg";
import QuebradaOne from "/src/assets/quebrada(1).jpg";
import MountainOff from "/src/assets/MOUNTAIN-OFF.svg";
import MountainOn from "/src/assets/MOUNTAIN-ON.svg";
import StarOff from "/src/assets/STAR-OFF.svg";
import StarOn from "/src/assets/STAR-ON.svg";
import "./destinos.css"

const allInfo = [
  { // ID: 0 | Quebrada Quintero
    bannerImage: QuebradaQuinteroMap,
    title: "Descubre la magia de La Quebrada Quintero, parte  del rico tapiz natural del Parque Nacional El Ávila.",
    description: "Quebrada Quintero es una joya escondida en los exuberantes paisajes del Parque Nacional El Ávila. Conocida solo por unos pocos exploradores aventureros, esta tranquila cascada ofrece un escape incomparable a la naturaleza. Rodeado de una densa vegetación y accesible a través de un sendero poco conocido, se siente como entrar en un paraíso secreto. Las aguas cristalinas caen suavemente sobre las rocas, creando un ambiente sereno perfecto para aquellos que buscan paz y soledad. Su belleza virgen lo convierte en un hallazgo raro, ideal para los excursionistas que quieren descubrir un lado más tranquilo de El Ávila, lejos de las multitudes.",
    imageOne: QuebradaOne,
    imageTwo: QuebradaOne,
    imageThree: QuebradaOne,
    imageFour: QuebradaOne,
    especial: "Guantes de escalado",
    difficulty: [1,1,0,0,0],
    reviews: [1,1,1,0,0]
  },
  {

  }
]

const Destino = ({id}) => {
  let info = allInfo[0]
  return <>
    <Head/>

    <img className="banner" src={info.bannerImage} />
    <div className="options-container">
      <div style={{backgroundImage:`url(${TelefericoOption})`}}>
        <h2>Antiguo Teleferico</h2>
      </div>
      <div style={{backgroundImage:`url(${QuebradaOption})`}}>
        <h2>Quebrada Quintero</h2>
      </div>
      <div style={{backgroundImage:`url(${LagunazoOption})`}}>
        <h2>Lagunazo</h2>
      </div>
    </div>

    <div className="info raleway">
      <div className="info-right">
        <h2>{info.title}</h2>
        <p className="description">{info.description}</p>
      </div>

      <div className="info-left">
        <img className="big-img" src={info.imageOne} />
        <div className="mini-imgs">
        <img src={info.imageTwo} />
        <img src={info.imageThree} />
        <img src={info.imageFour} />
        </div>
      </div>
    </div>
    <div className="raleway extra-info">
      <div>
        <b>Equipamiento especial: </b>
        <p>{info.especial}</p>  
      </div>
      
      <div>
        <b>Dificultad: </b>
        {info.difficulty.map((x)=>
          x == 1? <p><img src={MountainOn}/></p> : <p><img src={MountainOff}/></p> 
        )}  
      </div> 

      <div>
        <b>Calificacion: </b>
        {info.reviews.map((x)=>
          x == 1? <p><img src={StarOn}/></p> : <p><img src={StarOff}/></p> 
        )}  
      </div>      
    </div>

    <div className="aditional-info">
      <div>
        <h2 style={{backgroundColor: "#FF6709"}}>Ver Reseñas</h2>
      </div>
      <div style={{backgroundImage:`url(${TelefericoOption})`}}>
        <h2>Consejos de Seguridad</h2>
      </div>
    </div>
    <Footer/>
  </>;

};


export default Destino;