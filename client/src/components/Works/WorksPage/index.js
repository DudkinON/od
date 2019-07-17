import React, {Component} from 'react';
import {connect} from 'react-redux';
import WorksList from './WorksList';
import {getWorks} from '../../../actions';


function mapStateToProps(state) {
  return {
    url: state.config.modules.works.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetWorks: url => dispatch(getWorks(url))
  };
}

export class WorksPage extends Component {

  componentDidMount() {
    this.props.onGetWorks(this.props.url)
  }

  render() {
    return (
      <div className="works-page">
        <WorksList/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(WorksPage);