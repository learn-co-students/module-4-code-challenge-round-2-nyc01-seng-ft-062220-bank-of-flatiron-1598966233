import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transaction: [],
    searchWord: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(data => this.setState({transaction: data}))

  }

  searchTerm = (event) => {
    this.setState({searchWord: event.target.value})
  }

  searchArray = () => {
    return this.state.transaction.filter((seaObj =>
      seaObj.description.toLowerCase().includes(this.state.searchWord.toLowerCase())))
  }

  render() {

    // console.log(this.state)
    // let newArray = this.state.transaction.map(TranObj => <)
    return (
      <div>
        <Search value={this.state.searchWord} changeHandler={this.searchTerm}/>
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
