/** @format */

function Cards(props) {
  let { family, inputText } = props;

//   console.log(props, `fff`);
  return (
    <li style={{ fontFamily: family, fontSize: `2rem` }} className="card">
      <span></span>
      <p style={{ fontFamily: family, fontSize: inputText.fontSize + `px` }}>
        {inputText.inputValue}
      </p>
    </li>
  );
}

export default Cards;
