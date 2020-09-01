import React, { Component } from "react";

class AddTransactionForm extends Component {


  submitHandler = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.props.data.date} onChange={(e) => {
         this.props.changeHandler(e.target.value)}} />
            <input type="text" name="description" placeholder="Description" value={this.props.data.description} onChange={(e) => {
         this.props.changeHandler(e.target.value)}} />
            <input type="text" name="category" placeholder="Category" value={this.props.data.category} onChange={(e) => {
         this.props.changeHandler(e.target.value)}}/>
            <input value={this.props.data.amount} onChange={(e) => {
              this.props.changeHandler(e.target.value)}}
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
