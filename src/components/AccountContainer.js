import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


/*
For delete advanced Del, I would send up the transObj id on a click, filter Transarray by id's NOT matching that ID
then set State with that new array and delete from back end adding ID onto URL. Alternatively I could just do another fetch
from data base which wouldn't be ideal in a real world app
*/

class AccountContainer extends Component {
  //conrolling searchform here because we need to use it to filter the array that Trans list is getting
  state = {
    transactionArray: [],
    searchVal: ""
  }

  //initial get request for data
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(response => response.json())
      .then(transactionData => {this.setState({transactionArray: transactionData})})
  }


  //triggered by AddTransaction form - adds to DB and then renders pessimistically
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

  //manages the searchVal (which is used in searchform - passed down through props)
  searchHandler = (e) => {
      this.setState({...this.state, searchVal: e.target.value})
  }

  //filters the array of all transactions to only include those whose desc matches the search term - fed into transaction list
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
