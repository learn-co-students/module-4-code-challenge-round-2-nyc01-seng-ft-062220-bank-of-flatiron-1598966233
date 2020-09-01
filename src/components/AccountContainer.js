import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    search: ""
  }


  submitHandler = (transaction) => {
    return transaction
  }

  search = (e) => {
    this.setState({search: e.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Search value={this.state.search} search={this.search} />
        <AddTransactionForm submitHandler={this.submitHandler} />
        <TransactionsList  transactions={this.state} newTransaction={this.submitHandler()}/>
      </div>
    );
  }
}

export default AccountContainer;
