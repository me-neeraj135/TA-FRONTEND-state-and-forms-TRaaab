/** @format */

import React from "react";

class Aside extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
    };
  }
  render() {
    return (
      <aside className="aside">
        <ul className="asideNav">
          <li className="asideList">
            <a href="#">Home</a>
          </li>
          <li className="asideList">
            <a href="#">Contact</a>
          </li>
          <li className="asideList">
            <a href="#">about</a>
          </li>
        </ul>
        <ul className="asideNav">
          <li className="asideList">
            <a href="">hide</a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Aside;
