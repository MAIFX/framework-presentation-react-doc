import React from "react";
import WebcallbackTimer from "maif-framework-presentation-react/lib/components/WebcallbackTimer";
// url

class WebcallbackTimerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueTimer: { minutes: "", seconds: "" }
    };
    this.webcallback = React.createRef();
  }
  onClick = () => {
    this.webcallback.current.reset();
  };
  render() {
    return (
      <div className="col-bg-container">
        <WebcallbackTimer
          timeTotal={10}
          timeLeft={10}
          callback={() => console.log("callback")}
          callbackTick={(minutes, seconds) => {
            this.setState({ valueTimer: { minutes, seconds } });
          }}
          ref={this.webcallback}
        />
        <div>
          {this.state.valueTimer.minutes}:{this.state.valueTimer.seconds}
          <button onClick={this.onClick}>Annuler l'appel</button>
        </div>
      </div>
    );
  }
}

export default WebcallbackTimerExample;
