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

  it('should render `a` with passed attributes', function () {
    expect(workCard.find('.works__card').props().to)
      .toBe(`${props.url}/${props.id}`)
  });
});