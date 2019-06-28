import React from 'react';
import {shallow} from 'enzyme';
import {CertificateList} from './CertificateList';

describe('CertificateList', () => {

  const props = {
    certificates: [
      {
        "id": "1",
        "title": "certificate one",
        "description": "description of the certificate",
        "date": "14/15/2018",
        "img": "/path/to/image/certificate"
      },
      {
        "id": "2",
        "title": "certificate two",
        "description": "description of the certificate",
        "date": "14/15/2018",
        "img": "/path/to/image/certificate"
      }
    ]
  };
  const certList = shallow(<CertificateList {...props} />);

  it('should render properly', function () {
    expect(certList).toMatchSnapshot();
  });

  it('should render CertificateBlock components', function () {
    expect(certList.find('CertificateBlock').length).toBe(props.certificates.length);
  });
});