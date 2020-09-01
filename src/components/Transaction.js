import React from "react";

const Transaction = ({soloTrans}) => {
  
  return (
    <tr>
      <td>{soloTrans.date}</td>
      <td>{soloTrans.description}</td>
      <td>{soloTrans.category}</td>
      <td>{soloTrans.amount}</td>
    </tr>
  );
};

export default Transaction;
