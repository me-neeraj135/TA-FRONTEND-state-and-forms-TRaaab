/** @format */

import React from "react";

class StepTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      max: Infinity,
    };
  }
  maxByFifteen = () => {
    this.setState({
      max: (this.state.max = 15),
    });
  };

  maxByOneHundred = () => {
    this.setState({
      max: (this.state.max = 100),
    });
  };

  maxByTwoHundred = () => {
    this.setState({
      max: (this.state.max = 200),
    });
  };
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
    if (this.state.counter + this.state.step <= this.state.max) {
      this.setState({
        counter: this.state.counter + this.state.step,
      });
    } else {
      alert(`limit exceed`);
    }
  };
  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - this.state.step,
      });
    } else {
      alert(`can't decrease more than Zero`);
    }
  };
  handleReset = () => {
    this.setState({
      step: (this.state.step = 1),
      max: (this.state.max = Infinity),
      counter: (this.state.counter = 0),
    });
  };
  render() {
    return (
      <div className="stepTwoAppContainer">
        <span>{this.state.counter}</span> <br />
        <div className="valueContainer">
          <div className="stepValue">
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
          <div className="maxValue">
            <h2>Max value</h2>
            <span
              onClick={this.maxByFifteen}
              className={(`max`, this.state.max === 15 ? `active` : ``)}
            >
              15
            </span>
            <span
              onClick={this.maxByOneHundred}
              className={(`max`, this.state.max === 100 ? `active` : ``)}
            >
              100
            </span>
            <span
              onClick={this.maxByTwoHundred}
              className={(`max`, this.state.max === 200 ? `active` : ``)}
            >
              200
            </span>
          </div>
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

export default StepTwo;
