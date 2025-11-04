import { useState } from "react";

function Inputs() {
  let [val, setval] = useState("enter value");
  return (
    <div>
      <input
        type="text"
        value={val} //keep Value inside inbox field and output same, so when we clear output it aloso clear value inside input box
        onChange={(data) => setval(data.target.value)} // when input is changed it will store in serval
      />
      <h1>{val}</h1>
      <button onClick={() => setval("")}>clr</button> // click button for clear value
    </div>
  );
}

export default Inputs;
