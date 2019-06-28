import React from 'react';
import {shallow} from 'enzyme';
import {CertificateBlock} from './CertificateBlock';


describe('CertificateBlock', () => {

  const props = {
    "id": "1",
    "title": "certificate one",
    "description": "description of the certificate",
    "date": "14/15/2018",
    "img": "/path/to/image/certificate",
    "button": "button name"
  };

  global.open = jest.fn();

  const certificateBlock = shallow(<CertificateBlock {...props}/>);

  it('should render properly', function () {
    expect(certificateBlock).toMatchSnapshot();
  });

  it('should display passed title', function () {
    expect(certificateBlock.find('.certificates__view-header').text())
      .toBe(props.title);
  });

  it('should display passed description', function () {
    expect(certificateBlock.find('.certificates__view-description').text())
      .toBe(props.description)
  });

  it('should display button name', function () {
    expect(certificateBlock.find('.certificates__view-link').text())
      .toBe(props.button);
  });

  it('should display passed image', function () {

    // contains passed image url
    expect(certificateBlock.find('img').html()).toContain(props.img);

    // contains passed title as alt attribute
    expect(certificateBlock.find('img').html()).toContain(props.title);
  });

  it('should call url if user click the button', function () {
    certificateBlock.find('.certificates__view-link').simulate('click');
    expect(global.open).toHaveBeenCalled();
  });
});