import React, {Component} from 'react';
import Typing from 'react-typing-animation';


export class TypingText extends Component {

  state = {
    list: [],
    delay: 2000,
    text: '',
    index: 0,
    speed: 180
  };

  componentDidMount() {
    const state = this.props.typing;
    state.text = state.list[state.index];
    this.setState(state);
  }

  onFinishedTyping = () => {

    const state = this.state;

    state.index++;

    if (state.index === state.list.length) state.index = 0;
    state.text = state.list[state.index];

    this.setState(state);
  };

  render() {

    const {text, speed} = this.state;

    return (
    <Typing
      hideCursor={true}
      loop={true}
      className="center-block__typing-box"
      onFinishedTyping={this.onFinishedTyping}
      speed={speed}>
      <Typing.Delay ms={500} />
      <span>{text}</span>
      <Typing.Delay ms={1500} />
      <Typing.Backspace count={text.length} />
    </Typing>
    );
  }
}

export default TypingText;