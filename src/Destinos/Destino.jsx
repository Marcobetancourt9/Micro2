"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc} from "firebase/firestore";
import { db } from "../../credentials";
import TelefericoOption from "/public/AntiguoTeleferico/teleferico-option.jpg";
import LagunazoOption from "/public/Lagunazo/lagunazo-option.jpg";
import QuebradaOption from "/public/QuebradaQuintero/quebrada-option.jpg";
import SabasOption from "../../public/SabasNieves/sabas-option.png"
import GaliOption from "../../public/Galipan/gali-option.png"

import mapaQuebrada from "/public/QuebradaQuintero/Quebrada_quintero_mapa.png"
import quebrada1 from "/public/QuebradaQuintero/quebrada(1).jpg";
import quebrada2 from "/public/QuebradaQuintero/quebrada(2).jpg";
import quebrada3 from "/public/QuebradaQuintero/quebrada(3).jpg";
import quebrada4 from "/public/QuebradaQuintero/quebrada(4).jpg";

import lagunazoMapa from "/public/Lagunazo/Lagunazo_mapa.png"
import lagunazo1 from "/public/Lagunazo/Lagunazo(1).jpg"
import lagunazo2 from "/public/Lagunazo/Lagunazo(2).jpg"
import lagunazo3 from "/public/Lagunazo/Lagunazo(3).jpg"
import lagunazo4 from "/public/Lagunazo/Lagunazo(4).jpg"

import SabasMapa from "../../public/SabasNieves/Sabas_Nieves_mapa.png"
import sabas1 from "../../public/SabasNieves/Sabas(1).png"
import sabas2 from "../../public/SabasNieves/Sabas(2).png"
import sabas3 from "../../public/SabasNieves/Sabas(3).png"
import sabas4 from "../../public/SabasNieves/Sabas(4).png"

import GaliMapa from "../../public/Galipan/Galipan_mapa.png"
import gali1 from "../../public/Galipan/Galipan(1).png"
import gali2 from "../../public/Galipan/Galipan(2).png"
import gali3 from "../../public/Galipan/Galipan(3).png"
import gali4 from "../../public/Galipan/Galipan(4).png"

import TeleMapa from "/public/AntiguoTeleferico/Antiguo_teleferico_mapa.png"
import tele1 from "/public/AntiguoTeleferico/AntiguoTeleferico(1).jpg"
import tele2 from "/public/AntiguoTeleferico/AntiguoTeleferico(2).jpg"
import tele3 from "/public/AntiguoTeleferico/AntiguoTeleferico(3).jpg"
import tele4 from "/public/AntiguoTeleferico/AntiguoTeleferico(4).jpeg"


import MountainOff from "/public/MOUNTAIN-OFF.svg";
import MountainOn from "/public/MOUNTAIN-ON.svg";
import StarOff from "/public/STAR-OFF.svg";
import StarOn from "/public/STAR-ON.svg";
import { useParams } from "react-router"
import "./destinos.css"

export const allInfo = [
  { // ID: 0 | Quebrada Quintero
    id: 0,
    name: "Quebrada Quintero",
    bannerImage: mapaQuebrada,
    title: "Descubre la magia de La Quebrada Quintero, parte  del rico tapiz natural del Parque Nacional El Ávila.",
    description: "Quebrada Quintero es una joya escondida en los exuberantes paisajes del Parque Nacional El Ávila. Conocida solo por unos pocos exploradores aventureros, esta tranquila cascada ofrece un escape incomparable a la naturaleza. Rodeado de una densa vegetación y accesible a través de un sendero poco conocido, se siente como entrar en un paraíso secreto. Las aguas cristalinas caen suavemente sobre las rocas, creando un ambiente sereno perfecto para aquellos que buscan paz y soledad. Su belleza virgen lo convierte en un hallazgo raro, ideal para los excursionistas que quieren descubrir un lado más tranquilo de El Ávila, lejos de las multitudes.",
    imageOne: quebrada2,
    imageTwo: quebrada1,
    imageThree: quebrada3,
    imageFour: quebrada4,
    especial: "traje de baño (opcional)",
    difficulty: [1,1,0,0,0],
    reviews: [1,1,1,0,0]
  },
  {// ID: 1 | Lagunazo
    id: 1,
    name: "Lagunazo",
    bannerImage: lagunazoMapa,
    title: "Visita el lagunazo, el sitio ofrece amplios terrenos para acampar con vistas impresionantes.",
    description: "Lagunazo es un tranquilo lugar para acampar ubicado en el corazón del Parque Nacional El Ávila, que ofrece una escapada perfecta para los entusiastas de la naturaleza. Rodeado de frondosos bosques y con una serena laguna, ofrece un escenario ideal para relajarse y observar las estrellas. Accesible a través de un sendero panorámico, esta joya escondida invita a los visitantes a conectarse con la belleza virgen del parque y disfrutar de un retiro tranquilo bajo las estrellas.",
    imageOne: lagunazo1,
    imageTwo: lagunazo2,
    imageThree: lagunazo3,
    imageFour: lagunazo4,
    especial: "N/A",
    difficulty: [1,1,1,1,0],
    reviews: [1,1,1,0,0]
  },
  {// ID: 2 | AntiguoTeleferico
    id: 2,
    name: "Antiguo Teleferico",
    bannerImage: TeleMapa,
    title: "Descubre la historia del Antiguo Teleferico,  el 'teleférico fantasma'.",
    description: "El Lirón es una subestación histórica ubicada en el corazón del Parque Nacional Ávila, que alguna vez formó parte del icónico sistema Teleférico del Ávila que conectaba Caracas con la región costera. Inaugurada en 1956 durante el gobierno del general Marcos Pérez Jiménez, la estación jugó un papel crucial en la gestión del movimiento de las cabinas de los teleféricos en su recorrido entre los picos de Ávila y el Litoral. Hoy en día, aunque el sistema de teleférico ha estado inactivo durante décadas, El Lirón sigue siendo un símbolo de la rica historia de la región, que ofrece a los visitantes una visión del pasado y las impresionantes vistas de la costa de Caracas.",
    imageOne: tele1,
    imageTwo: tele2,
    imageThree: tele3,
    imageFour: tele4,
    especial: "N/A",
    difficulty: [1,1,1,1,1],
    reviews: [1,1,0,0,0]
  },
  {// ID: 3 | Sabas Nieves
    id: 3,
    name: "Sabas Nieves",
    bannerImage: SabasMapa,
    title: "Uno de los paseos que más se hacen al Ávila es, sin duda alguna, la subida al puesto de guardaparques de Sabas Nieves.",
    description: "Sabas Nieves es uno de los principales puntos de entrada del Parque Nacional El Ávila en Caracas, Venezuela. Popular entre los amantes del senderismo, esta ruta ofrece una mezcla de desafíos moderados y paisajes fascinantes. El sendero serpentea a través de frondosos bosques, conducente a vistas panorámicas de la ciudad, y es el lugar ideal para aquellos que buscan una escapada natural sin alejarse demasiado de la urbe.",
    imageOne: sabas1,
    imageTwo: sabas2,
    imageThree: sabas3,
    imageFour: sabas4,
    especial: "N/A",
    difficulty: [1,1,1,1,1],
    reviews: [1,1,0,0,0]
  },
  {// ID: 4 | Galipan
    id: 4,
    name: "Galipan",
    bannerImage: GaliMapa,
    title: "En Galipán encontrarás una variedad de sabores locales que se fusionan con influencias de otras culturas",
    description: "Este encantador pueblo de montaña, ubicado a tan solo un suspiro de Caracas, es un refugio de paz y naturaleza en medio del ajetreo y el bullicio de la ciudad. Desde las impresionantes vistas hasta la gastronomía local, Galipán tiene mucho que ofrecer.",
    imageOne: gali1,
    imageTwo: gali2,
    imageThree: gali3,
    imageFour: gali4,
    especial: "N/A",
    difficulty: [1,1,1,1,1],
    reviews: [1,1,0,0,0]
  }
]

const Destino = () => {
  let params = useParams()
  const navigate = useNavigate();
  const [rutasActivas, setRutasActivas]= useState([])
  
  async function checkRutas() {
    let querySnapshot = await getDoc(doc(db, "rutas", "gGOg5ObNJu6ZVH6ykCjZ"));
    if(!querySnapshot.data().rutasActivas[params.id]) navigate("/home")
    setRutasActivas(querySnapshot.data().rutasActivas)
  }

  useEffect(() => {
    checkRutas()
    window.scrollTo(0, 0)
  }, [])

  let info = allInfo[params.id]
  return <>
    <img className="banner" src={info.bannerImage} />
    <div className="options-container">
      <div style={{backgroundImage:`url(${TelefericoOption})`, display:rutasActivas[2]?"flex":"none"}} onClick={()=> navigate("/destino/2")}>
        <h2 >{params.id==2?"":"Antiguo Teleferico"}</h2>
      </div>
      <div style={{backgroundImage:`url(${QuebradaOption})`, display:rutasActivas[0]?"flex":"none"}} onClick={()=> navigate("/destino/0")} >
        <h2>{params.id==0?"":"Quebrada Quintero"}</h2>
      </div>
      <div style={{backgroundImage:`url(${LagunazoOption})`, display:rutasActivas[1]?"flex":"none"}} onClick={()=> navigate("/destino/1")}>
        <h2>{params.id==1?"":"Lagunazo"}</h2>
      </div>
      <div style={{backgroundImage:`url(${SabasOption})`, display:rutasActivas[3]?"flex":"none"}} onClick={()=> navigate("/destino/3")}>
        <h2>{params.id==3?"":"Sabas Nieves"}</h2>
      </div>
      <div style={{backgroundImage:`url(${GaliOption})`, display:rutasActivas[4]?"flex":"none"}} onClick={()=> navigate("/destino/4")}>
        <h2>{params.id==4?"":"Galipan"}</h2>
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
      <div onClick={() => navigate("/foro")} style={{ cursor: "pointer" }}>
        <h2 style={{ backgroundColor: "#FF6709" }}>Ver Reseñas</h2>
      </div>
      <div onClick={() => navigate("/consejos")} style={{ cursor: "pointer" }}>
        <h2 style={{ backgroundImage: `url(${TelefericoOption})` }}>Consejos de Seguridad</h2>
      </div>
    </div>
  </>;

};

export default Destino;