import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td><button className="delete" onClick={(e) => {props.deleteTransaction(props)}}>X</button>{ props.transaction.date }</td>
      <td>{ props.transaction.description }</td>
      <td>{ props.transaction.category }</td>
      <td>{ props.transaction.amount }</td>
    </tr>
  );
};

export default Transaction;
