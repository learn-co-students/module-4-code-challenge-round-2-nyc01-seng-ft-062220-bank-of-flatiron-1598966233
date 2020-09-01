import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

let API = 'http://localhost:6001/transactions/'

class AccountContainer extends Component {
  
  constructor() {
    super()
    this.state = {
      transactions: [],
      filtered: []
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

  searchHandler = (e) => {
    console.log(e.target.value)
    const filteredState = this.state.transactions.filter(element => {
      return (element.description.includes(e.target.value) || element.category.includes(e.target.value))
    })
    console.log(filteredState)
    this.setState({filtered: filteredState})
  }

  render() {
    return (
      <div>
        <Search search={this.searchHandler}/>
        <AddTransactionForm submit={this.submitHandler}/>
        <TransactionsList filtered={this.state.filtered} transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
