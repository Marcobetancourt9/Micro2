import Header from "../Header";
import { useState } from "react";
import "./Calendar.css"

//              [Nombre del mes, dias del mes, el mes empieza un miercoles(2)]
const months = [["Enero", 31, 2 ], ["Febrero", 28, 5], ["Marzo", 31, 5], ["Abril", 30, 1], ["Mayo", 31, 3], ["Junio", 30, 6],  ["Julio", 31, 1], ["Agosto", 31, 4],
["Septiembre", 30, 0],  ["Octubre", 31, 2], ["Noviembre", 30, 5], ["Diciembre", 31, 0]]
const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
let monthId = 0;

const Calendar = () => {
    const [selectedDay, setSelectedDay] = useState(0);
    const [month, setMonth] = useState(months[0]);    

    function handleMonth(x){
        if(x == 0){
            if(monthId == 0){}
            else monthId = monthId - 1;
        }else{
            if(monthId == 11){}
            else monthId = monthId + 1; 
        }
        setMonth(months[monthId]);
    }

    let emptyDays = [];
    for( let i = 0; i < month[2]; i++) emptyDays.push(0);
  return <>
    <div className="calendar-container">
        <div className="top-calendar">
            <div style={{transform: "scale(-1, 1)"}} className="arrow" onClick={()=> handleMonth(0)}>{monthId==0?"-":"➜"}</div>
            <h2 className="mes">{month[0]}</h2>
            <div className="arrow" onClick={()=> handleMonth(1)}>{monthId==11?"-":"➜"}</div>
        </div>
        <div className="calendar-content">
            <div className="day-names">
                {days.map((day)=> <h3>{day}</h3>)}
            </div>
            <div className="days">
                {emptyDays.map((day)=> <button className="day" style={{opacity: 0.7}}>-</button>)}

                {day.map((day)=> <button onClick={()=> setSelectedDay(day)}
                className="day"
                style={selectedDay==day?{background: "rgb(255, 157, 96)"} : {}}
                >{day}</button>)}
            </div>
        </div>
        <button className="select-button">
            SELECCIONAR
        </button>
    </div>
  </>;
};

export default Calendar;