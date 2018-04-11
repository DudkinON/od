import React from 'react';
import {redirect} from "../actions/redirect";


class WorksItem extends React.Component {


  render() {

    const item = this.props.item;

    return (
        <div className="col-sm-12 col-md-6 text-center work-item animated invisible">
          <div className="card-item"
               style={{backgroundImage: item.img}}
               onClick={redirect(item.url)}>
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