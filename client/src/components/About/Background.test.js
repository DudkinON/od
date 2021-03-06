import React from 'react';
import {shallow} from 'enzyme';
import {Background} from './Background';

describe('Background', () => {

  const props = { settings: {} };
  const background = shallow(<Background {...props}/>);

  it('should render properly', function () {
    expect(background).toMatchSnapshot();
  });

  it('should contains Content component', function () {
    expect(background.find('Connect(Content)').exists()).toBe(true);
  });
});