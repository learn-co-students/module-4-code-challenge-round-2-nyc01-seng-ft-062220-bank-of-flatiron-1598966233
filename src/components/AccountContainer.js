import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    myTransactions: [],
    searchValue: ""
  }

  async componentDidMount(){
    let response = await fetch("http://localhost:6001/transactions")
    let data = await response.json()
    this.setState({myTransactions: data})
  }

  addTransaction = async (newTransactionObj) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newTransactionObj)
    }
    let response = await fetch("http://localhost:6001/transactions", options)
    let data = await response.json()
    // console.log(data.id)
    // time permitting, use this response to update state id (can be a method of validating successful posts)
  }

  deleteTransaction = async (transactionId) => {
    let response = await fetch(`http://localhost:6001/transactions/${transactionId}`, {method: "DELTE"})
    let data = await response.json()

  }

  removeTransaction = (transactionObj) => {
    console.log("AC-deleting..", transactionObj)
    // temporarily going by description since posting records optimistically without updating for DB's id is a better benchmark for uniqueness
    const newTransactionsArr = this.state.myTransactions.filter(transaction => transaction.description !== transactionObj.description)
    this.setState({myTransactions: newTransactionsArr})

    if (transactionObj.id) {
      this.deleteTransaction(transactionObj.id)
    }
  }

  formSubmitHandler = (newTransactionObj) => {
    newTransactionObj.id = null
    const newTransactionsArr = [...this.state.myTransactions, newTransactionObj]
    this.setState({myTransactions: newTransactionsArr})
    this.addTransaction(newTransactionObj)
  }

  searchChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  filteredTransactionsByDescription = () => {
    if (this.state.searchValue === ""){
      return this.state.myTransactions
    } else {
      return this.state.myTransactions.filter(transactionObj => transactionObj.description.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
  }

  render() {
    return (
      <div>
        <Search searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
        <AddTransactionForm submitHandler={this.formSubmitHandler}/>
        <TransactionsList transactions={this.filteredTransactionsByDescription()} removeTransaction={this.removeTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
