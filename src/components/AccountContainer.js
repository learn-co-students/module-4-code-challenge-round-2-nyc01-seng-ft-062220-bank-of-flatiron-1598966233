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
      this.setState({searchValue: e.target.value})
    }

    filTransactions=()=>{
  
     if (this.state.searchValue===''){
       return this.state.allTransactions

     }else{
      let filteredTransactions =[...this.state.allTransactions]
      let newArray =  filteredTransactions.filter((tran)=>tran.description.toLowerCase().includes(this.state.searchValue.toLowerCase()))
      // this.setState({filteredTransactions:newArray})
       return newArray
     }

    }

    filteredTransactions=()=>{
    }
    
    render() {
      console.log("account cont", this.state.filteredTransactions)

    return (
      <div>
        <Search  searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
        <AddTransactionForm  
        changeHandler={this.changeHandler}
        clickHandler={this.clickHandler} 

        date={this.state.date}
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        
        />
        //
        <TransactionsList allTransactions={this.filTransactions()} />
      
      </div>
    );
  }
}

export default AccountContainer;
