import React from 'react'


class Sort extends React.Component {

    onChangeHandler = (e) => {
        this.props.sortHandler(e.target.value)
    }

    render() {
        return(
            <div className="ui large fluid icon input" >
                <select onChange={this.onChangeHandler} >
                    <option value="category">category</option>
                    <option value="description">description</option>
                </select>
            </div>
        )
    }
}

export default Sort