import React from 'react';
import {Link} from 'react-router-dom';


export const WorkCard = props => (
  <Link to={`${props.url}/${props.id}`} className="works__card">
    <div className="works__card-box">
      <h5 className="works__card-header">Used technologies</h5>
      <div className="works__card-icon-container">
        {props.icons.map(icon => (
          <div className="works__card-icon" key={icon.id}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.view}>
              <path fill="currentColor" d={icon.icon}/>
            </svg>
          </div>
        ))}
      </div>
    </div>
    <img src={props.img} alt={props.name}/>
    <span className="works__name">{props.name}</span>
  </Link>
);


export default WorkCard;