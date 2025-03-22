"use client";
import React from "react";
import styles from "./Agregar.module.css";
import { allInfo } from "../Destinos/Destino";
import { doc, getDoc, updateDoc} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../credentials";

const MainImage = () => {
  return (
    <section className={styles.mainImageContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1766841f900ce419b84265a79829844ed7d504af6488c7d18208877f95c16025?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Imagen principal"
        className={styles.mainImage}
      />
    </section>
  );
};

const LocationCard = ({ backgroundImage, title, includes, array, setter, id }) => {

  async function setActive(id){
    let documento =  doc(db, "rutas", "gGOg5ObNJu6ZVH6ykCjZ");
    let tempArray = array;
    tempArray[id] = !tempArray[id]

    try{
      await updateDoc(documento, {rutasActivas: tempArray})
      setter(tempArray)
    }catch(err){
      throw(err)
    }

  }

  return (
    <article className={styles.locationCard} onClick={()=> setActive(id)} >
      <img
        src={backgroundImage}
        alt={`Fondo de ${title}`}
        style={includes? {}:{filter: 'brightness(0)'}}
        className={styles.locationBackground}
      />
      <div className={styles.locationTitle}>
        <h2>{title}</h2>
        <p style={includes? {}:{color: 'red'}}
        >{includes? "ACTIVA":"INACTIVA"}</p>
      </div>
    </article>
  );
};

const ActionButtons = () => {
  return (
    <div className={styles.actionButtonsContainer}>
      <button className={styles.deleteButton}>Eliminar ruta existente</button>
      <button className={styles.createButton}>Crear nueva ruta</button>
    </div>
  );
};

function Agregar() {
  const [rutasActivas, setRutasActivas] = useState([]);
  async function checkRutas() {
    let querySnapshot = await getDoc(doc(db, "rutas", "gGOg5ObNJu6ZVH6ykCjZ"));
    setRutasActivas(querySnapshot.data().rutasActivas)
  }

    useEffect(() => {
      checkRutas();
    }, [rutasActivas]);
  

  return (
    <main className={styles.slide1698}>
      <MainImage />
      <section className={styles.locationsSection}>
        {allInfo.map((x) => {
          return <LocationCard
            backgroundImage={x.imageOne}
            title={x.name}
            includes={rutasActivas[x.id]}
            array={rutasActivas}
            setter={setRutasActivas}
            id={x.id}
          />

        })}
      </section>
    </main>
  );
}

export default Agregar;
