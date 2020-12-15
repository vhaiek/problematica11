import React, { Component } from 'react';
import propTypes from 'prop-types';

class BoilersTypeList extends Component {
  render() {
    return(
    <div>
    <h3>Boilers Type</h3>
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>ID</th>
          <th>DESCRIPTION</th>
          <th>SKILLS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
      {this.props.boilersTypeList.map ((boilerType)=> (
        <tr>
          <td>{boilerType.name}</td>
          <td>{boilerType.id}</td>
          <td>{boilerType.description}</td>
          <td>{boilerType.skills}</td>
          <td><img className= "actions" src="images/pencil.png" alt="Edit icon"></img>{"   "}<img className="actions" src="images/trash-can.png" alt="Delete icon"></img></td>
        </tr>
      ))}
      </tbody>
    </table>
    </div>
    )
  }
}


BoilersTypeList.propTypes = {
  boilersTypeList: propTypes.array.isRequired
}
export default BoilersTypeList;

