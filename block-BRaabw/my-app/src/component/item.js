/** @format */

function Item(props) {
  let { cartFunc } = props;
  return (
    <li className="product  flex-30  relative  ">
      <span className={props.isFreeShipping ? "shippingBtn   absolute" : ``}>
        {props.isFreeShipping ? `free shipping` : ``}
      </span>
      <figure>
        <img src={`/static/products/${props.sku}_1.jpg`} alt="img" />
      </figure>
      <div className="textCenter">
        <p className="title">{props.title}</p>
        <span className="title">
          {props.currencyFormat}:{props.price}
        </span>
        <br />

        <button className="btn btn-primary" onClick={() => cartFunc(props)}>
          add to Cart
        </button>
      </div>
    </li>
  );
}

export default Item;
