import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactionArray: []
  }


  componentDidMount() {
    this.getTransactionArray()
  }

  getTransactionArray = () => {
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => {
      this.setState({
        transactionArray: transactions
      })
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm getTransactionArray={this.getTransactionArray}/>
        <TransactionsList transactionArray={this.state.transactionArray} />
      </div>
    );
  }
}

export default AccountContainer;
