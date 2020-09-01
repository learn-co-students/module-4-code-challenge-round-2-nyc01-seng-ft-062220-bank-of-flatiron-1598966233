import React from "react";

class Sort extends React.Component {
    render() {
        return (
          <div onChange={this.props.onChangeValue}>
              <h2>Search</h2>
            <input type="radio" value="Description" name="sortDesc" /> Description
            <input type="radio" value="Category" name="sortCat" /> Category
          </div>
        )
      }
}

export default Sort