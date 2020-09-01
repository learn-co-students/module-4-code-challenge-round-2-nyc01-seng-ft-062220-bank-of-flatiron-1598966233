import React from "react";
import Transaction from "./Transaction";
import Search from "./Search";

class TransactionsList extends React.Component {
  
  state = {
    searchValue: ""
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(e.target.value)
  }

  renderTransactions = () => {
    return this.props.transactionArray.map(transObj => <Transaction key={transObj.id} transObj={transObj} /> )
  }

  //filter on description
  // filterTransactions = () => {
  //   return this.renderTransactions().filter(transObj => {
  //     return transObj.description.toLowerCase().includes(this.state.searchValue.toLowerCase())})
  // }

  render() {
    console.log("search value", this.state.searchValue)
  return (
    <>
    <Search searchValue={this.state.searchValue} changeHandler={this.changeHandler} />

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {this.renderTransactions()}
      </tbody>
    </table>
    </>
  )
  }
};

export default TransactionsList;
