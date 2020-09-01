import React from "react";

class Search extends React.Component {

  // searchHandler

  render() {
    return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          this.props.filterArray(e) 
        }}
      />
      <i className="circular search link icon"></i>
    </div>
    )
  }
}

export default Search;

