import React from "react";

const Transaction = (props) => {
  
  return (
    <tr>
      <td>{props.transcation.date}</td>
      <td>{props.transcation.description}</td>
      <td>{props.transcation.category}</td>
      <td>{props.transcation.amount}</td>
    </tr>
  );
};

export default Transaction;
