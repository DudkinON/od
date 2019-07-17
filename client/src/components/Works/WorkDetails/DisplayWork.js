import React from 'react';
import IconCard from './IconCard';
import LinkCard from './LinkCard';


export const DisplayWork = ({name, img, icons, description, github, web, links}) => (
  <div className="work-details__content">
    <h1 className="work-details__header">{name}</h1>
    <div className="work-details__block">
      <div className="work-details__wrapper">
        <div className="work-details__img">
          <img src={img} alt={name}/>
        </div>
      </div>
      <div className="work-details__wrapper">
        <h5 className="work-details__tech--header">Used technologies</h5>
        <div className="work-details__tech">
          {icons.map(icon => <IconCard key={icon.id} {...icon}/>)}
        </div>
      </div>
    </div>
    <div className="work-details__block">
      <div className="work-details__wrapper">
        <div className="work-details__links">
          <h5 className="work-details__links-header">Links</h5>
          <div className="work-details__links-wrapper">
            {github && <LinkCard icon={links.github} url={github}/>}
            {web && <LinkCard icon={links.web} url={web}/>}
          </div>
        </div>
      </div>
      <div className="work-details__wrapper">
        <div className="work-details__description">
          {description}
        </div>
      </div>
    </div>
  </div>
);

export default DisplayWork;