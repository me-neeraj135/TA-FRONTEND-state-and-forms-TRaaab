/** @format */
import Item from "./item";

function Items(props) {
  let { products, cartFunc } = props;
  return (
    <ul className="flex  flex-wrap-yes ">
      {products.map(item => {
        return <Item {...item} cartFunc={cartFunc} />;
      })}
    </ul>
  );
}

export default Items;
