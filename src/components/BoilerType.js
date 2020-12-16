import React, { Component } from 'react';

class BoilerType extends Component {
  deleteBoilerType= () => this.props.deleteBoilerType(this.props.boilerType.id)

  render() {
  console.log(this.props.deleteBoilerType)
    return (
      <tr>
        <td>{this.props.boilerType.category}</td>
        <td>{this.props.boilerType.id}</td>
        <td>{this.props.boilerType.description}</td>
        <td>{this.props.boilerType.skills}</td>
        <td>
          <button><img src="images/pencil.png" alt="Edit icon"></img></button>{"   "}
          <button onClick={this.deleteBoilerType}><img src="images/trash-can.png" alt="Delete icon"></img></button>
        </td>
      </tr> 
    )
  }
}

export default BoilerType;