import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactionsArray: []
  }
  
  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(data => this.setState({transactionsArray: data}))
  }

  postTransaction = transaction => {
    fetch(`http://localhost:6001/transactions`, {
      method: `POST`,
      headers: {
        "content-type": `application/json`,
        accept: `application/json`
      },
      body: JSON.stringify(transaction)
    })
    .then(r => r.json())
    .then(newTransaction => this.setState({transactionsArray: [...this.state.transactionsArray, newTransaction]}))
  }

  appHandler = transaction => {
    this.postTransaction(transaction)
  }
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm appHandler={this.appHandler}/>
        <TransactionsList transactions={this.state.transactionsArray}/>
      </div>
    );
  }
}

export default AccountContainer;
