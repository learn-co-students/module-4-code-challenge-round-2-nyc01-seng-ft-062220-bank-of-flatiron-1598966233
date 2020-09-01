import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

let API = 'http://localhost:6001/transactions/'

class AccountContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  fetchCall = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      //console.log("fetch data is: ", data)
      this.setState({transactions: data})
    })
  }

  componentDidMount() {
    this.fetchCall()
  }
  postCall = (transObj) => {
    console.log('object being passed: ', transObj)
    fetch(API, {
      method: 'POST',
      body: JSON.stringify(transObj),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState(prevState => {
        return {transactions: [...prevState.transactions, data]}
      })
    })
  }

  submitHandler = (e, transObj) => {
    e.preventDefault()
    console.log(transObj)
    this.postCall(transObj)
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm submit={this.submitHandler}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
