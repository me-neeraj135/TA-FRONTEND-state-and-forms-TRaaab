/** @format */

function Display(props) {
  return (
    <ul className="menuBox">
      {props.items.map(item => {
        return (
          <li
            key={item.title}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
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
