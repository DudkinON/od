import React from 'react';
import {shallow} from 'enzyme';
import {Works} from './index';

describe('Works', () => {

  const props = {
    header: "works header",
    url: "/works",
    onGetWorks: jest.fn()
  };

  const works = shallow(<Works {...props}/>);

  it('should render properly', function () {
    expect(works).toMatchSnapshot();
  });

  it('should display passed header', function () {
    expect(works.find('.works__header--text').text())
      .toBe(props.header);
  });

  it('should call onGetWorks', function () {
    expect(props.onGetWorks).toHaveBeenCalledWith(props.url);
  });

  it('should contains WorksList component', function () {
    expect(works.find('Connect(WorksList)').exists()).toBe(true);
  });
});