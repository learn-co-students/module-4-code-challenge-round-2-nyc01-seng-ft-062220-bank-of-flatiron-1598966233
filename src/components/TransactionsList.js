import React from "react";
import Transaction from "./Transaction";
//need to insert new table row with new table data containing the API data 
const TransactionsList = (props) => {

  let something = props.transactions.map(function(transaction){ return <Transaction key={transaction.id} transaction={transaction}/>})


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
        {something}
      </tbody>
    </table>
  );
};

export default TransactionsList;
