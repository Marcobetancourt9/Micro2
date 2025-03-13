"use client";
import React from "react";
import styled from "styled-components";

const Cell = styled.button`
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
  height: 122px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(11, 64, 105, 0.8);
  }

  &:focus {
    outline: 2px solid rgba(255, 103, 9, 1);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const DateCell = ({ date }) => {
  return <Cell aria-label={`Select date ${date}`}>{date}</Cell>;
};
