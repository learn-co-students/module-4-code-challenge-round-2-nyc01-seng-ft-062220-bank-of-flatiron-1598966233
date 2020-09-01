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

  addTransaction = async (newTransactionObj) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newTransactionObj)
    }
    let response = await fetch("http://localhost:6001/transactions", options)
    let data = await response.json()
    // console.log(data.id)
    // time permitting, use this response to update state id (can be a method of validating successful posts)
  }

  formSubmitHandler = (newTransactionObj) => {
    newTransactionObj.id = null
    const newTransactionsArr = [...this.state.myTransactions, newTransactionObj]
    this.setState({myTransactions: newTransactionsArr})
    this.addTransaction(newTransactionObj)
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm submitHandler={this.formSubmitHandler}/>
        <TransactionsList transactions={this.state.myTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
