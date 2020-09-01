import React from "react";

class Search extends React.Component  {
  
  render(){
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        name="searchValue"
        onChange={this.props.changeHandler}
        value={this.props.searchValue}
      />
      <i className="circular search link icon"></i>
    </div>
      )
    }
};

export default Search;
