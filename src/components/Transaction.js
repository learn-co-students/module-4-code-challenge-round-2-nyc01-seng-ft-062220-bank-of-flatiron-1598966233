import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td><button type="button" key={props.transaction.id} id={props.transaction.id} onClick={event => props.deleteTransaction(event)}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
