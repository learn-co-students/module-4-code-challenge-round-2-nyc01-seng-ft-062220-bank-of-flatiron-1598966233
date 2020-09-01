import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


class AccountContainer extends React.Component {

  state = {
  data: [],
  date: '',
  description: '',
  category: '',
  amount: '',
  searchResult: ''
  }

componentDidMount = () => {
      fetch("http://localhost:6001/transactions")
      .then(response => response.json())
      .then(data => this.setState({data: data}))
  }

  changeHandler =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  filteredResults = () => {
  let filteredData = [...this.state.data]
  if (this.state.searchResult !== ''){
  let filteredData = filteredData.filter(t => t.description.toLowerCase().includes(this.state.searchResult.toLowerCase()))}
  return filteredData
  } 

handleSubmit = (object) => {
  fetch("http://localhost:6001/transactions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "accept": "application/json"
      },
      body: JSON.stringify({
          object
      })})
        .then(response => response.json())
        .then(console.log("newTransactionAdded!"))}
  
  render() {
    return (
      <div>
        <Search value={this.state.searchResult} changeHandler={this.changeHandler} />
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        <TransactionsList data={this.filteredResults()} />
      </div>
    );
  }
}

export default AccountContainer;
