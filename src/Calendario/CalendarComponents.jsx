"use client";
import React from "react";

export const CalendarDayNames = () => {
  const days = ["lun", "mar", "mie", "jue", "vie", "sab", "dom"];

  return (
    <div className="day-names">
      <h2 className="month-name">Enero</h2>
      {days.map((day) => (
        <div key={day} className="day-name" role="columnheader">
          {day}
        </div>
      ))}

      <style jsx>{`
        .day-names {
          display: flex;
          width: 100%;
          max-width: 1004px;
          flex-direction: column;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 30px;
          color: rgba(255, 255, 255, 1);
          font-weight: 700;
          text-align: center;
        }

        .month-name {
          align-self: center;
          margin: 0;
          font-size: 30px;
        }

        .day-name {
          margin: 10px 0;
        }

        @media (max-width: 991px) {
          .day-names {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export const CalendarWeek = ({ numbers }) => {
  return (
    <div className="week" role="row">
      {numbers.map((number) => (
        <CalendarDay key={number} number={number} />
      ))}

      <style jsx>{`
        .week {
          display: flex;
          margin-top: 25px;
          width: 100%;
          max-width: 1004px;
          justify-content: space-between;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .week {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export const CalendarDay = ({ number }) => {
  return (
    <button className="day-cell" role="gridcell" aria-label={`Day ${number}`}>
      {number}

      <style jsx>{`
        .day-cell {
          border-radius: 5px;
          background-color: rgba(3, 29, 49, 1);
          border: 1px solid rgba(0, 0, 0, 1);
          min-height: 121px;
          width: 122px;
          padding: 10px;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 30px;
          color: rgba(255, 250, 250, 1);
          font-weight: 400;
          text-align: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .day-cell:hover {
          background-color: rgba(3, 29, 49, 0.8);
        }

        .day-cell:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        @media (max-width: 991px) {
          .day-cell {
            margin-top: 25px;
          }
        }
      `}</style>
    </button>
  );
};
