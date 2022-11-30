/** @format */

function Shipping(props) {
  let { shipState, func } = props;
  let { errors } = shipState;

  return (
    <div className="shippingForm">
      <h2>Shipping Address</h2>

      <label htmlFor="">
        Address
        <input
          type="text"
          placeholder="e.g New Delhi Vasnat Vihar"
          name="address"
          value={shipState.address}
          className={errors.address && `error`}
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
          value={shipState.zipCode}
          onChange={func}
        />
      </label>
      <label htmlFor="">
        city
        <input
          type="text"
          placeholder="e.g New Delhi"
          name="city"
          value={shipState.city}
          onChange={func}
        />
      </label>
      <label htmlFor="">
        Country
        <input
          type="text"
          placeholder="e.g India"
          name="country"
          value={shipState.country}
          onChange={func}
        />
      </label>

      <input type="submit" />
    </div>
  );
}

export default Shipping;
