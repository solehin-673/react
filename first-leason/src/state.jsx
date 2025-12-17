// State is similar to variable but in react we use state when we need to change value of variables

import { useState } from "react";

function State() {
  const [fruit, updatefruite] = useState("apple");
    // 1st one hold by default value , 2nd one hold updated value, by default value are written in useState("***")
    const [count,updateCount] = useState(0)
  function cngfrute(name) {
    updatefruite ("banana"); // storing updated value
  }

  // object
  const [info, setinfo] = useState({user:"solehin",age:23})
  function copy() {
    const update={...info} //copy
    update.age=24 //update
    setinfo(update) // insert
  }

  //array
  const [arr, setarr] = useState([10,20,30])
  function updatearr(){
    const newarr = [...arr]
    newarr.push(40)
    setarr(newarr)

    // setarr(newarr=>([...newarr,40])) we can write like this also
  }
  return (
    <div>
      <h1>using state</h1>
      <h1>{fruit}</h1>
      <button onClick={cngfrute}>change fruite</button>
      <h1>count:{count}</h1>
      <button onClick={()=>updateCount(count + 1)}>increase</button>

      //object
      <h1>{info.user},{info.age}</h1>
      <button onClick={copy}>click</button>

      //array
      <h1>{arr}</h1>
      <button onClick={updatearr}>arr click</button>
    </div>
  );
}

export default State;
