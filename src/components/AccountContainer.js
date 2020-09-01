import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    trans: []
  }
  
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(trans => this.setState({trans: trans}))
  }

  addTrans = (obj) => {
    console.log(obj)

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify({
        date: obj.date,
        description: obj.description,
        category: obj.category,
        amount: parseInt(obj.amount) 
      })
    }

    fetch("http://localhost:6001/transactions", options)
    .then(res => res.json())
    .then(newObj => this.setState({
      trans: [...this.state.trans, newObj]
    }))
  }
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTrans={this.addTrans}/>
        <TransactionsList trans={this.state.trans}/>
      </div>
    );
  }
}

export default AccountContainer;
