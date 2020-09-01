import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: null,
    description: '',
    category: '',
    amount: 0
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleRestOfIt = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    let obj = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    }
    fetch('http://localhost:6001/transactions', obj)
    .then(response => response.json())
    .then(newTransaction => console.log(newTransaction))

    this.props.getTransactionArray()
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.submitHandler(e)}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={(e) => this.handleDate(e)}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={(e) => this.handleRestOfIt(e)}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={(e) => this.handleRestOfIt(e)}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={(e) => this.handleRestOfIt(e)}
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
