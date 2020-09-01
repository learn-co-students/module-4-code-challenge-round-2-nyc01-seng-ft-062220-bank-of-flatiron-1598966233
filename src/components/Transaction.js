import React from "react";

const Transaction = ({singleTrans}) => {
  return (
    <tr>
      <td>{singleTrans.date}</td>
      <td>{singleTrans.description}</td>
      <td>{singleTrans.category}</td>
      <td>{singleTrans.amount}</td>
    </tr>
  );
};

export default Transaction;
