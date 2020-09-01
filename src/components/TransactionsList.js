import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  let transaction = props.transactions.map(transactionObject => <Transaction transaction={transactionObject} deleteTransaction={props.deleteTransaction}/>)
  return (
    
    <><button>Sort By Category</button>
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
        { transaction }
      </tbody>
    </table>
    </>
  );
};

export default TransactionsList;
