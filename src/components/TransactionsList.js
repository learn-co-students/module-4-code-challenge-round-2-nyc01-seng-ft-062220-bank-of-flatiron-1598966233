import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const showingTransactions = () => {
    

   return props.transactions.map((transactionObj)=> <Transaction key={transactionObj.id} description={transactionObj.description} date={transactionObj.date} category={transactionObj.category} amount={transactionObj.amount} /> )
  }





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
        {showingTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
