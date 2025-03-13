"use client";
import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { WeekDays } from "./WeekDays";
import { DateGrid } from "./DateGrid";
import { SelectButton } from "./SelectButton";

const CalendarContainer = styled.main`
  background-color: rgba(3, 29, 49, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  padding: 50px 65px 217px;
  flex-direction: column;
  overflow: hidden;
  align-items: stretch;

  @media (max-width: 991px) {
    padding: 20px 20px 100px;
  }
`;

const CalendarContent = styled.section`
  background-color: rgba(11, 64, 105, 1);
  display: flex;
  margin-top: 144px;
  padding: 114px 80px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 20px;
    margin-top: 40px;
  }
`;

export const CalendarView = () => {
  return (
    <CalendarContainer>
      <Header />
      <CalendarContent>
        <WeekDays />
        <DateGrid />
      </CalendarContent>
      <SelectButton />
    </CalendarContainer>
  );
};
