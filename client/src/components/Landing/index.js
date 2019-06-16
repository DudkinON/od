import React, {Component} from 'react';
import {connect} from 'react-redux';
import CenterBlock from './CenterBlock';


export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <CenterBlock />
      </div>
    );
  }
}

export default connect(()=>{})(Landing);