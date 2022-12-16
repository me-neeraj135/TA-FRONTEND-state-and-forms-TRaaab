/** @format */

function step3(props) {
  let { func } = props;
  let { password } = props.states;
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div>
      <label htmlFor="password">
        password
        <input
          type="password"
          id="password"
          value={password}
          name="password"
          placeholder="enter your password"
          className={props.states.errors.password && `error`}
          onChange={func}
        />
        <span>{props.states.errors.password}</span>
      </label>
    </div>
  );
}

export default step3;
