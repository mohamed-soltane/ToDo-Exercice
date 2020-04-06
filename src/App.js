import React, { Component } from 'react';
import './App.css';
import Form  from './components/Form';

class App extends Component {
 





  render(){
    return (
    <div>
    <Form updatetodo={this.updatetodo}/>
    </div>
  );
}}
export default App;
