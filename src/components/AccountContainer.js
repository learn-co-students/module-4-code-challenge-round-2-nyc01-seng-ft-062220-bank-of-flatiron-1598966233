import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(){
    super()
    this.state={
      originalAPI:[],
      transactions: []
    }
  }
    api = "http://localhost:6001/transactions/"

    
    
    getTransactions=(options={method: "GET"})=>{
      // i was planning on making this DRYer by reusing this, maybe even passing a callback function for the 3rd then statement, but i'm just gonna finish the coding challenge before i try to make this "prettier"
      fetch(this.api,options)
        .then(response => response.json())
        .then(transactionObj => this.setState({
          ...this.state,
          originalAPI: transactionObj,
          transactions: transactionObj
          
        })
        )
      }

      submitTransaction =(transaction)=>{
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"},
            body: JSON.stringify(transaction)
          }

        fetch(this.api,options)
        .then(response => response.json())
        .then(transactionObj => {
           const newTransactions = this.state.originalAPI
           newTransactions.push(transactionObj)
          this.setState({
          ...this.state,
          originalAPI: newTransactions,
          transactions: newTransactions
          
        })
      }
        )
        
      }
      
      searchingTransactions =(event)=>{
        const searchedTransactions = this.state.originalAPI.filter((transaction)=> transaction.description.includes(event.target.value))
        this.setState({...this.state,
        transactions: searchedTransactions})
      }



      deleteTransaction =(id)=>{
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"},
          }

        fetch(this.api+id,options)
        .then(response => response.json())
        .then(  () => {
           const newTransactions = this.state.originalAPI.filter((transaction)=> transaction.id !== id)
          this.setState({
          ...this.state,
          originalAPI: newTransactions,
          transactions: newTransactions
          
        })
      }
        )
        
      }






      
      componentDidMount=()=>{
        this.getTransactions()
      }
  render() {
    return (
      <div>
        <Search searchingTransactions={this.searchingTransactions}/>
        <AddTransactionForm submitTransaction={this.submitTransaction}/>
        <TransactionsList transactions={this.state.transactions} deleteTransaction={this.deleteTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
