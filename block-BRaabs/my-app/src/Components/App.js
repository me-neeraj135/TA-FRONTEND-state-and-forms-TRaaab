/** @format */

import "../Style/App.css";

import Form from "./Form";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        zipCode: "",
        city: "",
        country: "",
        errors: {
          address: "",
        },
      },

      billing: {
        address: "",
        zipCode: "",
        city: "",
        country: "",
        errors: {
          address: "",
        },
      },

      isSame: false,
    };
  }

  handleChange = event => {
    // console.dir(event.target.parentElement.parentElement.className);
    if (event.target.parentElement.parentElement.className === `shippingForm`) {
      let { name, value } = event.target;
      let errors = this.state.shipping.errors;

      switch (name) {
        case "address":
          errors.address =
            value.length < 6 ? "address must be greater than 6 characters" : "";
          break;

        default:
          break;
      }
      this.setState({
        shipping: { ...this.state.shipping, errors, [name]: value },
      });
    } else {
      let { name, value } = event.target;
      let errors = this.state.billing.errors;
      // console.log(name, value);

      switch (name) {
        case "address":
          errors.address =
            value.length < 6 ? "address must be greater than 6 characters" : "";
          break;

        default:
          break;
      }
      this.setState({
        billing: { ...this.state.billing, errors, [name]: value },
      });
    }
  };

  handleCheckBox = event => {
    // console.log(event.target.checked);
    this.setState(({ isSame }) => ({ isSame: !isSame }));
  };
  render() {
    const { isSame, billing, shipping } = this.state;
    const billingData = isSame ? shipping : billing;

    // console.log(isSame, billing, shipping);
    return (
      <div>
        <header className="App-header">
          <h1>
            📑 Learning About Forms <br />
            Controlled vs Uncontrolled Component
          </h1>
        </header>
        <main>
          <Form
            states={this.state}
            func={this.handleChange}
            check={this.handleCheckBox}
            billingData={billingData}
          />
        </main>
      </div>
    );
  }
}

export default App;
