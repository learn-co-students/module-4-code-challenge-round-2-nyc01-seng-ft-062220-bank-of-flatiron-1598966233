import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={ transactions: [] }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(transactionData => this.setState({transactions: transactionData}))
  }

  submitHandler = (newTransaction) => {
    //this posts to database and shows upon refresh.  will come back to fix it if time allows.
    let newTransArray = [...this.state.transactions, newTransaction]
    this.setState({transactionData: newTransArray})

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newTransaction)
    }
    fetch("http://localhost:6001/transactions", configObj)
    .then(resp => resp.json())
    .then(newTransaction => this.setState({transactionData: newTransArray}))

  }

  render() {
    return (
      <div>
        <AddTransactionForm submitHandler={this.submitHandler}/>
        <TransactionsList transactionArray={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
