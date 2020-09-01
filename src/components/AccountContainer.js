import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

const transactionUrls = "http://localhost:3000/transactions/"

class AccountContainer extends Component {

    state = {
        transactions: [],
        filteredTransactions: []
    }

    componentDidMount() {
        fetch(transactionUrls)
            .then(res => res.json())
            .then(transactions => this.setState({transactions: transactions, filteredTransactions: transactions}))
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

        this.updateDom()
    }

    searchHandler = (obj) => {
        let newArray = [...this.state.transactions]

        const filteredTransactions = newArray.filter(item => {
            return item.description.toLowerCase().includes(obj.toLowerCase())
        })

        this.setState({
            filteredTransactions: filteredTransactions
        })

    }

    deleteHandler = (obj) => {
        console.log(obj.id)
        const packet = {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
            }
        }

        fetch(transactionUrls + obj.id, packet)
            .then(res => res.json())

        this.updateDom()
    }

    updateDom = () => {
        fetch(transactionUrls)
            .then(res => res.json())
            .then(transactions => this.setState({transactions: transactions, filteredTransactions: transactions}))
    }

    sortHandler = (sort) => {
        let newArray = [...this.state.transactions]

        if (sort === "category") {
            newArray.sort((a, b) => a.category[0] - b.category[0]);
            this.setState({
                filteredTransactions: newArray
            })

        } else if (sort === "category") {
            console.log("category")

        } else if (sort === "description") {
            console.log("description")
        }
    }



    render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler}/>
        <Sort sortHandler={this.sortHandler}/>
        <AddTransactionForm submitHandler={this.submitHandler}/>
        <TransactionsList transactions={this.state.filteredTransactions} deleteHandler={this.deleteHandler} />
      </div>
    );
  }
}

export default AccountContainer;
