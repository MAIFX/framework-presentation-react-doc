import React from "react";
import WebcallbackTimer from "maif-framework-presentation-react/lib/components/WebcallbackTimer";
// url

class WebcallbackTimerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTimer: { minutes: "", seconds: "" }
    };
  }
  render() {
    return (
      <div className="col-bg-container">
        <WebcallbackTimer
          timeTotal={600}
          timeLeft={300}
          callback={() => console.log("callback")}
          callbackTick={(minutes, seconds) => {
            this.setState({ valueTimer: { minutes, seconds } });
          }}
        />
        <div>
          {this.state.valueTimer.minutes}:{this.state.valueTimer.seconds}
        </div>
      </div>
    );
  }
}

export default WebcallbackTimerExample;
