import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


class AccountContainer extends Component {

  state={
    allTransactions:[],  
    searchValue:'',
    filteredTransactions:[]
  }

  componentDidMount(){
   fetch("http://localhost:3000/transactions")
   .then(resp=>resp.json())
   .then(data=> this.setState({allTransactions:data}))
  }

  clickHandler=(obj)=>{

    let newArray=[...this.state.allTransactions, obj]
    this.setState({allTransactions:newArray})

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
      })
    }

    searchHandler=(e)=>{
      console.log(e.target.value)
      this.setState({searchValue: e.target.value})
    }

    filTransactions=()=>{

    let filteredTransactions =[...this.state.allTransactions]
     let newArray =  filteredTransactions.filter((tran)=>tran.description.toLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
     this.setState({filteredTransactions:newArray})
    }

    filteredTransactions=()=>{
      if (this.state.searchValue===''){
        return this.state.allTransactions
      }else{
        return this.state.filteredTransactions
      }
    }
    
    render() {
      console.log(this.state.filteredTransactions)

    return (
      <div>
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
        <AddTransactionForm  
        changeHandler={this.changeHandler}
        clickHandler={this.clickHandler} 

        date={this.state.date}
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        
        />
        //
        <TransactionsList allTransactions={this.filteredTransactions()} />
      
      </div>
    );
  }
}

export default AccountContainer;
