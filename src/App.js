import React, { Component } from 'react';
import './App.css';
import BoilersTypeList from './components/BoilersTypeList';
import Form from './components/Form';
import data from './data/boilersType.json';

class App extends Component {
  state = {
    boilersTypeList: data
  }
  
  form = (name) => {
    const newBoilerType = {
      name: name,
      completed: false
    }
    this.setState({boilersTypeList: [...this.state.boilersTypeList, newBoilerType]})
  }

  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <BoilersTypeList boilersTypeList={this.state.boilersTypeList}/>
        <Form form={this.form}/>
      </div>
    );
  }
}

export default App;
