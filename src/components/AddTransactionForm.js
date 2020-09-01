import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  onChangeHandler = (e) => {

    if (e.target.name === "date") {
      this.setState({
        date: e.target.value
      })
    } else if (e.target.name === "description") {
      this.setState({
        description: e.target.value
      })
    } else if (e.target.name === "category") {
      this.setState({
        category: e.target.value
      })
    } else if (e.target.name === "amount") {
      this.setState({
        amount: e.target.value
      })
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }



  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.onChangeHandler}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.onChangeHandler}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.onChangeHandler} />
            <input value={this.state.amount} onChange={this.onChangeHandler}
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
