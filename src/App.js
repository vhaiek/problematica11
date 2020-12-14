import React, { Component } from 'react';
import './App.css';
import BoilersTypeList from './components/BoilersTypeList';
import Form from './components/Form';
import data from './data/boilersType.json';

class App extends Component {
  state = {
    boilersTypeList: data
  }
  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <BoilersTypeList boilersTypeList={this.state.boilersTypeList}/>
        <Form/>
      </div>
    );
  }
}

export default App;
