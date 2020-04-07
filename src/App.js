import React, { Component } from 'react';
import './App.css';
import Form  from './components/Form';
import Lists  from './components/Lists';


class App extends Component {
  state = {
    list : [
    "doctor Appoinment",
    "meeting a ex friend",
    "do All  Homeworks"],
     current:''
   }
   
  //* handle change
  updatetodo = (e) => {
    this.setState({
      current:e.target.value
    })
    console.log(this.state.current)
  }

  //* addToDo
  addtodo =(e) => {
    e.preventDefault();
    let current = this.state.current;
    let list = this.state.list;
    const newList = [... list, current];
     this.setState({
      list:newList,
      current:''
    })
  }

  //* deleteList
  deleteList = (index) => {
    let list = this.state.list;
    list.splice(index,1)
    this.setState({
      list
    })

  }
  render(){
    const {list} = this.state;
    const List = list.map((todo , index) => {
       return <Lists todos={todo} key={index} index={index} deleteList={this.deleteList}/>
        })
    return (
    <div className="app">
    <Form updatetodo={this.updatetodo} addtodo={this.addtodo}  current={this.state.current} />
    <ul>{List}</ul>
    </div>
  );
}}
export default App;
