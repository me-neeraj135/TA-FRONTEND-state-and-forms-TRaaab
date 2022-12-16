/** @format */

import React from "react";

import Data from "../data/data.json";

import Content from "./Content";

class Ques extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
    };
  }

  render() {
    return (
      <ul>
        {Data.map((data, i) => {
          return (
            <>
              <li
                onClick={() => {
                  this.setState({
                    index: this.state.index === i ? null : i,
                  });
                }}
              >
                <h2 className="ques">
                  {data.Q} {this.state.index === i ? `👆` : `👇`}
                </h2>
                {i === this.state.index && <Content answer={data.A} />}
              </li>
            </>
          );
        })}
      </ul>
    );
  }
}

export default Ques;
