/** @format */

function Aside(props) {
  let { func, products } = props;
  let sizes = products
    .reduce((acc, item) => {
      acc = acc.concat(item.availableSizes);
      return acc;
    }, [])
    .reduce((acc, size) => {
      if (!acc.includes(size)) {
        acc.push(size);
      }
      return acc;
    }, []);

  return (
    <aside>
      <ul className="sizeBox  flex justify-between flex-wrap-yes ">
        {sizes.map(size => {
          return (
            <li
              className="sizeBtn flex align-center justify-center   "
              onClick={func}
            >
              {size}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Aside;
