import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    id: "",
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  inputHandler = (e) => {
    if(e.target.name === "date") {
      this.setState({date: e.target.value})
    } else if (e.target.name === "description"){
      this.setState({description: e.target.value})
    } else if (e.target.name === "category"){
      this.setState({category: e.target.value})
    } else if (e.target.name === "amount"){
      this.setState({amount: e.target.value})
    }
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({id: this.props.newId}, () => this.props.addNewTransaction(this.state))
    this.postTranscation(this.state)
  }

  postTranscation = (transObj) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transObj)
    }

    fetch("http://localhost:3000/transactions", options)
    .then(resp => {
      if (resp.ok) {
          return resp.json();
      } else {
          window.alert("Sorry something went wrong")
          window.location.reload()
      }
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler} >
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.inputHandler} />
            <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.inputHandler}/>
            <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={this.inputHandler}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.inputHandler}
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
