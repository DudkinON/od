import React, {Component} from 'react';
import {connect} from 'react-redux';
import InterestCard from './InterestCard';


function mapStateToProps(state) {
  return {
    interest: state.interest
  };
}

export class InterestList extends Component {
  render() {
    return (
      <div className="about__interest-block">
        {this.props.interest.map(props => (
          <InterestCard key={props.id} {...props}/>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(InterestList);