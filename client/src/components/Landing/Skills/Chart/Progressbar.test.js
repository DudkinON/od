import React from 'react';
import {shallow} from 'enzyme';
import {Progressbar} from './Progressbar';
import {MemoryRouter} from 'react-router-dom';


jest.useFakeTimers();

describe('Progressbar', () => {

  const props = {
    percent: 25,
    img: 'test/link/img.jpg',
    name: 'test name',
    url: "/test",
    view: "0 0 100 100"
  };
  const memoryRouter = shallow(
    <MemoryRouter >
      <Progressbar {...props}/>
    </MemoryRouter>
  );

  it('should render properly', function () {
    expect(memoryRouter.html()).toMatchSnapshot();
  });

  it('should contains passed img path', function () {
    expect(memoryRouter.html()).toContain(props.img);
  });

  it('should contains passed url', function () {
    expect(memoryRouter.html()).toContain(props.url);
  });


  it('should contains passed view', function () {
    expect(memoryRouter.html()).toContain(props.view);
  });

  it('should initialize value percent in the state', function () {
    expect(memoryRouter.find(Progressbar).dive().instance().state.percent).toBe(0);
  });
  it('should call setInterval', function () {
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 25);
  });
});