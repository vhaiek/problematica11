import React, { Component } from 'react';
import './App.css';
import BoilersTypeList from './components/BoilersTypeList';
import Form from './components/Form';
import data from './data/boilersType.json';

class App extends Component {
  state = {
    boilersTypeList: data
  }
  
  addNewBoilerType = (newData) => {
    const newBoilerType = {
      category: newData.category,
      id: newData.id,
      description: newData.description,
      skills: newData.skills,
    }
    this.setState({boilersTypeList: [...this.state.boilersTypeList, newBoilerType]})
  }

  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <BoilersTypeList boilersTypeList={this.state.boilersTypeList}/>
        <Form form={this.addNewBoilerType}/>
      </div>
    );
  }
}

export default App;
