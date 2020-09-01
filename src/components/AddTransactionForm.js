import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      description: '',
      category: '',
      amount: 0
    }
  }

  changeHandler = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    this.setState( {[e.target.name]: e.target.value }, () => {console.log(this.state)})
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.props.submit(e, this.state)} className="ui form">
          <div className="inline fields">
            <input onChange={(e)=>this.changeHandler(e)} type="date" name="date" />
            <input onChange={(e)=>this.changeHandler(e)} type="text" name="description" placeholder="Description" />
            <input onChange={(e)=>this.changeHandler(e)} type="text" name="category" placeholder="Category" />
            <input
              onChange={(e)=>this.changeHandler(e)} 
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
