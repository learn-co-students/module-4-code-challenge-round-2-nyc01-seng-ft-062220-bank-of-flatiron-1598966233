import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transObj.date}</td>
      <td>{props.transObj.description}</td>
      <td>{props.transObj.category}</td>
      <td>{props.transObj.amount}</td>
      <td><button onClick={(e) => {
        props.delHandler(props.transObj)
      }}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
