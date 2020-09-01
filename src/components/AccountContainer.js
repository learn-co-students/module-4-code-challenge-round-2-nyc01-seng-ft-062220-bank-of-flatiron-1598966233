import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  submitHandler = (transaction) => {
    return transaction
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm submitHandler={this.submitHandler} />
        <TransactionsList  newTransaction={this.submitHandler()}/>
      </div>
    );
  }
}

export default AccountContainer;
