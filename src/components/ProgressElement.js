import React, { Component } from 'react';


class ProgressElement extends Component {

  componentDidUpdate() {
    let percent = this.props.percent;
    let deg = 360*percent/100 ;
    let element = this.refs.progress.getDOMNode();
    element.style.transform = 'rotate(-'+ deg +'deg)';
  }

  render() {

    const progress = this.props.percent;

    function classSet ( classes ) {
      return typeof classes !== 'object' ?
        Array.prototype.join.call(arguments, ' ') :
        Object.keys(classes).filter(function(className){
          return classes[className];
        }).join(' ');
    }

    let percent = Math.floor(progress);
    let classes = classSet({
      "progress-pie-chart": true,
      "gt-50": percent > 50
    });

    return (
      <div className="progress clearfix">
        <div className={classes}>
          <div className="ppc-progress">
            <div className="ppc-progress-fill" ref="progress" />
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>{percent + '%'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressElement;