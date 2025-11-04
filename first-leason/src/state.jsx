// State is similar to variable but in react we use state when we need to change value of variables

import { useState } from "react";

function State() {
  const [fruit, updatefruite] = useState("apple");
    // 1st one hold by default value , 2nd one hold updated value, by default value are written in useState("***")
    const [count,updateCount] = useState(0)
  function cngfrute(name) {
    updatefruite ("banana"); // storing updated value
  }
  return (
    <div>
      <h1>using state</h1>
      <h1>{fruit}</h1>
      <button onClick={cngfrute}>change fruite</button>
      <h1>count:{count}</h1>
      <button onClick={()=>updateCount(count + 1)}>increase</button>
    </div>
  );
}

export default State;
