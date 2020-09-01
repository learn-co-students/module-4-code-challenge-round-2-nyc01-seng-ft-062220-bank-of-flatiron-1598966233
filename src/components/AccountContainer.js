import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const transactionUrls = "http://localhost:3000/transactions/"

class AccountContainer extends Component {

    state = {
        transactions: []
    }

    componentDidMount() {
        fetch(transactionUrls)
            .then(res => res.json())
            .then(transactions => this.setState({transactions: transactions}))
    }

    submitHandler = (obj) => {

        const packet = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            },
            body: JSON.stringify(obj)
        }


        fetch(transactionUrls, packet)
            .then(res => res.json())

        fetch(transactionUrls)
            .then(res => res.json())
            .then(transactions => this.setState({transactions: transactions}))
    }


    render() {
    return (
      <div>
        <Search />
        <AddTransactionForm submitHandler={this.submitHandler}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
