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
      alert(`The transaction ${response.description} was submitted successfully`)
    }
  }

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

  handleOnChange = (event) => {
    let lowercaseSaerchTerm = event.target.value.toLowerCase()
    this.setState({
      searchTerm: lowercaseSaerchTerm
    },() => console.log(this.state.searchTerm))

    this.filterSearch()
  }

  filterSearch = () => {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} transactions={this.filterSearch()}/>
      </div>
    );
  }
}

export default App;
