import React, {Component} from 'react';
import {connect} from 'react-redux';
import TypingText from './TypingText';


function mapStateToProps(state) {
  return {typing: state.config.typing};
}

export class TextBlock extends Component {

  render() {
    return (
      <div className="center-block__name-block">
        <h1 className="center-block__full-name">Oleg Dudkin</h1>
        <h6 className="center-block__type-text">
          <TypingText typing={this.props.typing}/>
          <span className="center-block__blinking-cursor">_</span>
        </h6>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(TextBlock);