import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  let transList = props.transcation.map(tran)
    // let newArray = this.state.transaction.map(TranObj => <)
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
        {/* render Transactions here */}
        
      </tbody>
    </table>
  );
};

export default TransactionsList;
