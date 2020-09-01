import React from "react";
import Transaction from "./Transaction";
import Search from "./Search";


class TransactionsList extends React.Component {
  state={
    searchTerm:""
  }

  filterTrans=()=>{
    return this.props.allTrans.filter((trans)=> trans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  onChange=(e)=>{
    this.setState({searchTerm:e.target.value})
  }
  render(){
    let allTrans = this.filterTrans().map(trans => <Transaction key={trans.id} singleTrans={trans}/>)

    return (
      <>
         <Search value={this.state.searchTerm} onChange={this.onChange}/>
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
