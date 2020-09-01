import React from "react";

const Transaction = (props) => {
  

  return (
    <tr>
      <td>{props.transObject.date}</td>
      <td>{props.transObject.description}</td>
      <td>{props.transObject.category}</td>
      <td>{props.transObject.amount}</td>
    </tr>
  );
};

export default Transaction;
