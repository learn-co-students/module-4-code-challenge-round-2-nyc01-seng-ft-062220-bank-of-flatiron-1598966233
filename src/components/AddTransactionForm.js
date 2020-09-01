import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = { 
    date: "",
    description: "",
    category: "",
    amount: 0
  }


  submitHelper = (e) => {
    e.preventDefault()
    return this.props.submitHandler(this.state)
    // this.setState({date:"", description:"", category: "", amount: 0}) 
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
  }
  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHelper}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.changeHandler} value={this.state.date} />
            <input type="text" name="description" placeholder="Description" onChange={this.changeHandler} value={this.state.description} />
            <input type="text" name="category" placeholder="Category" onChange={this.changeHandler} value={this.state.category} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.changeHandler} 
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
