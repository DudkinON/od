import React from 'react';
import {shallow} from 'enzyme';
import {ContactCard} from './ContactCard';


describe('ContactCard', () => {

  const props = {};
  const contactCard = shallow(<ContactCard {...props}/>);
  global.open = jest.fn();

  it('should render properly', function () {
    expect(contactCard).toMatchSnapshot();
  });
});