import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div style={{
        backgroundColor: 'black',
        bottom: '0',
        top: '0',
        position: 'fixed',
        width: '100%',
        height: '100%',
        textAlign: 'center'
      }}>
        <img src={this.props.location.pathname} alt=""/>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(App);
