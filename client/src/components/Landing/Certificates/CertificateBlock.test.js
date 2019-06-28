import React from 'react';
import {shallow} from 'enzyme';
import {CertificateBlock} from './CertificateBlock';


describe('CertificateBlock', () => {

  const props = {
    "id": "1",
    "title": "certificate one",
    "description": "description of the certificate",
    "date": "14/15/2018",
    "img": "/path/to/image/certificate"
  };
  const certificateBlock = shallow(<CertificateBlock {...props}/>);

  it('should render properly', function () {
    expect(certificateBlock).toMatchSnapshot();
  });
});