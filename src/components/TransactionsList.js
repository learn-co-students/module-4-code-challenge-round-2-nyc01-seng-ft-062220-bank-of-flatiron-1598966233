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
  
  // transactions = () => {
  //   return this.filterTransactions().map((transaction) => (
  //     <Transaction key={transaction.id} transaction={transaction} />
  //   ));
  // };

  // filterTransactions = () => {
  //   return this.state.transactions.filter((transaction)=> transaction.description.includes(this.props.searchTerm))
  // }

  newTransaction = (transaction) => {
    this.setState({transactions: [...this.state.transactions, transaction]})

    let object = {
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      amount: transaction.amount
    }

    fetch("http://localhost:6001/transactions", {
      method: "POST",
      body: JSON.stringify({object}),
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
  };

  render() {
    console.log(this.props.newTransaction)
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
