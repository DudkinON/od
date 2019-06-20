import React from 'react';
import {shallow} from 'enzyme';
import {CenterBlock} from './index';

describe('CenterBlock', () => {
  const centerBlock = shallow(<CenterBlock />);

  it('should render properly', function () {
    expect(centerBlock).toMatchSnapshot();
  });

  it('should contains `.center-block__particles`', function () {
    expect(centerBlock.find('.center-block__particles').exists()).toBe(true);
  });

  it('should contains `TextBlock` component', function () {
    expect(centerBlock.find('Connect(TextBlock)').exists()).toBe(true);
  });
});