import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchQuery: null
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions= ()=>{ //fetches transactions
    fetch('http://localhost:6001/transactions')
    .then(resp=>resp.json())
    .then(resp => {
      this.setState({transactions: resp})
    })
  }

  addTransaction=(transactionObj)=>{ //updates state
    transactionObj.id = this.state.transactions.length + 1
    this.setState({
      transactions: [...this.state.transactions, transactionObj],
    }, 
    ()=> this.updateDatabase(transactionObj))
  }
 

  updateDatabase=(transactionObj)=>{ //updates database
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      body: JSON.stringify(transactionObj),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(json => {console.log(json);});
  }
  
  filterTransactions=(searchQuery)=>{ // search query is is passed as prop to transaction list
    this.setState({ searchQuery: searchQuery})
  }

  render() {
    return (
      <div>
        <Search filterTransactions={this.filterTransactions}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.state.transactions} searchQuery={this.state.searchQuery}/>
      </div>
    );
  }
}

export default AccountContainer;
