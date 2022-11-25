/** @format */

import React from "react";

class StepOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
    };
  }

  stepByFive = () => {
    this.setState({
      step: (this.state.step = 5),
    });
  };
  stepByTen = () => {
    this.setState({
      step: (this.state.step = 10),
    });
  };

  stepByFifteen = () => {
    this.setState({
      step: (this.state.step = 15),
    });
  };
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      step: (this.state.step = 1),
      counter: (this.state.counter = 0),
    });
  };
  render() {
    return (
      <div className="stepOneAppContainer">
        <div>
          <span>{this.state.counter}</span> <br />
          <h2>step</h2>
          <span
            onClick={this.stepByFive}
            className={this.state.step === 5 ? `active` : ``}
          >
            5
          </span>
          <span
            onClick={this.stepByTen}
            className={this.state.step === 10 ? `active` : ``}
          >
            10
          </span>
          <span
            onClick={this.stepByFifteen}
            className={this.state.step === 15 ? `active` : ``}
          >
            15
          </span>
        </div>

        <div>
          <button onClick={this.handleIncrement}>increment</button>
          <button onClick={this.handleDecrement}>decrement</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    );
  }
}

export default StepOne;
