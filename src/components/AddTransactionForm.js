import React, { Component } from "react";

class AddTransactionForm extends Component {
  //controlling form
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""

  }
  
  //controlling form
  onChangeHelper = (e) => {
      this.setState({...this.state, [e.target.name]: e.target.value })
  }

  //stops page refresh and sends transaction object up to where DB is
  submitHelper = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
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
        <form onSubmit={this.submitHelper} className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.onChangeHelper} value={this.state.name} />
            <input type="text" name="description" onChange={this.onChangeHelper} value={this.state.description} placeholder="Description" />
            <input type="text" name="category" onChange={this.onChangeHelper} value={this.state.category} placeholder="Category" />
            <input type="number" name="amount" onChange={this.onChangeHelper} value={this.state.amount} placeholder="Amount" step="0.01"
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
