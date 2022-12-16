/** @format */

import React, { Component } from "react";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InputValue: "",
    };
    this.fileInput = React.createRef();
  }

  handleChange = ({ target }) => {
    this.setState({ InputValue: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.fileInput.current.files[0].name);
  };
  render() {
    return (
      <form className="multipleInput" onSubmit={this.handleSubmit}>
        <label htmlFor="textInput">
          Text Input
          <input type="text" id="textInput" onChange={this.handleChange} />
        </label>

        <label htmlFor="date">
          date Input
          <input type="date" id="date" onChange={this.handleChange} />
        </label>

        <label htmlFor="file">
          file Input
          <input type="file" id="file" ref={this.fileInput} />
        </label>

        <label htmlFor="readOnly">
          readOnly
          <input type="text" id="readOnly" onChange={this.handleChange} />
        </label>

        <label htmlFor="disabledInput">
          disabledInput
          <input
            type="text"
            disabled
            id="disabledInput"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="textArea">
          textArea <br />
          <textarea
            name=""
            id="textArea"
            cols="30"
            rows="10"
            onChange={this.handleChange}
          ></textarea>
        </label>

        <label htmlFor="textAreaDisabled">
          textArea Disabled <br />
          <textarea
            name=""
            id="textAreaDisabled"
            cols="30"
            rows="10"
            disabled
            onChange={this.handleChange}
          ></textarea>
        </label>

        <input type="submit" />
      </form>
    );
  }
}

export default Inputs;
