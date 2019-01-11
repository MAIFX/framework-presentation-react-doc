import React from "react";
import SliderValeur from "maif-framework-presentation-react/lib/components/form/SliderValeur";

class SliderValeurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    };
  }

  render() {
    const testValues = [{ label: "5 ans" }, { label: "7 ans" }, { label: "10 ans", id: "7357" }];
    return (
      <div className="col-form-container">
        <form className="maif-form">
          <React.Fragment>
            <SliderValeur value={this.state.value} labels={testValues} onChange={value => this.setState({ value })} />
            <hr />
            <em>Value: </em>
            <code>{JSON.stringify(testValues[this.state.value], 2)}</code>
          </React.Fragment>
        </form>
      </div>
    );
  }
}

export default SliderValeurExample;
