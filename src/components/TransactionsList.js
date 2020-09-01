import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((res) => res.json())
      .then((transactions) => {
        this.setState({ transactions: transactions });
      });
  }
  transactions = () => {
    return this.state.transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));
  };

  newTransaction = (transaction) => {
    console.log(transaction)
  }

  render() {
    this.newTransaction()
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
          {this.transactions()}
        </tbody>
      </table>
    );
  }
}

export default TransactionsList;
