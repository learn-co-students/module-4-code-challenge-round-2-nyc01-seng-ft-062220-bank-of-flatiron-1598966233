import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "", 
    category: "", 
    amount: 0


  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})

  }

  submitHandler = (e) => {
    //make a POST request and submit the entered attributes from the state
    e.preventDefault()
    this.setState(this.state)
    fetch('http://localhost:6001/transactions', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    //add the new transaction to the main array
    // .then(transaction => console.log("submit", transaction))
    .then(transaction => this.props.newTransaction(transaction))
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.changeHandler} />
            <input type="text" name="description" onChange={this.changeHandler} placeholder="Description" />
            <input type="text" name="category" onChange={this.changeHandler} placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
