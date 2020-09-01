import React from "react";

const Search = (props) => {

  return (
    <div className="ui large fluid icon input">
      <input
        name="searchValue"
        type="text"
        value={props.searchValue}
        placeholder={"Search your Recent Transactions"}
        onChange={props.changeHandler}
      />
      <i className="circular search link icon"></i>
    </div>
  );

};

export default Search;
