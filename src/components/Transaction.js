import React from "react";

const Transaction = (props) => {
  const deleteTransaction =()=>{
    props.deleteTransaction(props.id)
  }

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      <td><button onClick={deleteTransaction}>Delete Transaction</button></td>
    </tr>
  );
};

export default Transaction;
