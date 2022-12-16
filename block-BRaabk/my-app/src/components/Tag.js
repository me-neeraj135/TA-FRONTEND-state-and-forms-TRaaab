/** @format */

import React from "react";
import menu from "../Data/data.json";
import Display from "./Display";

class Tag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: ``,
    };
  }

  handleClick = item => {
    this.setState({
      activeMenu: item,
    });
  };

  render() {
    let tags = menu.reduce((acc, cv) => {
      if (!acc.includes(cv.category)) {
        acc.push(cv.category);
      }
      return acc;
    }, []);
    let items;
    if (!this.state.activeMenu) {
      items = menu.map(item => item);
    } else {
      items = menu.filter(item => item.category === this.state.activeMenu);
    }

    return (
      <div className="tagBox">
        <button
          key={items.title}
          onClick={() => {
            this.handleClick(``);
          }}
          className={this.state.activeMenu === `` ? `active` : ``}
        >
          all
        </button>
        {tags.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => {
                this.handleClick(item);
              }}
              className={item === this.state.activeMenu ? `active` : ``}
            >
              {item}
            </button>
          );
        })}
        <Display items={items} />
      </div>
    );
  }
}

export default Tag;
