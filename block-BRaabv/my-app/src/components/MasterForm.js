/** @format */

import React, { Component } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      email: ``,
      username: "",
      password: "",
      errors: {
        email: ``,
        username: "",
        password: "",
      },
    };
  }

  handlePreBtn = () => {
    let currentStep = this.state.currentStep;

    currentStep = currentStep <= 1 ? 1 : currentStep - 1;

    this.setState({ currentStep: currentStep });
  };

  handleNextBtn = () => {
    let currentStep = this.state.currentStep;
    let { errors } = this.state;
    if (errors.email) {
      alert(errors.email);
    } else if (this.state.email.length === 0) {
      alert(`please put your email`);
    } else {
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
      this.setState({
        currentStep: currentStep,
      });
    }
  };
  // function for button

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return <button onClick={this.handlePreBtn}>previous</button>;
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;

    if (currentStep < 3) {
      return <button onClick={this.handleNextBtn}>next</button>;
    }

    return null;
  }

  validateEmail = email => {
    var exp = /\S+@\S+\.\S+/;
    return exp.test(email);
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.validateEmail(value) ? "" : `email is not valid`;

        break;

      case "username":
        errors.username =
          value.length < 3 ? "username must have 3 characters" : "";

        break;

      case "password":
        errors.password = value.length < 5 ? "password length should be 5" : "";

        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    alert(this.state.email, this.state.username, this.state.password);
    // alert(`hello`);
  };
  render() {
    let { email, username, password } = this.state.errors;
    return (
      <main>
        <p>steps :{this.state.currentStep}/3</p>
        <form onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            states={this.state}
            func={this.handleChange}
          />
          <Step2
            currentStep={this.state.currentStep}
            states={this.state}
            func={this.handleChange}
          />
          <Step3
            currentStep={this.state.currentStep}
            states={this.state}
            func={this.handleChange}
          />

          {this.state.currentStep === 3 ? (
            <input
              type="submit"
              className={email || username || password ? `hide` : ``}
              value="sign up"
            />
          ) : null}
        </form>
        {this.previousButton()}
        {this.nextButton()}
      </main>
    );
  }
}

export default MasterForm;
