/** @format */

import Items from "./Items";

function Main(props) {
  let { allData, cartFunc } = props;
  return (
    <main>
      <Items products={allData} cartFunc={cartFunc} />
    </main>
  );
}

export default Main;
