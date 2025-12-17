import React from "react";

const Fun = () => {
  function clicked() {
    console.log("cliked");
  }

  function input(data){ //receiving
    console.log(data.target.value);
  }
  return (
    <div>
      <button onClick={clicked}>clicke</button>
      <input onChange={(elem)=>{
        input(elem) //sending
      }} type="text" placeholder="write here"/>
    </div>
  );
};

export default Fun;
