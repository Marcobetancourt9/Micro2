"use client";
import React, { useState } from "react";
import { CalendarDayNames, CalendarDay } from "./CalendarComponents";
import { getDaysInMonth, getFirstDayOfMonth } from "./CalendarUtils";

const CalendarGrid = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const currentDate = new Date();
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayOfMonth = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const renderDays = () => {
        const days = [];
        let dayCounter = 1;

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        while (dayCounter <= daysInMonth) {
            const isSelected = dayCounter === selectedDay;
            days.push(
                <CalendarDay
                    key={dayCounter}
                    number={dayCounter}
                    isSelected={isSelected}
                    onClick={handleDayClick}
                />
            );
            dayCounter++;
        }

        return days;
    };

    return (
        <main className="calendar-grid">
            <CalendarDayNames currentDate={currentDate} />
            <div className="weeks-container">{renderDays()}</div>
        </main>
    );
};

export default CalendarGrid;