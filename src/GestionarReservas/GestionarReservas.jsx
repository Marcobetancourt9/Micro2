import { useEffect, useState } from "react";
import { app, db } from "../../credentials";
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router";
import "./GestionarReservas.css"


const GestionarReservas = () => {
    const [usuariosConReservas, setUsuariosConReservas] = useState([])

    async function getReservas() {
        const querySnapshot = await getDocs(collection(db, "users"));
        let users = []
        querySnapshot.forEach((doc) => {
            if(doc.data().reservations) {
                users.push(doc.data())
            }
        });
        setUsuariosConReservas(users)
    }

    useEffect(() => {
        getReservas();
    }, []);

    return  <>
    <div className="reservas-container" onClick={()=>console.log(usuariosConReservas)}>
        <h1>Reservaciones</h1>
        {usuariosConReservas.map((user)=> {
            return (<>
            <div className="user-container">
                <h2>{user.nombre} {user.apellido}</h2>   
                <h4>{user.telefono} | {user.email}</h4>
                <h3>RESERVAS</h3>
                <div className="reservas">
                    {user.reservations.map((r)=>{
                        return <p>{r.day} de {r.mes} de 2025</p>
                    })}
                </div>
            </div>
            
            </>
            )
        })}
    </div>
    </>
}

export default GestionarReservas