"use client";
import React from "react";
import {
  CalendarDayNames,
  CalendarWeek,
  CalendarDay,
} from "./CalendarComponents";

const CalendarGrid = () => {
  return (
    <main className="calendar-grid">
      <CalendarDayNames />

      <div className="weeks-container">
        <CalendarWeek numbers={[1, 2, 3, 4, 5, 6, 7]} />
        <CalendarWeek numbers={[8, 9, 10, 11, 12, 13, 14]} />
        <CalendarWeek numbers={[15, 16, 17, 18, 19, 20, 21]} />
        <CalendarWeek numbers={[22, 23, 24, 25, 26, 27, 28]} />

        <div className="final-week">
          <div className="final-days">
            <CalendarDay number={29} />
            <CalendarDay number={30} />
            <CalendarDay number={31} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .calendar-grid {
          background-color: rgba(11, 64, 105, 1);
          display: flex;
          margin-top: 144px;
          padding: 114px 80px;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }

        .weeks-container {
          width: 100%;
          max-width: 1004px;
        }

        .final-week {
          margin-top: 25px;
          width: 416px;
          max-width: 100%;
        }

        .final-days {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .calendar-grid {
            max-width: 100%;
            padding: 100px 20px;
            margin-top: 40px;
          }

          .final-days {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
      `}</style>
    </main>
  );
};

export default CalendarGrid;
