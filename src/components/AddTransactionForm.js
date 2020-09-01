import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: 0,
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });

    // console.log("keystrokes",this.state)
  
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.submitHandler} className="ui form">
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.onChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>
          <button className="ui blue button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
