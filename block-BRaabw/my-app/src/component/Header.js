/** @format */

function Header(props) {
  let { func, range, allData, closeCart, cart } = props;
  return (
    <header>
      <div className=" flex justify-between align-center">
        <h1>Insta Cart</h1>
        <div className="flex justify-end align-center">
          <div>
            <span className="productNum">{allData.length} products found</span>
            <select name="" id="" value={range.range} onChange={func}>
              <option value="" selected hidden>
                select range
              </option>
              <option value="lowest">lowest to highest</option>
              <option value="highest">highest to lowest</option>
            </select>
          </div>
          <figure className="cartBox" onClick={closeCart}>
            <img src="/static/bag-icon.png" alt="" />
            <figcaption className="cartCount">
              {cart.length > 0 ? cart.length : ``}
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Header;
