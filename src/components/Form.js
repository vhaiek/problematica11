import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = { 
    category: "",
    id: "",
    description: "", 
    skills: "",
  }

  componentDidUpdate (previousProps, previousState) {
    if (previousProps.isEditing !== this.props.isEditing) {
      this.setState({
        category: this.props.boilerTypeToBeEditing.category,
        id:this.props.boilerTypeToBeEditing.id,
        description: this.props.boilerTypeToBeEditing.description,
        skills: this.props.boilerTypeToBeEditing.skills
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault ();
    if (this.props.isEditing) {
      this.props.editBoilerType(this.state)
    } else {
    this.props.addNewBoilerType(this.state);
    }
    this.setState({ 
      category: "", 
      id: "",
      description: "",
      skills: ""
    });
  }
  
  onChange = (e) => this.setState ({[e.target.name]: e.target.value});

  render() {
    const isEditing = this.props.isEditing
    const boilerTypeToBeEditing = this.props.boilerTypeToBeEditing
    const formTitle = isEditing ? "Edit this boiler type..." : "Add a new type of boiler...";
    return (
      <div className="container">
        <p>{formTitle}</p>
        <form className="form" onSubmit ={this.onSubmit}>
          <div className="input-group">
            <label>Category</label> 
            <input 
              type="text" 
              name= "category"
              value ={this.state.category}
              onChange={this.onChange}>
            </input>
          </div>
          <div className="input-group">
            <label>Id</label> 
            <input 
              type="text" 
              name= "id"
              value ={this.state.id}
              onChange={this.onChange}>
            </input>
          </div> 
          <div className="input-group">
            <label>Description</label> 
            <input 
              type="text" 
              name="description"
              value={this.state.description}
              onChange={this.onChange}>
            </input>
          </div>  
          <div className="input-group">
            <label>Skills</label> 
            <input 
              type="text" 
              name="skills"
              value={this.state.skills}
              onChange={this.onChange}>
            </input>
          </div>  
          <input className="btn" type="submit" name="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
