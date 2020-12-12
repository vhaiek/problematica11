import React, { Component } from 'react';
import './App.css';
import BoilersTypeList from './components/BoilersTypeList';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <BoilersTypeList/>
        <Form/>
      </div>
    );
  }
}

export default App;
