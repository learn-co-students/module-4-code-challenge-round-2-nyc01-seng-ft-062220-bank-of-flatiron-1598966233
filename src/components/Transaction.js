import React from "react";

const Transaction = ({transaction, removeTransaction}) => {

  const removeTransactionHelper = () => {
    removeTransaction(transaction)
  }

  return (
    <>
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
      <button onClick={removeTransactionHelper}>X</button>
    </>
  );
};

export default Transaction;
