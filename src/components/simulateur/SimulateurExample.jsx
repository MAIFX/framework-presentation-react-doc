import React from "react";
import PropTypes from "prop-types";

import SliderValeur from "maif-framework-presentation-react/lib/components/simulateur/sliderValeur";

class SimulateurExample extends React.Component {
  constructor(props){
    super(props);

    this.state={
      value: 1
    }
  }

  render() {
    const testValues = ["5 ans", {label: "7 ans"}, {label: "10 ans", id: "7357"}];
    return (
      <React.Fragment>
        <SliderValeur value={this.state.value} labels={testValues} onChange={value => this.setState({value})}/>
        <hr />
        <em>Value: </em><code>{JSON.stringify(testValues[this.state.value], 2)}</code>
      </React.Fragment>
    );
  }
}

export default SimulateurExample;