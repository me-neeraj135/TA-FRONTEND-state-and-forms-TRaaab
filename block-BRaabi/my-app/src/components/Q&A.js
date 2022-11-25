/** @format */

import React from "react";

import Data from "../data/data.json";

import Content from "./Content";

class Ques extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  showAnswer = () => {
    this.setState({
      close: !this.state.close,
    });
  };

  render() {
    return (
      <ul>
        {Data.map((data, i) => {
          return (
            <>
              <li onClick={this.showAnswer} >
                <p className="ques"> {data.Q}</p>

                <Content answer={this.state.close ? data.A : ``} />
              </li>
            </>
          );
        })}
      </ul>
    );
  }
}

export default Ques;
