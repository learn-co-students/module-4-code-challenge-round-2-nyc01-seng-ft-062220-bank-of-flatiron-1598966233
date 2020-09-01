import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount() {
    this.fetchTransactions()
  }
  
  fetchTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactionObj => this.setState({transactions: transactionObj}))

  }

  newTransaction = (transactionObj) => {
    // console.log("transaction Obj test", transactionObj)
    let newArr = [...this.state.transactions, transactionObj]
    // console.log("new Array Test", newArr)
    this.setState({...this.state, transactions: newArr})
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm newTransaction = {this.newTransaction} />
        <TransactionsList transactions = {this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
