"use client";
import React from "react";
import styled from "styled-components";

const WeekDaysContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1004px;
  flex-direction: column;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 30px;
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const MonthTitle = styled.h1`
  align-self: center;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  margin-top: 20px;
  position: relative;
`;

const DayLabel = styled.div`
  font-weight: 700;
  text-transform: capitalize;
`;

export const WeekDays = () => {
  return (
    <WeekDaysContainer>
      <MonthTitle>Enero</MonthTitle>
      <DaysGrid>
        <DayLabel>lun</DayLabel>
        <DayLabel>mar</DayLabel>
        <DayLabel>mie</DayLabel>
        <DayLabel>jue</DayLabel>
        <DayLabel>vie</DayLabel>
        <DayLabel>sab</DayLabel>
        <DayLabel>dom</DayLabel>
      </DaysGrid>
    </WeekDaysContainer>
  );
};
