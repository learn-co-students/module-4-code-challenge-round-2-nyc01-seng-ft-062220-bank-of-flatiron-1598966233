import React from "react";

class Search extends React.Component {
  state = {
    searchTerm: ""
  }
  
  inputHandler = (e) => {
    this.setState({ searchTerm: e.target.value}, () => this.props.searchHandler(this.state.searchTerm))
  }
  
  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.inputHandler}
          value={this.state.searchTerm}
        />
        <i className="circular search link icon"></i>
      </div>
    )
  }
};

export default Search;
