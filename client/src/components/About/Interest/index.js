import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getInterest} from '../../../actions';
import InterestList from './InterestList';


function mapStateToProps(state) {
  return {
    header: state.config.modules.about.parts.interest.header,
    url: state.config.modules.about.parts.interest.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInterest: url => dispatch(getInterest(url))
  };
}

export class Interest extends Component {

  componentDidMount() {
    this.props.onGetInterest(this.props.url);
  }

  render() {
    return (
      <div className="about__interest-container">
        <div className="about__interest-header">{this.props.header}</div>
        <InterestList/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Interest);