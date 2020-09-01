import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    description : "",
    category : "",
    amount : ""
  }

  resetState = () => {
    this.setState({
      data : "",
      description : "",
      category : "",
      amount : ""
    })
  }

  changeHandler = (event) => {
    event.persist()
    this.setState({[event.target.name]:event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault()
    let formData = {
        date : this.state.date,
        description : this.state.description,
        category : this.state.category,
        amount : this.state.amount 
    }
    this.props.addTransaction(formData)
    this.resetState()
  }
    
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.submitHandler(event)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={event => this.changeHandler(event)} value={this.state.date || ''} />
            <input type="text" name="description" placeholder="Description" onChange={event => this.changeHandler(event)} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={event => this.changeHandler(event)} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={event => this.changeHandler(event)} 
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
