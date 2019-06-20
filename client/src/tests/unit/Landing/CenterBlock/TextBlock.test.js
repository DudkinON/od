import React from 'react';
import {shallow} from 'enzyme';
import {TextBlock} from '../../../../components/Landing/CenterBlock/TextBlock';


describe('TextBlock',() => {

  const props = {fullName: "TestFullName"};
  const textBlock = shallow(<TextBlock {...props}/>);

  it('should render properly', function () {
    expect(textBlock).toMatchSnapshot();
  });

  it('should contains `.center-block__blinking-cursor`', function () {
    expect(textBlock.find('.center-block__blinking-cursor')
      .exists()).toBe(true);
  });

  it('should contains `TypingText` component', function () {
    expect(textBlock.find('TypingText').exists()).toBe(true);
  });

  it('should find fullName', function () {
    expect(textBlock.text()).toContain(props.fullName);
  });
});