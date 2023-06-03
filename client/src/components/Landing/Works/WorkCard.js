import React from 'react';
import {Link} from 'react-router-dom';


export const WorkCard = ({url, id, icons, img, name}) => (
  <Link to={`${url}/${id}`} className="works__card">
    <div className="works__card-box">
      <h5 className="works__card-header">Used technologies</h5>
      <div className="works__card-icon-container">
        {icons.map(icon => (
          <div className="works__card-icon" key={icon.id}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.view}>
              <path fill="currentColor" d={icon.icon}/>
            </svg>
          </div>
        ))}
      </div>
    </div>
    <img src={img} alt={name}/>
    <span className="works__name">{name}</span>
  </Link>
);


export default WorkCard;