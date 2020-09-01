import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  let transactions = props.transactions.map((obj) => <tr><td> {obj.date} </td> 
                                                     <td>{obj.description}</td>         
                                                     <td>{obj.category} </td >
                                                     <td>{obj.amount}</td></tr>
  )
                                               
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        { transactions }
      </tbody>
    </table>
  );
};

export default TransactionsList;
