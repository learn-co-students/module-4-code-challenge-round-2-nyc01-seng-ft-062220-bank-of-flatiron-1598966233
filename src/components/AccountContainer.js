import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const api = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

state = {
  transactions: [],
  searchTerm: "", 
  flag: false
}

componentDidMount(){
  this.apiCall()
}
apiCall = () => {
  fetch(api)
  .then(resp => resp.json())
  .then(data => this.setState({transactions: data}))
}
submitHandler= e => {
  e.preventDefault()

  let tranz = {
    date: e.target[0].value,
    description: e.target[1].value,
    category: e.target[2].value,
    amount: parseFloat(e.target[3].value)
  }
  console.log(tranz)
  let newTransactions = []
  const settings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tranz)
  }
  fetch(api, settings)
  .then(resp => resp.json())
  .then(newTranz => { 
    newTransactions = [...this.state.transactions, newTranz] 
    this.setState({transactions: newTransactions})
  })
}
searchHandler = e => {
  this.setState({ searchTerm: e.target.value})
}
filterTransactions = () => {
  return this.state.transactions.filter(trans => trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
}
deleteHandler = (id) => {
  fetch(`${api}/${id}`, {method: 'DELETE'})
  this.apiCall()
}



  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm submitHandler={this.submitHandler}/>
        <TransactionsList transactions={this.state.transactions} filterTransactions={this.filterTransactions} deleteHandler={this.deleteHandler}/>
      </div>
    );
  }
}

export default AccountContainer;
