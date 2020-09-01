import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const url = "http://localhost:6001/transactions"

class AccountContainer extends Component {
state = {
  transactionsArray: []
}

componentDidMount(){
this.getTransactions()
}

getTransactions = () =>{
  fetch(url)
  .then(resp => resp.json())
  .then(transactions => this.setState({transactionsArray: transactions}))
}

  render() {
  
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList allTransactions={this.state.transactionsArray} />
      </div>
    );
    
  }
}

export default AccountContainer;
