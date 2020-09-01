import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

var URL = 'http://localhost:6001/transactions/'

class AccountContainer extends Component {

  constructor () {
    super()
    this.state = {
      isLoaded : false
    }
  }

  componentDidMount () {
    fetch(URL)
      .then(response => response.json())
      .then(transactions => {
        this.setState({
          transactions : transactions,
          isLoaded : true
        })
      })
  }

  addTransaction = (newTransaction) => {

    const configObj = {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body : JSON.stringify(newTransaction)
    }

    fetch(URL, configObj)
      .then(response => response.json())
      .then(newTransaction => {
        this.setState({
          transactions : [...this.state.transactions, newTransaction]
        })
      })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.addTransaction} />
        {this.state.isLoaded === true ? <TransactionsList transactions={this.state.transactions}/> : "Loading!" }
      </div>
    );
  }
}

export default AccountContainer;
