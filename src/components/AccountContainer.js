import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    
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

  
  
  
  

  searchHandler = (e) => {
    const searchedTransactions = this.state.transactions.filter((transaction)=> transaction.description.includes(e.target.value))
    this.setState({...this.state,
    transactions: searchedTransactions})
  }
  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler}/>
        <AddTransactionForm newTransaction = {this.newTransaction} />
        <TransactionsList  transactions = {this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;