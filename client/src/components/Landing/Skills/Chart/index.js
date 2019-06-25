import React, {Component} from 'react';
import Progressbar from './Progressbar';


export class Chart extends Component {

  render() {

    const props = this.props;

    return (
      <div className="chart">
        <div className="chart__block">
          <h3>{props.name}</h3>
          <Progressbar {...props} />
        </div>
      </div>
    );
  }
}

export default Chart;