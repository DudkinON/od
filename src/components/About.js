import React, { Component } from 'react';


class About extends Component {
    render() {

        const data = this.props.main;

        return (
            <section className="about appear-animated" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3 className="about-title">about</h3>
                            <div className="icon">
                                <i className="fas fa-user" />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h2 className="about-name">{data.nama}</h2>
                            <div className="about-description">{data.description}</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;