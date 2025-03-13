"use client";
import React from "react";
import styled from "styled-components";
import { DateCell } from "./DateCell";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1004px;
  margin-top: 25px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const DateGrid = () => {
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <GridContainer role="grid">
      {dates.map((date) => (
        <DateCell key={date} date={date} />
      ))}
    </GridContainer>
  );
};
