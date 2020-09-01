import React from "react";

const Search = (props) => {
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          props.search(e);
        }}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;


// onSubmit={(e) => {props.searchClicked(e)}} 