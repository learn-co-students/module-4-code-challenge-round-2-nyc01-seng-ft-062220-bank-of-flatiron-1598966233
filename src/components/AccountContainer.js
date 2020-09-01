import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactionsArray: [],
    filteredTransactions: []
  }
  
  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch(`http://localhost:6001/transactions`)
    .then(r => r.json())
    .then(data => this.setState({
      transactionsArray: data,
      filteredTransactions: data
    }))
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
    .then(newTransaction => this.setState({
      transactionsArray: [...this.state.transactionsArray, newTransaction],
      filteredTransactions: [...this.state.transactionsArray, newTransaction]
    }, () => this.searchHandler(this.state.search)))
  }

  appHandler = transaction => {
    this.postTransaction(transaction)
  }

  searchHandler = search => {
    const filteredTransactions = this.state.transactionsArray
    .filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))

    this.setState({
      filteredTransactions: filteredTransactions,
      search: search
    })
    //assigned filteredarray to its own state so that the search wouldnt overwrite the original list
    //if it overwrites the list then you can't backspace in search to see more results
    //this way allows backspacing but doesn't let posts show up without refreshing or searching
    //I could have posts also add to filtered array instead of just original array but then it would
    //erronuously display posts in the middle of searches at least until more characters 
    //were typed and the search refiltered
    //OK nevermind it works
    //I saved the search to state, added posts to the filteredarray, 
    //and refiltered after each post using the state search
  }
  
  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler}/>
        <AddTransactionForm appHandler={this.appHandler}/>
        <TransactionsList transactions={this.state.filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
