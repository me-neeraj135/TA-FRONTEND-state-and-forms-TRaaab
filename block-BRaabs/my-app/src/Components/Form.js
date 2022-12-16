/** @format */
import Shipping from "./Shipping";
import Billing from "./Billing";

function Form(props) {
  let { shipping, billing } = props.states;
  let { func, check, billingData } = props;

  return (
    <>
      <Shipping shipState={shipping} func={func} />
      <Billing
        billState={billing}
        func={func}
        check={check}
        billingData={billingData}
      />
    </>
  );
}

export default Form;
