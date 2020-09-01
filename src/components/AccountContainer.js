import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    allTransactions:[],  
  }

  componentDidMount(){
   fetch("http://localhost:3000/transactions")
   .then(resp=>resp.json())
   .then(data=> this.setState({allTransactions:data}))
  }

  clickHandler=(obj)=>{

    let newArray=[...this.state.allTransactions, obj]
    this.setState({allTransactions:newArray})

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
      })
    }

  render() {

    return (
      <div>
        <Search />
        <AddTransactionForm  
        changeHandler={this.changeHandler}
        clickHandler={this.clickHandler} 

        date={this.state.date}
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        
        />
        <TransactionsList allTransactions={this.state.allTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
