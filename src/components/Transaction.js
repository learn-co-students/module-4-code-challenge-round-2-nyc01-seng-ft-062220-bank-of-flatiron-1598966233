import React from "react";

class Transaction extends React.Component {



  clickHandler=(event)=>{
    this.props.deleteTransaction(event)
  }

  render(){
    return (
      <tr>
        <td>{this.props.transaction.date}</td>
        <td>{this.props.transaction.description}</td>
        <td>{this.props.transaction.category}</td>
        <td>{this.props.transaction.amount}</td>
        <td><button onClick={this.clickHandler} className="ui button" type="submit">
            Delete Transaction
            </button></td>
      </tr>
    );
  }

};

export default Transaction;