import React, { Component } from 'react';
import './App.css';
import Form  from './components/Form';
import Lists  from './components/Lists';


class App extends Component {
  state = {
    list : [
    "doctor Appoinment",
    "meeting a friend",
    "doing homework"],
     current :[]
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
    list = [... list, current].concat()  
     this.setState({
      list,
      current:[]
    })
  }
  render(){
    const {list} = this.state;
    const List = list.map((todo , index) => {
       return <Lists todos={todo} key={index} index={index}/>
        })
    return (
    <div>
    <Form updatetodo={this.updatetodo} addtodo={this.addtodo}/>
    {List}
    </div>
  );
}}
export default App;
