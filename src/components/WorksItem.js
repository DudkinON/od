import React from 'react';
import {redirect} from "../actions/redirect";


class WorksItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
  }

  toggle() {
    this.setState({ isHover: !this.state.isHover });
  }


  render() {

    const self = this;

    if (self.props.isMobile) self.cls = "col-sm-12 col-md-6 text-center work-item";
    else self.cls = "col-sm-12 col-md-6 text-center work-item animated invisible";

    const item = self.props.item;

    let context;

    if (self.state.isHover) context = 1;
    else  context = 0;


    return (
        <div className={self.cls}>
          <div className="card-item"
               style={{backgroundImage: item.img}}
               onClick={redirect(item.url)}
               onMouseEnter={self.toggle.bind(self)}
               onMouseLeave={self.toggle.bind(self)}>
            <img src={item.images} alt={item.title} />
            <div className="card-container animated" style={{opacity: context}}>
              <h6>{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default WorksItem;