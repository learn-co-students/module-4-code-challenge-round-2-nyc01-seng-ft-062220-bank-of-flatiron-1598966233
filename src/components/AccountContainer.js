import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    myTransactions: []
  }

  async componentDidMount(){
    let response = await fetch("http://localhost:6001/transactions")
    let data = await response.json()
    this.setState({myTransactions: data})
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.myTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
