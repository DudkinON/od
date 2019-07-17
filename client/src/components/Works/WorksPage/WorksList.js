import React, {Component} from 'react';
import {connect} from 'react-redux';
import WorkCard from './WorkCard';


function mapStateToProps(state) {
  return {
    works: state.works,
    url: state.config.modules.works.path
  };
}

export class WorksList extends Component {
  render() {
    return (
      <div className="works__content">
        {this.props.works.map(work => (
          <WorkCard key={work.id} url={this.props.url} {...work}/>
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(WorksList);