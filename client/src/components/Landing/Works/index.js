import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getWorks} from '../../../actions';
import WorksList from './WorksList';


function mapStateToProps(state) {
  return {
    header: state.config.modules.landing.parts.works.header,
    url: state.config.modules.landing.parts.works.url,
    works: state.works
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetWorks: url => dispatch(getWorks(url))
  }
}

export class Works extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.onGetWorks(this.props.url);
  };

  render() {
    return (
      <section className="works">
        <div className="works__container">
          <div className="works__header">
            <h3 className="works__header--text">{this.props.header}</h3>
          </div>
          <WorksList/>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Works);