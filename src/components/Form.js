import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
    name: " ",
    category: " ",
    id: " ",
    description: " ",
    skills: " "
  }

  onSubmit = (e) => {
    e.preventDefault ();
    this.props.addNewBoilerType(this.state);
    this.setState({ name: " "});
  }
  
  onChange = (e) => this.setState ({[e.target.name]: e.target.value});

  render() {
    return (
      <div className="container">
        <p>Add a new type of boiler...</p>
        <form onSubmit ={this.onSubmit}>
          <div className ="input-group">
            <label>Category</label> 
            <input 
              type="text" 
              name= "category"
              value ={this.state.category}
              onChange={this.onChange}>
            </input>
          </div>
          <div className ="input-group">
            <label>Id</label> 
            <input 
              type="text" 
              name= "id"
              value ={this.state.id}
              onChange={this.onChange}>
            </input>
          </div> 
          <div className ="input-group">
            <label>Description</label> 
            <input 
              type="text" 
              name= "description"
              value ={this.state.description}
              onChange={this.onChange}>
            </input>
          </div>  
          <div className ="input-group">
            <label>Skills</label> 
            <input 
              type="text" 
              name= "skills"
              value ={this.state.skills}
              onChange={this.onChange}>
            </input>
          </div>  
          <input className= "btn"type="submit"name="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
