"use client";
import React from "react";
import Header from "../Header";
import CalendarGrid from "./CalendarGrid";

const CalendarView = () => {
  return (
    <section className="calendar-container">
      <Header />
      <CalendarGrid />
      <button className="select-button" aria-label="Select date">
        SELECCIONAR
      </button>

      <style jsx>{`
        .calendar-container {
          background-color: rgba(3, 29, 49, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(0, 0, 0, 1);
          display: flex;
          padding: 50px 65px 217px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
        }

        .select-button {
          border-radius: 25px;
          background-color: rgba(255, 103, 9, 1);
          border: 1px solid rgba(0, 0, 0, 1);
          align-self: flex-start;
          margin-top: 56px;
          min-height: 108px;
          padding: 43px 10px;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 30px;
          color: rgba(255, 250, 250, 1);
          font-weight: 800;
          text-align: center;
          margin-right: 200px;
          cursor: pointer;
        }

        .select-button:hover {
          opacity: 0.9;
        }

        .select-button:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        @media (max-width: 991px) {
          .calendar-container {
            padding: 20px 20px 100px;
          }

          .select-button {
            max-width: 100%;
            margin-top: 40px;
            white-space: initial;
          }
        }
      `}</style>
    </section>
  );
};

export default CalendarView;
