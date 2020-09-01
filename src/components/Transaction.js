import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transObj.date}</td>
      <td>{props.transObj.description}</td>
      <td>{props.transObj.category}</td>
      <td>{props.transObj.amount}</td>
    </tr>
  );
};

export default Transaction;
