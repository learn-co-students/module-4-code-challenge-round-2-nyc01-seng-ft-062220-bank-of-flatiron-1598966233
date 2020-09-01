import React from "react";

class Search extends React.Component {


  render(){
    return (
      <div className="ui large fluid icon input">
        <input
          name="searchValue"
          type="text"
          value={this.props.searchValue}
          placeholder={"Search your Recent Transactions"}
          onChange={(e) => {
            this.props.changeHandler(e);
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
