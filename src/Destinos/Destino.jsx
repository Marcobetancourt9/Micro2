"use client";

import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Head from "../Head";
import Footer from "../Footer";
import TelefericoOption from "/src/assets/AntiguoTeleferico/teleferico-option.jpg";
import LagunazoOption from "/src/assets/Lagunazo/lagunazo-option.jpg";
import QuebradaOption from "/src/assets/QuebradaQuintero/quebrada-option.jpg";
import MountainOff from "/src/assets/MOUNTAIN-OFF.svg";
import MountainOn from "/src/assets/MOUNTAIN-ON.svg";
import StarOff from "/src/assets/STAR-OFF.svg";
import StarOn from "/src/assets/STAR-ON.svg";
import { useParams } from "react-router"
import "./destinos.css"

const allInfo = [
  { // ID: 0 | Quebrada Quintero
    bannerImage: "/src/assets/QuebradaQuintero/Quebrada_quintero_mapa.png",
    title: "Descubre la magia de La Quebrada Quintero, parte  del rico tapiz natural del Parque Nacional El Ávila.",
    description: "Quebrada Quintero es una joya escondida en los exuberantes paisajes del Parque Nacional El Ávila. Conocida solo por unos pocos exploradores aventureros, esta tranquila cascada ofrece un escape incomparable a la naturaleza. Rodeado de una densa vegetación y accesible a través de un sendero poco conocido, se siente como entrar en un paraíso secreto. Las aguas cristalinas caen suavemente sobre las rocas, creando un ambiente sereno perfecto para aquellos que buscan paz y soledad. Su belleza virgen lo convierte en un hallazgo raro, ideal para los excursionistas que quieren descubrir un lado más tranquilo de El Ávila, lejos de las multitudes.",
    imageOne: "/src/assets/QuebradaQuintero/quebrada(2).jpg",
    imageTwo: "/src/assets/QuebradaQuintero/quebrada(1).jpg",
    imageThree: "/src/assets/QuebradaQuintero/quebrada(3).jpg",
    imageFour: "/src/assets/QuebradaQuintero/quebrada(4).jpg",
    especial: "traje de baño (opcional)",
    difficulty: [1,1,0,0,0],
    reviews: [1,1,1,0,0]
  },
  {// ID: 1 | Lagunazo
    bannerImage: "/src/assets/Lagunazo/Lagunazo_mapa.png",
    title: "Visita el lagunazo, el sitio ofrece amplios terrenos para acampar con vistas impresionantes.",
    description: "Lagunazo es un tranquilo lugar para acampar ubicado en el corazón del Parque Nacional El Ávila, que ofrece una escapada perfecta para los entusiastas de la naturaleza. Rodeado de frondosos bosques y con una serena laguna, ofrece un escenario ideal para relajarse y observar las estrellas. Accesible a través de un sendero panorámico, esta joya escondida invita a los visitantes a conectarse con la belleza virgen del parque y disfrutar de un retiro tranquilo bajo las estrellas.",
    imageOne: "/src/assets/Lagunazo/Lagunazo(1).jpg",
    imageTwo: "/src/assets/Lagunazo/Lagunazo(2).jpg",
    imageThree: "/src/assets/Lagunazo/Lagunazo(3).jpg",
    imageFour: "/src/assets/Lagunazo/Lagunazo(4).jpg",
    especial: "N/A",
    difficulty: [1,1,1,1,0],
    reviews: [1,1,1,0,0]
  },
  {// ID: 2 | AntiguoTeleferico
    bannerImage: "/src/assets/AntiguoTeleferico/Antiguo_teleferico_mapa.png",
    title: "Descubre la historia del Antiguo Teleferico,  el 'teleférico fantasma'.",
    description: "El Lirón es una subestación histórica ubicada en el corazón del Parque Nacional Ávila, que alguna vez formó parte del icónico sistema Teleférico del Ávila que conectaba Caracas con la región costera. Inaugurada en 1956 durante el gobierno del general Marcos Pérez Jiménez, la estación jugó un papel crucial en la gestión del movimiento de las cabinas de los teleféricos en su recorrido entre los picos de Ávila y el Litoral. Hoy en día, aunque el sistema de teleférico ha estado inactivo durante décadas, El Lirón sigue siendo un símbolo de la rica historia de la región, que ofrece a los visitantes una visión del pasado y las impresionantes vistas de la costa de Caracas.",
    imageOne: "/src/assets/AntiguoTeleferico/AntiguoTeleferico(1).jpg",
    imageTwo: "/src/assets/AntiguoTeleferico/AntiguoTeleferico(2).jpg",
    imageThree: "/src/assets/AntiguoTeleferico/AntiguoTeleferico(3).jpg",
    imageFour: "/src/assets/AntiguoTeleferico/AntiguoTeleferico(4).jpeg",
    especial: "N/A",
    difficulty: [1,1,1,1,1],
    reviews: [1,1,0,0,0]
  }
]

const Destino = () => {
  let params = useParams()
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let info = allInfo[params.id]
  return <>
    <Head/>

    <img className="banner" src={info.bannerImage} />
    <div className="options-container">
      <div style={{backgroundImage:`url(${TelefericoOption})`}} onClick={()=> navigate("/destino/2")}>
        <h2 >{params.id==2?"":"Antiguo Teleferico"}</h2>
      </div>
      <div style={{backgroundImage:`url(${QuebradaOption})`}} onClick={()=> navigate("/destino/0")} >
        <h2>{params.id==0?"":"Quebrada Quintero"}</h2>
      </div>
      <div style={{backgroundImage:`url(${LagunazoOption})`}} onClick={()=> navigate("/destino/1")}>
        <h2>{params.id==1?"":"Lagunazo"}</h2>
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