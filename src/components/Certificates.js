import React from 'react'
import CertificateItem from './CertificateItem'
import $ from "jquery";


class Certificates extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      right: "-100%",
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {

    const { error, isLoaded, items } = this.state;

    $(document).ready(function(){
      $('#certificate').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInRight',
        offset: 300});
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <section className="certificates animated invisible" id="certificate">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 mr-4">
                <h3 className="certificates-title">Certificates</h3>
                <div className="icon text-center"><i className="fas fa-certificate" aria-hidden="true" /></div>
              </div>
              <div className="col-lg-10 row">
                {items.map( (item, i) =>
                  <CertificateItem item={item} key={"cert_" + i} i={i} />
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Certificates;