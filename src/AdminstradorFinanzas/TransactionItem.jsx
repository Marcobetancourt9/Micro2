"use client";
import React from "react";
import "./TransactionItem.css";


function TransactionItem({ description }) {
  return (
    <article className="transaction-item">
      <p className="transaction-description">{description}</p>
      <button className="transaction-button">Chequear transacción</button>
    </article>
  );
}

export default TransactionItem;