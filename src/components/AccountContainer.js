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
        console.log(transactions)
        this.setState({
          transactions : transactions,
          isLoaded : true
        })
      })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {this.state.isLoaded === true ? <TransactionsList transactions={this.state.transactions}/> : "Loading!" }
      </div>
    );
  }
}

export default AccountContainer;
