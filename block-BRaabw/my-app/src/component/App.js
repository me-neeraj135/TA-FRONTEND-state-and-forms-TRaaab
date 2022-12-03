/** @format */
import React, { Component } from "react";
import Header from "./Header";

import Aside from "./Aside";

import Main from "./Main";
import data from "../data.json";
import Cart from "./Cart";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "",
      range: "",
      cart: [],
      isOpenCart: false,
    };
  }

  componentDidMount() {
    this.setState({ cart: JSON.parse(localStorage.getItem(`cart`)) });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem(`cart`, JSON.stringify(this.state.cart));
  }
  handleChange = event => {
    this.setState({ range: event.target.value });
  };
  handleSize = ({ target }) => {
    let size = target.innerText;

    this.setState({ size: size });
  };
  handleCart = product => {
    let isPresent = this.state.cart.findIndex(p => p.id === product.id) !== -1;
    if (isPresent) {
      this.handleIncrease(product);
    } else {
      this.setState(prevState => {
        return {
          cart: prevState.cart.concat({ ...product, quantity: 1 }),
        };
      });
    }
  };

  handleIncrease = product => {
    this.setState(prevState => {
      return {
        cart: prevState.cart.map(p => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          }

          return p;
        }),
      };
    });
  };

  handleDecrease = product => {
    if (product.quantity === 1) {
      this.handleRemove(product);
    } else {
      this.setState(prevState => {
        return {
          cart: prevState.cart.map(p => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity - 1 };
            }

            return p;
          }),
        };
      });
    }
  };

  handleRemove = product => {
    this.setState(prevState => {
      return {
        cart: prevState.cart.filter(p => p.id !== product.id),
      };
    });
  };

  closeCart = event => {
    this.setState(prevState => {
      return {
        isOpenCart: !prevState.isOpenCart,
      };
    });
  };
  render() {
    let uiData = [] || data.products;

    data.products.forEach(elm => {
      if (elm.availableSizes.includes(this.state.size)) {
        uiData.push(elm);
      }
    });

    let allData = uiData.length ? uiData : data.products;

    switch (this.state.range) {
      case "lowest":
        allData = allData.sort((a, b) => {
          return a.price - b.price;
        });
        break;

      case "highest":
        allData = allData.sort((a, b) => {
          return b.price - a.price;
        });
        break;

      default:
        break;
    }

    return (
      <div className="">
        <Header
          cart={this.state.cart}
          closeCart={this.closeCart}
          range={this.state.range}
          func={this.handleChange}
          allData={allData}
        />
        <div className="asideMainContainer  flex">
          <Aside func={this.handleSize} {...data} />
          <Main allData={allData} cartFunc={this.handleCart} />
          {this.state.isOpenCart ? (
            <Cart
              closeCart={this.closeCart}
              cart={this.state.cart}
              inc={this.handleIncrease}
              dec={this.handleDecrease}
              del={this.handleRemove}
            />
          ) : (
            ``
          )}
        </div>
      </div>
    );
  }
}

export default App;
