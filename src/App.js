import React, { Component } from 'react';
import './App.css';
import Form  from './components/Form';

class App extends Component {
  state = {
    courses : [
     {name : "HTML"},
     {name : "JAVA"},
     {name : "CSS"},
     ],
     current : ''
   }
   
  //* handle change
  updatetodo = (e) => {
    this.setState({
      current:e.target.value
    })
    console.log(this.state.current)
  }

  render(){
    return (
    <div>
    <Form updatetodo={this.updatetodo}/>
    </div>
  );
}}
export default App;
