import React from 'react';
import {Link} from 'react-router-dom';


export const WorkCard = props => (
  <Link to={`${props.url}/${props.id}`} className="works__card">
    <img src={props.img} alt={props.name}/>
    <span className="works__name">{props.name}</span>
  </Link>
);


export default WorkCard;