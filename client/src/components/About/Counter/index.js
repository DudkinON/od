import React, {Component} from 'react';
import {connect} from 'react-redux';
import Benefit from './Benefit';


function mapStateToProps(state) {
  return {
    benefits: state.benefits
  };
}

export class Counter extends Component {
  render() {
    return (
      <div className="about__benefits">
        {this.props.benefits.map(benefit => (
          <Benefit key={benefit.id} {...benefit}/>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Counter);