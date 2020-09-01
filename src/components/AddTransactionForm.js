import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    // year-mm-dd
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHelper = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHelper}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeHandler} />
            <input type="text" name="description" placeholder="Description" onChange={this.changeHandler} />
            <input type="text" name="category" placeholder="Category" onChange={this.changeHandler} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
