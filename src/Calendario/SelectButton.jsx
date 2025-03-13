"use client";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 25px;
  background-color: rgba(255, 103, 9, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  align-self: start;
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
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 103, 9, 0.8);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
  }
`;

export const SelectButton = () => {
  return <Button aria-label="Select date">SELECCIONAR</Button>;
};
