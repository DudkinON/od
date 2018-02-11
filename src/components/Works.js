import React, {Component} from 'react'
import WorkElement from "./WorkElement";


class Works extends Component {

  constructor(props) {
    super(props);
    this.state = {
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

    const {error, isLoaded, items} = this.state;


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="skills">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <h3 className="skills-title">Works</h3>
                <div className="white-icon"><i className="fas fa-file-code"/></div>
              </div>
              <div className="col-lg-10 row">
                {items.map( (item, i) =>
                  <WorkElement item={item} key={"work_" + i}/>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default Works;