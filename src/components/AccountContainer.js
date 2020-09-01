import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search:""
  }

  handleSubmit = event => {event.preventDefault()

         //updating in the DOM:
    let transactionsCopy = [...this.state.transactions]   
    let newId = transactionsCopy.pop().id    
    let newTransaction =  {id: newId+1, 
                          date: event.target[0].value, 
                          description: event.target[1].value, 
                          category: event.target[2].value,
                          amount: event.target[3].value}
    let updatedTransactions = [...this.state.transactions, newTransaction]                      

      this.setState({
        transactions: updatedTransactions
      })                    
            // updating in DB:
    let options=  { method: "POST",
    headers: {"Content-Type": "application/json",
    Accept: "application/json"
    },
    body: JSON.stringify(newTransaction)
    }
 fetch("http://www.localhost:6001/transactions", options )
 .then(resp => resp.json())
 .then (resp => { console.dir(resp) })
  }

  searchHandler = event =>{ 
     this.setState({
          search: event.target.value
     })
  console.log(this.state.search) 
//not finished

  }

  

  render() {
    return (
      <div>
        <Search searchHandler = {this.searchHandler}/>
        <AddTransactionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }

  componentDidMount(){
    fetch("http://www.localhost:6001/transactions")
   .then(response => response.json())
   .then(response => { this.setState({ transactions: response
   })
   })
}
}
export default AccountContainer;
