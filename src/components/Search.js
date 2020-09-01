import React from "react";

class Search extends React.Component {
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
    this.props.searchHandler(e.target.value)
  }
  
  render() {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          name="search"
          placeholder={"Search your Recent Transactions"}
          onChange={(e) => {
            console.log("Searching...");
            this.changeHandler(e)
          }}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
