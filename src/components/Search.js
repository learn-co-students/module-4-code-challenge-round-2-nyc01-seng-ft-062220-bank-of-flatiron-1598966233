import React from "react";

class Search extends React.Component {

    state = {
        searchTerm: ''
    }

    onChangeHandler = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="ui large fluid icon input">
                <input
                    type="text"
                    placeholder={"Search your Recent Transactions"}
                    onChange={this.onChangeHandler}
                    value={this.state.searchTerm}
                />
                <i className="circular search link icon"></i>
            </div>
        );
    }

};

export default Search;
