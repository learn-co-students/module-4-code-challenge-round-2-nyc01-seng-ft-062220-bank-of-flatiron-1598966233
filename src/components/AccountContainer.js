import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    trans: [],
    filterBois: [],
    searchTerm: ""
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
        amount: parseFloat(obj.amount) 
      })
    }

    fetch("http://localhost:6001/transactions", options)
    .then(res => res.json())
    .then(newObj => this.setState({
      trans: [...this.state.trans, newObj]
    }))
  }

  searchHandler = (e) => {
    let newTerm = e.target.value

    let filteredArray = this.state.trans.filter(tran => tran.description.toLowerCase().includes(newTerm.toLowerCase()))

    
    this.setState({
      searchTerm: newTerm,
      filterBois: filteredArray
    })
  }

  delHandler = (obj) => {
    const options ={
      method: "DELETE"
    }

    fetch(`http://localhost:6001/transactions/${obj.id}`, options)
    .then(res => res.json())
    .then(res => {
      let newArray = this.state.trans.filter(tran => tran.id !== parseInt(obj.id))

      this.setState({
        trans: newArray
      })
      
    })
  }
  
  render() {
    
    return (
      <div>
        <Search searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm addTrans={this.addTrans}/>
        <TransactionsList delHandler={this.delHandler} filterBois={this.state.filterBois} trans={this.state.trans}/>
      </div>
    );
  }
}

export default AccountContainer;
