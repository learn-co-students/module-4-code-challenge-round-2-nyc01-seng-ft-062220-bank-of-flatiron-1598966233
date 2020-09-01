import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const API = "http://localhost:6001/transactions"


class App extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }


  async componentDidMount() {
    let response = await fetch(API)
    let data = await response.json()
    this.setState({
      transactions: data
    })
  }

  //post call with new transaction
  postTransaction = async (body) => {
    
    const config = {
      method: 'POST',
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    const response = await fetch(API, config)
    if(response.ok){
      alert(`The transaction was submitted successfully`)
    }
  }
  //delete transaction call 

  deleteTransaction = async (id) => {
    
    const config = {
      method: 'DELETE',
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(`${API}/${id}`, config)
    if(response.ok){
     alert(`The transaction was deleted successfully`)
    }
  }

  //form submission
  handleSubmit = (event) => {
    event.preventDefault();
    let date = event.target.date.value
    let description = event.target.description.value
    let category = event.target.category.value
    let amount = event.target.amount.value
    let newTransactionObj = {
      id: this.state.transactions.length + 1,
      date: date,
      description: description,
      category: category,
      amount: amount
    }
    this.setState({
      transactions: [...this.state.transactions, newTransactionObj]
    }, () => this.postTransaction(newTransactionObj))

  }
  //fill search term
  handleOnChange = (event) => {
    let lowercaseSaerchTerm = event.target.value.toLowerCase()
    this.setState({
      searchTerm: lowercaseSaerchTerm
    },() => console.log(this.state.searchTerm))

    this.filterSearch()
  }

  //search filter
  filterSearch = () => {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm))
  }

  //delete transaction
  handleOnClick = (id) => {
    this.deleteTransaction(id)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer onClick={this.handleOnClick} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} transactions={this.filterSearch()}/>
      </div>
    );
  }
}

export default App;
