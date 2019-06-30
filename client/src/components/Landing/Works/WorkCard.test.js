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
    url: '/works'
  };
  const wrapped = shallow(<Router><WorkCard {...props}/></Router>);
  const workCard = wrapped.find('WorkCard').dive();

  it('should render properly', function () {
    expect(workCard).toMatchSnapshot();
  });

  it('should display the name of the work', function () {
    expect(workCard.find('.works__name').text()).toBe(props.name);
    expect(workCard.find('.works__card-content--name').html())
      .toContain(props.name);
  });

  it('should display the description of the work', function () {
    expect(workCard.find('.works__card-content--description').text())
      .toBe(props.description)
  });

  it('should render `a` with passed attributes', function () {
    expect(workCard.find('.works__card').props().to)
      .toBe(`${props.url}/${props.id}`)
  });
});