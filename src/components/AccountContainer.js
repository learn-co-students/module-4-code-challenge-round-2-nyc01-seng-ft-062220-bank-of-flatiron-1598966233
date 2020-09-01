import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const url = "http://localhost:6001/transactions"

class AccountContainer extends Component {
state = {
  transactionsArray: []
}

componentDidMount(){
this.getTransactions()
}

getTransactions = () =>{
  fetch(url)
  .then(resp => resp.json())
  .then(transactions => this.setState({transactionsArray: transactions}))
}

submitHandler =({date,description,category,amount})=>{
  let newTrans = {
    method: "POST",
    headers:{ 
      "Content-Type":"application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({
      date:date, 
      description:description,
      category:category,
      amount:amount
    })
  }
  fetch(url,newTrans)
  .then(resp => resp.json())
  .then(trans => this.setState({
    transactionsArray : [...this.state.transactionsArray,trans]
  }))
}

  render() {
  
    return (
      <div>
        <Search />
        <AddTransactionForm addTrans={this.submitHandler}/>
        <TransactionsList allTransactions={this.state.transactionsArray} />
      </div>
    );
    
  }
}

export default AccountContainer;
