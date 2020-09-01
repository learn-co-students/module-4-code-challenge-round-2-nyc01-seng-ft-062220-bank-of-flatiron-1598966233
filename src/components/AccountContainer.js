import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state ={
    transactions: [],
    filteredTransactions: []
  }

  componentDidMount(){
    this.getTrasaction()
  }

  addNewTransaction = (newTransObj) => {
    this.setState({transactions: [...this.state.transactions, newTransObj]})
  }

  searchHandler = (searchTerm) => {
    let filteredArray = this.state.transactions.filter(transaction => 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    this.setState({filteredTransactions: filteredArray})
  }

  sortHandler = (type) => {
    console.log(type) // extra deliverable
    if (type === "Description") { // for somereason this does not match
      console.log("Description")
      this.setState({transactions: this.state.transactions.sort((a,b) => {
        if (a.description < b.description) return -1 ;
        else if (a.description > b.description) return 1;
        return 0
        })
      })
    }
  }

  getTrasaction = () => {
    fetch("http://localhost:3000/transactions")
    .then(resp => resp.json())
    .then (transactionArray => this.setState({transactions: transactionArray}))
  }

  newId = () => {
    return this.state.transactions.length + 1
  }

  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} newId={this.newId()}  />
        <TransactionsList transactions={this.state.transactions} filteredTransactions={this.state.filteredTransactions} sortHandler={this.sortHandler} />
      </div>
    );
  }
}

export default AccountContainer;
