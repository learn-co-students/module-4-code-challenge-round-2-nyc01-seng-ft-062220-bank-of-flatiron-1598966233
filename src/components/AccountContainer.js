import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactionArray: [],
    searchVal: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(response => response.json())
      .then(transactionData => {this.setState({transactionArray: transactionData})})
  }

  submitHandler = (transObj) => {
  
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(transObj)
    }
    
    fetch("http://localhost:6001/transactions", configObj)
      .then(response => response.json())
      .then(newTrans => this.setState({...this.state, transactionArray: [...this.state.transactionArray, newTrans]}))  
    
  }

  searchHandler = (e) => {
      this.setState({...this.state, searchVal: e.target.value})
  }


  searchFilterArray = () => {
    return this.state.transactionArray.filter(transObj => transObj.description.toLowerCase().includes(this.state.searchVal.toLowerCase()))
  }

  render() {
    
    return (
      <div>
        <Search searchVal={this.state.searchVal} searchHandler={this.searchHandler} />
        <AddTransactionForm submitHandler={this.submitHandler} />
        <TransactionsList transactionArray={this.searchFilterArray()} />
      </div>
    );
  }
}

export default AccountContainer;
