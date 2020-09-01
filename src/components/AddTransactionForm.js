import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(){
    super()
    this.state={
      date:"",
      description:"",
      category:"",
      amount:""
    }
  }

  changeHandler=(event)=>{
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  submitHandler =(event)=>{
    event.preventDefault()
    this.props.submitTransaction(this.state)
    this.setState({
      date:"",
      description:"",
      category:"",
      amount:""
    })
  }




  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date"   value={this.state.date} onChange={this.changeHandler}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler} />
            <input type="text" name="category" placeholder="Category"  value={this.state.category} onChange={this.changeHandler} />
            <input
             value={this.state.amount} onChange={this.changeHandler}
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
