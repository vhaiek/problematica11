import React, { Component } from 'react';
import './BoilersTypeList.css';
import BoilerType from './BoilerType.js';

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
            {this.props.boilersTypeList.map((boilerType)=> (
              <BoilerType boilerType={boilerType} deleteBoilerType={this.props.deleteBoilerType} activateEditButton={this.props.activateEditButton}/>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
export default BoilersTypeList;