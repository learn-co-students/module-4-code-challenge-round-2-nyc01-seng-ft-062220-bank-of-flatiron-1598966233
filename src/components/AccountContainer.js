import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

state = {
  search: "",
  newTransaction: {}
}


  submitHandler = (transaction) => {
    this.setState({newTransaction: transaction})
  };

  search = (e) => {
     this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div>
        <Search value={this.state.search} search={this.search} />
        <AddTransactionForm submitHandler={this.submitHandler} />
        <TransactionsList
          searchTerm={this.state}
          newTransaction={this.state.newTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
