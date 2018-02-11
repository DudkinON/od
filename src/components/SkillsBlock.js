import React, {Component} from 'react';
import SkillItem from './SkillItem'


class SkillsBlock extends Component {


  render() {

    const data = this.props.data;

    return (
      <div className="col-lg-10 row">
        {data.map((item, i) =>
          <div className="col-md-6 row block-offset" key={"skill_" + i}>
            <div className="skills-header">{item.title}</div>
            {item.list.map((elem, j) =>
              <SkillItem elem={elem} key={"skill_item_" + j} asyncCallback={this.props.asyncCallback}/>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SkillsBlock;