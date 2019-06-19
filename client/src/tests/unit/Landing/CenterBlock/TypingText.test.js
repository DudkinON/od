import React from 'react';
import {shallow} from 'enzyme';
import {TypingText} from '../../../../components/Landing/CenterBlock/TypingText';


describe('TypingText', () => {
  const props = {
    typing: {
      list: ["string"],
      delay: 2000,
      text: '',
      index: 0,
      speed: 300
    }};
  const typingText = shallow(<TypingText {...props} />);

  it('should render properly', function () {
    expect(typingText).toMatchSnapshot();
  });

  it('should contains `Typing` component', function () {
    expect(typingText.find('Typing').exists()).toBe(true);
  });
});