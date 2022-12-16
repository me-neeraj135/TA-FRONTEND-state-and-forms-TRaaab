/** @format */

function Step1(props) {
  let { func } = props;
  let { email } = props.states;

  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <label htmlFor="email">
        email
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          className={props.states.errors.email ? `error` : ``}
          placeholder="enter your email"
          onChange={func}
        />
      </label>
    </div>
  );
}

export default Step1;
