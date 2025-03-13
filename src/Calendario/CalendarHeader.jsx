import React, { useState } from 'react';
import { months } from './CalendarData'; // Importar months desde CalendarData.js

function CalendarHeader({ currentDate, onMonthChange }) {
  const [date, setDate] = useState(currentDate || new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(newDate);
    onMonthChange(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(newDate);
    onMonthChange(newDate);
  };

  const getMonthName = (date) => {
    return months[date.getMonth()]; // Usar months importado
  };

  return (
    <div className="calendar-header">
      <button onClick={handlePrevMonth}>Anterior</button>
      <span>{getMonthName(date)} {date.getFullYear()}</span>
      <button onClick={handleNextMonth}>Siguiente</button>
    </div>
  );
}

export default CalendarHeader;