import React from 'react';
import IconCard from "./IconCard";


export const LinkCard = ({icon, url}) => {
  console.log(icon, url);
  const open = () => {
    const specs = 'width=800,height=600';
    window.open(url, "", specs)
  };

  return (
    <div className="work-details__link-card">
      <div className="work-details__link-card--icon" onClick={open}>
        <IconCard icon={icon.icon} view={icon.view}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={icon.view}>
          <path fill="currentColor" d={icon.icon}/>
        </svg>
      </div>
    </div>
  );
}

export default LinkCard;