/** @format */

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: `basketball`,
    };
  }

  render() {
    let labels = [`basketball`, `cricket`, `laptop`, `phone`, `pubg`, `tiger`];
    return (
      <>
        <div>
          {labels.map(label => (
            <button
              key={label}
              className={this.state.active === label ? `active` : ``}
              onClick={() => {
                this.setState({
                  active: label,
                });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <img
            src={`/images/${this.state.active}.jpg`}
            alt={this.state.active}
          />
        </div>
      </>
    );
  }
}

export default App;
