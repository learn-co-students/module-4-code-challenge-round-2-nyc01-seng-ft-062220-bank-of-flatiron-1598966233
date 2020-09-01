import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  
  render(){
    
    let allTrans = this.props.allTransactions.map(singleTrans => <Transaction key={singleTrans.id} soloTrans={singleTrans} />)
    
    
    return(

      <>
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
            {allTrans}
          </tbody>
        </table>
        </>
      );
  }
  
};

export default TransactionsList;
