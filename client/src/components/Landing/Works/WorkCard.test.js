import React from 'react';
import {shallow} from 'enzyme';
import {WorkCard} from './WorkCard';
import {MemoryRouter as Router} from 'react-router-dom';


describe('WorkCard', () => {

  const props = {
    "id": 1,
    "name": "name of the work",
    "description": "description of the work",
    "img": "/path/to/image",
    "icons": [
      {
        "id": "1",
        "name": "html 5",
        "icon": "test icon",
        "view": "0 0 512 512"
      }
    ],
    url: '/works'
  };
  const wrapped = shallow(<Router><WorkCard {...props}/></Router>);
  const workCard = wrapped.find('WorkCard').dive();

  it('should render properly', function () {
    expect(workCard).toMatchSnapshot();
  });

  it('should render `a` with passed attributes', function () {
    expect(workCard.find('.works__card').props().to)
      .toBe(`${props.url}/${props.id}`)
  });

  it('should contains icons', function () {
    expect(workCard.find('.works__card-icon').length)
      .toBe(props.icons.length)
  });

  it('should contains viewBox property', function () {
    expect(workCard.find('svg').props())
      .toHaveProperty('viewBox', props.icons[0].view)
  });

  it('should contains icon path', function () {
    expect(workCard.find('path').props())
      .toHaveProperty('d', props.icons[0].icon)
  });

  it('should contains img', function () {
    expect(workCard.find('img').exists()).toBe(true)
  });

  it('should contains src property', function () {
    expect(workCard.find('img').props())
      .toHaveProperty('src', props.img)
  });

  it('should contains name of the work', function () {
    expect(workCard.find('.works__name').text()).toBe(props.name);
  });
});