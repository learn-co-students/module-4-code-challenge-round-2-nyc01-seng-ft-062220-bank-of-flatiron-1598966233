import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }


  changeHandler=(e)=>{ //on change, updates the state
    this.setState({ [e.target.name]: e.target.value })
  }

  buttonHandler=(e)=>{ //sends state to the parent (account container)
    e.preventDefault()
    this.props.addTransaction(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input onChange={this.changeHandler} type="date" name="date" value={this.state.date} />
            <input onChange={this.changeHandler} type="text" name="description" placeholder="Description" value={this.state.description} />
            <input onChange={this.changeHandler} type="text" name="category" placeholder="Category" value={this.state.category}/>
            <input onChange={this.changeHandler} 
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
            />
          </div>
          <button onClick={this.buttonHandler} className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
