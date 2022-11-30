/** @format */

function Billing(props) {
  let { billState, func, check, billingData } = props;
  let { errors } = billState;

  return (
    <div className="billingForm">
      <h2>Billing Address</h2>
      <div className="checkBoxContainer">
        <input type="checkbox" className="check" onChange={check} />
        <strong>
          Is the Billing Address the same as the Shipping Address?
        </strong>
      </div>

      <label htmlFor="">
        Address
        <input
          type="text"
          name="address"
          value={billingData.address}
          className={errors.address && `error`}
          placeholder="e.g New Delhi Vasnat Vihar"
          onChange={func}
        />
        <span className="red">{errors.address}</span>
      </label>
      <label htmlFor="">
        zip/Postal Code
        <input
          type="text"
          placeholder="e.g. 176057"
          name="zipCode"
          value={billingData.zipCode}
          onChange={func}
        />
      </label>
      <label htmlFor="">
        city
        <input
          type="text"
          placeholder="e.g New Delhi"
          name="city"
          value={billingData.city}
          onChange={func}
        />
      </label>
      <label htmlFor="">
        Country
        <input
          type="text"
          placeholder="e.g India"
          name="country"
          value={billingData.country}
          onChange={func}
        />
      </label>

      <input type="submit" />
    </div>
  );
}

export default Billing;
