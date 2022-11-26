/** @format */

function Display(props) {
  return (
    <ul className="menuBox">
      {props.items.map(item => {
        return (
          <li key={item.title}>
            <figure>
              <img className="full-width" src={item.img} alt={item.title} />
            </figure>
            <div className="detailBox">
              <div className="priceBox">
                <h2>{item.title}</h2>
                <span className="price">${item.price}</span>
              </div>
              <p>{item.desc}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Display;
