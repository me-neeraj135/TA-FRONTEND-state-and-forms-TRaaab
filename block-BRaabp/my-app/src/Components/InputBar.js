/** @format */

function InputBar(props) {
  let { change, state, fontType, range } = props;
  // console.log(props, `ddd`);
  return (
    <div className="inputBarBox">
      <div className="searchBox">
        <input className="fullWidth" type="text" placeholder="Search Font" />
      </div>

      <div className="typeBox">
        <select
          className="fontModeSelect"
          value={state.fontMode}
          onChange={fontType}
        >
          <option value="sentence">sentence</option>
          <option value="custom">custom</option>
          <option value="paragraph">Paragraph</option>
        </select>
        <input
          className="fullWidth"
          type="text"
          placeholder="Type Something"
          value={state.customValue}
          onChange={change}
        />
      </div>

      <div className="rangeBox">
        <select
          className="rangeSelect"
          name=""
          id=""
          value={state.fontSize + `px`}
        >
          <option value="">{state.fontSize + `px`}</option>
          <option value="20">20px</option>
          <option value="35">35px</option>
        </select>
        <input
          className="fullWidth"
          type="range"
          placeholder="Search Font"
          min="19"
          max="30"
          value={state.fontSize}
          onChange={range}
        />
      </div>
    </div>
  );
}

export default InputBar;
