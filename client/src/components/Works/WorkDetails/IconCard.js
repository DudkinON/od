import React from 'react';


export const IconCard = ({name, icon, view}) => (
  <div className="work-details__icon-card">
    <div className="work-details__icon-card--icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={view}>
        <path fill="currentColor" d={icon}/>
      </svg>
    </div>
    <div className="work-details__icon-card--name">{name}</div>
  </div>
);


export default IconCard;