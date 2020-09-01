import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    filteredTransactions: []
    
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
    console.log(e.target.value)
    let newTerm = e.target.value 
    let searchedTransactions = this.state.transactions.filter((transaction)=> transaction.description.toLowerCase().includes(newTerm.toLowerCase()))
    this.setState({
      search: newTerm,
      filteredTransactions: searchedTransactions
    })

    // this.setState({search: e.target.value})
    }

  // searchHandler =(e) => {
  //   const searchedTransactions = this.state.transactions.filter((transaction) => transaction.description.includes(e.target.value))
  //   this.setState({...this.state, 
  //     filteredTransactions: searchedTransactions
  //   })
  // }
  

    

  
  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} searchInput={this.state.search}/>
        <AddTransactionForm newTransaction = {this.newTransaction} />
        <TransactionsList filter={this.state.filteredTransactions}  transactions = {this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;


