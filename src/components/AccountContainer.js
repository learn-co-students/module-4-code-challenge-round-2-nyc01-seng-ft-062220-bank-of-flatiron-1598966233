import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactionArray: [],
    filteredArray: []
  }

  searchHandler = () => {
    this.setState({
      transactionArray: this.state.filteredArray
    })
  }
  

  filterArray = (e) => {
    let filtered = this.state.transactionArray.filter(transaction => {
      transaction.description.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredArray: filtered //working asinchronously!!!
    })
    //invoke search handler somewhere
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
        <Search filterArray={this.filterArray}/>
        <AddTransactionForm getTransactionArray={this.getTransactionArray}/>
        <TransactionsList transactionArray={this.state.transactionArray} />
      </div>
    );
  }
}

export default AccountContainer;
