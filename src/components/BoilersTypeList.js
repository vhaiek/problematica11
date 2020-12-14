import React, { Component } from 'react';

class BoilersTypeList extends Component {
  render() {
    return this.props.boilersTypeList.map ((boilerType)=> (
    <div>
      <h3> Boilers Type</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>DESCRIPTION</th>
          <th>SKILLS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{boilerType.id}</td>
          <td>{boilerType.description}</td>
          <td>{boilerType.skills}</td>
        </tr>
      </tbody>
    </table>
    </div>
    ))
  }
}

export default BoilersTypeList;

