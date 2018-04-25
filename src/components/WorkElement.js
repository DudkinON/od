import React from 'react';
import {connect} from "react-redux";
import WorksItem from './WorksItem'


class WorkElement extends React.Component {

  render() {

    const items = this.props.works;

    return (
      <div className="col-lg-10 row-separator">
        {items.map( (item, i) =>
          <WorksItem key={"work_key_" + i} item={item} isMobile={this.props.isMobile}/>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({works: state.works, isMobile: state.mobile}),
  dispatch => ({})
)(WorkElement);