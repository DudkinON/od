import React from 'react';
import {Link} from 'react-router-dom';


export const WorkCard = props => (
  <Link to={`${props.url}/${props.id}`} className="works__card">
    <div className="works__card-box">
      <div className="works__card-content">
        <div className="works__card-content--name">
          <span>{props.name}</span>
        </div>
        <div className="works__card-content--description"
        >{props.description}</div>
      </div>
    </div>
    <img src={props.img} alt={props.name}/>
    <span className="works__name">{props.name}</span>
  </Link>
);


export default WorkCard;