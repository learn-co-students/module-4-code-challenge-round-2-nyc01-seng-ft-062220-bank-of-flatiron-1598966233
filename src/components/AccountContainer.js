import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
let url = "http://localhost:6001/transactions";

class AccountContainer extends Component {
  state = {
    transArray: [],
  };

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((transactions) => this.setState({ transArray: transactions }));
  };

  submitHandler = ({ date, description, category, amount }) => {
    let transObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    };
    fetch(url, transObj)
      .then((resp) => resp.json())
      .then((newTrans) =>
        this.setState({
          transArray: [...this.state.transArray, newTrans],
        })
      );
  };

  render() {
    return (
      <div>
        <AddTransactionForm submitHandler={this.submitHandler} />
        <TransactionsList allTrans={this.state.transArray} />
      </div>
    );
  }
}

export default AccountContainer;
