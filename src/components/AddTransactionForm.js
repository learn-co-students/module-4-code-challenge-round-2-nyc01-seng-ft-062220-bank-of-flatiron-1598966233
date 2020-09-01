import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: "",
    description: "Description", 
    category: "Category", 
    amount: ""
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/transactions", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: this.state
    })

     

    //Going to need to make a post request... 
  }

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.eventHandler} value={this.state.date} />
            <input type="text" name="description" placeholder="Description" onChange={this.eventHandler} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.eventHandler} value={this.state.category} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.eventHandler}
              value={this.state.amount}
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
