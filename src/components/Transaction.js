import React from "react";

class Transaction extends React.Component {

    deleteHandler = (e) => {
        this.props.deleteHandler(this.props.transaction)
    }

    render() {
        return (
            <tr>
                <td>{this.props.transaction.date}</td>
                <td>{this.props.transaction.description}</td>
                <td>{this.props.transaction.category}</td>
                <td>{this.props.transaction.amount}</td>
                <td><button onClick={this.deleteHandler}>DELETE</button></td>
            </tr>
        );
    }
};

export default Transaction;
