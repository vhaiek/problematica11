import React, { Component } from 'react';
import './App.css';
import BoilersTypeList from './components/BoilersTypeList';
import Form from './components/Form';
import data from './data/boilersType.json';


class App extends Component {
  state = {
    boilersTypeList: data,
    isEditing: false,
    boilerTypeToBeEditing: {},
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

  deleteBoilerType = id => {
    this.setState ({boilersTypeList: [...this.state.boilersTypeList.filter(boilersTypeList => boilersTypeList.id !== id)]
    })
  }

  activateEditButton = id => {
    const selectedBoilerType = this.state.boilersTypeList.find(boilersTypeList => boilersTypeList.id === id)
    this.setState({ isEditing: !this.state.isEditing, boilerTypeToBeEditing: selectedBoilerType })
  }

  editBoilerType = (newData) => {
    const editedBoilerType = {
      category: newData.category,
      id: newData.id,
      description: newData.description,
      skills: newData.skills,
    }
    const boilerTypePosition = this.state.boilersTypeList.findIndex(boilersTypeList => boilersTypeList.id === this.state.boilerTypeToBeEditing.id)
    const newBoilerTypeList = [...this.state.boilersTypeList]
    newBoilerTypeList[boilerTypePosition] = editedBoilerType
    console.log(newBoilerTypeList, this.state.boilerTypeToBeEditing)
    this.setState({boilersTypeList: newBoilerTypeList, isEditing: false, boilerTypeToBeEditing: {}})
  }

  render() {
    return (
      <div className="App">
        <h1>List</h1>
        <BoilersTypeList 
          boilersTypeList={this.state.boilersTypeList} 
          deleteBoilerType={this.deleteBoilerType} 
          activateEditButton={this.activateEditButton}
        />
        <Form addNewBoilerType={this.addNewBoilerType} boilerTypeToBeEditing={this.state.boilerTypeToBeEditing} isEditing={this.state.isEditing} editBoilerType={this.editBoilerType}/>
      </div>
    );
  }
}

export default App;