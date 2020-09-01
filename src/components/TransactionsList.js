import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component{

  renderTransactions =()=>{ //if search query is not null, renders a filtered list of transactions
    if(this.props.searchQuery === null){
      return this.props.transactions.map(transaction=> {
        return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={this.props.deleteTransaction}/>
      })
    } else {
      const filteredTransactions = this.props.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.props.searchQuery.toLowerCase()))
      return filteredTransactions.map(transaction=> {
        return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={this.props.deleteTransaction}/>
      })
    }
  }

  render(){
    return (
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
            <th>
              <h3 className="ui center aligned header">Delete</h3>
            </th>
          </tr>
          {this.renderTransactions()}
        </tbody>
      </table>
    );
  }


};

export default TransactionsList;
