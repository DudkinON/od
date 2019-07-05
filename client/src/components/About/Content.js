import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBenefits} from '../../actions';
import Counter from './Counter';


function mapStateToProps(state) {
  return {
    header: state.config.modules.about.header,
    url: state.config.modules.about.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetBenefits: url => dispatch(getBenefits(url))
  };
}

export class Content extends Component {

  componentDidMount() {
    this.props.onGetBenefits(this.props.url)
  }

  render() {
    return (
      <div className="about__content">
        <div className="about__header">
          <div className="about__header--text">{this.props.header}</div>
        </div>
        <Counter/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Content);