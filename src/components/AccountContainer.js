import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(){
    super()
    this.state={
      originalAPI:[],
      transactions: []
    }
  }
    api = "http://localhost:6001/transactions/"

      componentDidMount=()=>{
        this.getTransactions()
      }


      getTransactions=()=>{
        fetch(this.api)
        .then(response => response.json())
        .then(transactionObj => this.setState({
          ...this.state,
          originalAPI: transactionObj,
          transactions: transactionObj

        })
        )

      }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
