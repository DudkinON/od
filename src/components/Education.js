import React, {Component} from 'react';

class Education extends Component {


  render() {

    const data = this.props.main;


    return (
      <section className="education" id="education">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="education-title">{data.title}</h3>
              <div className="white-icon"><i className="fas fa-graduation-cap" aria-hidden="true"/></div>
            </div>
            <div className="col-lg-9">
              <div className="education-item">
                <h4>{data.name}</h4>
                <span>{data.description}</span>
                <p>{data.specialisation}</p>
                <em>from: {data.start}, to: {data.end} | </em>
                <span className="education-place">
                                    <a href={data.url} target="_blank">website</a>
                                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;