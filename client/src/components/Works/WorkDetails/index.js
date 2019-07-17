import React, {Component} from 'react';
import {connect} from 'react-redux';
import DisplayWork from './DisplayWork';
import {getWork} from '../../../actions';

function mapStateToProps(state) {
  return {
    url: state.config.modules.works.workUrl,
    work: state.work,
    links: state.config.icons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetWork: url => dispatch(getWork(url))
  };
}

export class WorkDetails extends Component {


  componentDidMount() {
    const {url, match, onGetWork} = this.props;
    onGetWork(`${url}/${match.params.id}`);
  }

  render() {
    const {work, links} = this.props;

    const showWork = Object.keys(work).length > 0;


    return (
      <div className="work-details">
        {showWork && <DisplayWork {...work} links={links}/>}
        {!showWork && (
          <div className="work-details__error">
            <h1>Cannot connect to the server</h1>
            <p>Check your internet connection and try again</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(WorkDetails);