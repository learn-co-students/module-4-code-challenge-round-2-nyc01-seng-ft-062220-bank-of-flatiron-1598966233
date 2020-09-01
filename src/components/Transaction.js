import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td><button onClick={() => props.deleteit(props.transaction.id)}>delete</button></td>
    </tr>
  );
};

export default Transaction;
