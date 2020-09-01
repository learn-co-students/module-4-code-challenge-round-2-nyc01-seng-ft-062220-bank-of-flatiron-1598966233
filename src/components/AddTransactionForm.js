import React, { Component } from "react";

const URL = 'http://localhost:6001/transactions/'

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''

  }

  changeHandler = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.updateTransactions()
  }

  updateTransactions = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(window.location.reload())
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.changeHandler}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.changeHandler}
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
