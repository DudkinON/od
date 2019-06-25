import React from 'react';
import {shallow} from 'enzyme';
import {Progressbar} from './Progressbar';


jest.useFakeTimers();

describe('Progressbar', () => {
  
  const props = {
    percent: 25,
    img: 'test/link/img.jpg',
    name: 'test name'
  };
  const progressbar = shallow(<Progressbar {...props} />);

  it('should render properly', function () {
    expect(progressbar).toMatchSnapshot();
  });

  it('should contains passed img path', function () {
    expect(progressbar.html()).toContain(props.img);
  });

  it('should contains passed name', function () {
    expect(progressbar.html()).toContain(props.name);
  });

  it('should initialize value percent in the state', function () {
    expect(progressbar.state().percent).toBe(0);
  });

  it('should call setInterval', function () {
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 25);
  });
});