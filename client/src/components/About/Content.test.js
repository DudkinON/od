import React from 'react';
import {shallow} from 'enzyme';
import {Content} from './Content';


describe('Content', () => {

  const props = {
    header: "test header",
    url: "/benefits",
    onGetBenefits: jest.fn()
  };
  const content = shallow(<Content {...props}/>);
  it('should render properly', function () {
    expect(content).toMatchSnapshot();
  });

  it('should display header', function () {
    expect(content.find('.about__header--text').text())
      .toBe(props.header);
  });

  it('should call onGetBenefits', function () {
    expect(props.onGetBenefits).toHaveBeenCalledWith(props.url);
  });

  it('should contains `Counter` component', function () {
    expect(content.find('Connect(Counter)'));
  });
});