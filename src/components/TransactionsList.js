import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component  {

  


  render() {

    let renderTransactions = this.props.transactions.map((transactionObj) => <Transaction key={transactionObj.id} transaction={transactionObj} />) 
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
          
          {/* {renderTransactions} */}

          { this.props.filter.length === 0 ? this.props.transactions.map((transactionObj) => <Transaction key={transactionObj.id} transaction={transactionObj} />) : this.props.filter.map(filter => <Transaction key={filter.id} transaction={filter} />) }
          
          
        </tbody>
      </table>
    );
  }
};

export default TransactionsList;
