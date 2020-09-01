import React from "react";


class Search extends React.Component {

  state = {
    searchQuery: ""
  }

  changeHandler=(e)=>{ //updates state on change
    this.setState({ searchQuery: e.target.value}, ()=>this.props.filterTransactions(this.state.searchQuery))
    
  }


  clickHandler=()=>{ //sends state to parent again (redundant)
    this.props.filterTransactions(this.state.searchQuery)
  }

  

  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.changeHandler}
          value={this.state.searchQuery}
        />
        <i onClick={this.clickHandler} className="circular search link icon"></i>
      </div>
    );
  }

};

export default Search;
