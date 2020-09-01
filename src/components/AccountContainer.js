import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


// The base URL for your backend is: `http://localhost:6001`

// - GET: `/transactions`
// - POST: `/transactions`
// - DELETE: `/transactions/:id
class AccountContainer extends Component {

  state={
    transactions: []
  }

  componentDidMount(){
     fetch(`http://localhost:6001/transactions`)
     .then(res => res.json())
     .then((data) => {
        this.setState({
          transactions: data
        })
     })
  }

  formHandler = (postInfo) => {
    //Put a callback that captures the posted data and setsState of this data to new data
  }
//where should I do the post request? 
//use this clickHandler to capture the postInfo 
//pass it to the form... 
// Inside of AccountContainer => set it up with a clickHandle Event?
// Where onClick I make the post request and update the state and the API... 
// how do I update the API? 
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
