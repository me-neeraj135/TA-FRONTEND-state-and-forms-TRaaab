/** @format */

function Cart(props) {
  let { cart, closeCart } = props;

  let amount = 0;
  return (
    <div className="cart">
      <span className="closeBtn" onClick={closeCart}>
        ❌
      </span>{" "}
      <br />
      {cart.length > 0 ? (
        <ul>
          {cart.map(elm => {
            amount += elm.quantity * elm.price;
            return (
              <li className="flex">
                <figure>
                  <img src={`/static/products/${elm.sku}_2.jpg`} alt="" />
                </figure>
                <div className="crtItmBx">
                  <p className="cartDtl">{elm.title}</p>
                  <br />
                  <span className="cartDtl">$:{elm.price}</span> <br />
                  <span className="cartDtl">quantity:{elm.quantity}</span>{" "}
                  <br />
                  <span className="price">
                    sub total:{elm.quantity * elm.price}
                  </span>
                  <div className="">
                    <button
                      className="quantityBtn"
                      onClick={() => props.dec(elm)}
                    >
                      -
                    </button>
                    <button
                      className="quantityBtn"
                      onClick={() => props.inc(elm)}
                    >
                      +
                    </button>

                    <span className="removeItem" onClick={() => props.del(elm)}>
                      remove Item
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
          <div className="flex  flex-direction-column">
            <p className="flex-100  flex justify-between totalAmountBx">
              <span className="totalAmountX">Total amount</span>
              <span className="amountPrice">$:{amount}</span>
            </p>
            <button className="flex-100 chkBtn">checkout</button>
          </div>
        </ul>
      ) : (
        `no item in your cart`
      )}
    </div>
  );
}

export default Cart;
