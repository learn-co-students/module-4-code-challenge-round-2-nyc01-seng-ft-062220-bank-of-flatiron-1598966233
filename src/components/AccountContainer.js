import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transaction: [],
    filterTransactions: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(data => this.setState({transaction: data}))

  }


  handleChange = (searchMe) => {
    console.log("SEARCH:", searchMe)
    this.setState(prevState => {
      const filterTransactions = prevState.transaction.filter(trans => 
        trans.description.toLowerCase().includes(searchMe.toLowerCase()) 
        )
      return {
        filterTransactions
      }
    })
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transaction}/>
      </div>
    );
  }
}

export default AccountContainer;
