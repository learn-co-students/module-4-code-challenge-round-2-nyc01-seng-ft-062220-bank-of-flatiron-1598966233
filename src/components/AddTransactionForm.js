import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={

    date: '',
    description:'',
    category:'',
    amount:null
  }

  changeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeHandler}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.changeHandler}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.changeHandler}
              step="0.01"
            />
          </div>
          <button onClick={(e)=>{
            e.preventDefault()
            this.props.clickHandler(this.state)
          }}
          
          className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
