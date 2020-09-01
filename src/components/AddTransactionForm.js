import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    // console.log(this.state)
    this.props.addTrans(this.state)
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  }
  
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={this.changeHandler} value={this.state.date} type="date" name="date" />
            <input onChange={this.changeHandler} value={this.state.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.changeHandler} value={this.state.category} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.changeHandler} 
              value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit" onClick={this.submitHandler}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
