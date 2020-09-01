import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {

  renderTransaction = () => {
    if(this.props.filteredTransactions.length > 0){
      return this.props.filteredTransactions.map(transObj => <Transaction key={transObj.id} transaction={transObj}/> )
    } else {
      return this.props.transactions.map(transObj => <Transaction key={transObj.id} transaction={transObj}/> )
    }
  }

  sortTransaction = (e) => {
    this.props.sortHandler(e.target.parentElement.textContent)
  }

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Date {<i onClick={this.sortTransaction} className="sort icon"></i>}
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description {<i onClick={this.sortTransaction} className="sort icon"></i>}
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header" name="Category">
                Category {<i onClick={this.sortTransaction} className="sort icon"></i>}
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header" name="Amount">
                Amount {<i onClick={this.sortTransaction} className="sort icon"></i>}
              </h3>
            </th>
          </tr>
          {this.renderTransaction()}
        </tbody>
      </table>
    )
  }
};

export default TransactionsList;
