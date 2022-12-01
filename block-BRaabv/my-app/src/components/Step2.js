/** @format */

function Step2(props) {
  let { func } = props;
  let { username } = props.states;
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div>
      <label htmlFor="username">
        username
        <input
          type="text"
          id="username"
          value={username}
          name="username"
          onChange={func}
          className={props.states.username.length < 3 ? "error" : ``}
          placeholder="enter your username"
        />
      </label>
    </div>
  );
}

export default Step2;
