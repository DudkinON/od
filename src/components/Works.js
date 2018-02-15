import React, {Component} from 'react'
import WorkElement from "./WorkElement";
import $ from "jquery";


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

    $(document).ready(function(){
      $('#works').viewportChecker({
        classToRemove: 'invisible',
        classToAdd: 'visible fadeInLeft',
        offset: 300});
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="works animated invisible" id="works">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <h3 className="skills-title">Works</h3>
                <div className="white-icon"><i className="fas fa-file-code"/></div>
              </div>
              <div className="col-lg-10 row">
                {items.map( (item, i) =>
                  <WorkElement item={item} key={"work_" + i} i={i}/>
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