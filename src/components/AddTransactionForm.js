import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.changeHandler} />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              onChange={this.changeHandler}
            />
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
