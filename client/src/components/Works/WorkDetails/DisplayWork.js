import React, {useEffect} from 'react';
import IconCard from './IconCard';
import LinkCard from './LinkCard';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getWork} from "../../../actions";


export const DisplayWork = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {config, work} = useSelector(state => state);

  console.log(config.urls.work, id, work, `${config.urls.work}/${id}.json`);
  useEffect(() => {
    dispatch(getWork(`${config.urls.work}/${id}.json`));
  }, [config, dispatch, id]);


  return (
    <div className="work-details__content">
      <h1 className="work-details__header">{work?.name}</h1>
      <div className="work-details__block">
        <div className="work-details__wrapper">
          <div className="work-details__img">
            <img src={work?.img} alt={work?.name}/>
          </div>
        </div>
        <div className="work-details__wrapper">
          <h5 className="work-details__tech--header">Used technologies</h5>
          <div className="work-details__tech">
            {work?.icons.map(icon => <IconCard key={icon.id} {...icon}/>)}
          </div>
        </div>
      </div>
      <div className="work-details__block">
        <div className="work-details__wrapper">
          <div className="work-details__links">
            <h5 className="work-details__links-header">Links</h5>
            <div className="work-details__links-wrapper">
              {work?.github && <LinkCard icon={config.icons.github}
                                         url={work.github}/>}
              {work?.web && <LinkCard icon={config.icons.web} url={work.web}/>}
            </div>
          </div>
        </div>
        <div className="work-details__wrapper">
          <div className="work-details__description">
            {work?.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayWork;