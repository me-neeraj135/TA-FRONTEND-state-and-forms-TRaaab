/** @format */

import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  isValidEmail = email => {
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;

    // console.log(name, value);
    switch (name) {
      case "userName":
        errors.userName =
          value.length > 2 ? "" : "username must be 3 character";
        break;

      case "email":
        errors.email = this.isValidEmail(value) ? "" : `email is not valid`;

        break;
      case "password":
        errors.password = value.length < 5 ? "password length should be 5" : ``;

        break;
      case "confirmPassword":
        errors.confirmPassword =
          value !== this.state.password ? "`password not matched`" : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(
      this.state.userName +
        this.state.email +
        this.state.password +
        this.state.confirmPassword
    );
    this.setState({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  render() {
    let { userName, email, password, confirmPassword } = this.state.errors;
    return (
      <form className="formBox" onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            name="userName"
            className={userName ? `error` : `green`}
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <span className={userName && `error`}>{userName}</span>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            className={email ? `error` : `green`}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <span className={email && `error`}>{email}</span>
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            className={password ? `error` : `green`}
            value={this.state.password}
            onChange={this.handleChange}
          />
          <span className={password && `error`}>{password}</span>
        </label>

        <label htmlFor="confirm">
          confirmPassword
          <input
            type="password"
            id="confirm"
            name="confirmPassword"
            className={confirmPassword ? `error` : `green`}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <span className={confirmPassword && `error`}>{confirmPassword}</span>
        </label>

        <input type="submit" />
      </form>
    );
  }
}

export default Form;
