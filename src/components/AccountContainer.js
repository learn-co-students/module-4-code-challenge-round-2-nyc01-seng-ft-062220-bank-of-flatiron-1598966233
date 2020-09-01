import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = 'http://localhost:3000/transactions/'

class AccountContainer extends Component {

  state = {
    transactions: [],
    filtered: [],
    searchTerm: ''
  }

  getTransactions = ()=>{
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ transactions: data })
      )}

  componentDidMount() {
    this.getTransactions()
  }


  searchHandler = (e) => {
    e.preventDefault()
    let result = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(e.target.value) )
    this.setState({ filtered: result, searchTerm: e.target.value })

  }

  deleteHandler = (props) => {
    console.log(props.transaction.id)
    let id = props.transaction.id
    let idx = this.state.transactions.indexOf(props.transaction)
    let newState = this.state.transactions.splice(idx, 1)
    this.setState({...newState })

    fetch(URL + `${id}`, {
      method: 'DELETE'
    })
  }

  updateTransactions = (newState) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  submitHandler = (e, props) => {
    e.preventDefault()
    this.setState({...this.state.transactions.push(props)})
    this.updateTransactions(props)
  }

  render() {
    return (
      <div>
        <Search search={this.searchHandler} />
        <AddTransactionForm submitHandler={this.submitHandler}/>
        { this.state.searchTerm !== '' ? 

        <TransactionsList transactions={this.state.filtered}  deleteTransaction={this.deleteHandler} /> 
        :
        <TransactionsList transactions={this.state.transactions}  deleteTransaction={this.deleteHandler} />

      }
      </div>
    );
  }
}

export default AccountContainer;
