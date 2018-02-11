import React, { Component } from 'react';

class Experience extends Component {
    render() {

        const data = this.props.main;

        return (
            <section className="experience" id="experience">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h3 className="experience-title">{data.title}</h3>
                            <div className="icon"><i className="fas fa-briefcase" /></div>
                        </div>
                        <div className="col-lg-9 row">
                            {data.list.map( (item, i) =>
                                <div className="card experience-item" key={"place_" + i}>
                                    <div className="experience-name">{item.title}</div>
                                    <em>from: {item.start}, to: {item.end}</em>
                                    <div className="experience-job">{item.description}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;