import React, { useState } from "react";

const Form = () => {
    const [input, setinput] = useState("")
    let output;

    function handling(val){
        val.preventDefault() // page er auto reloading off korar jonno
         console.log(input);
         setinput("") // submit er por input variable khali korar jonno

    }
  return (
    <div>
      <form onSubmit={(val)=>{
        handling(val)  // submit er por auto reloading off korar jonno
      }}>
        <input
          className="m-5 border"
          type="text"
          placeholder="enter your name"
          value={input} // input box e value show korar jonno
          onChange={(val)=>{
            setinput(val.target.value) // input e new value insert korar jonno
          }}
        />
        <button>submit</button>
        <h1>{output}</h1>
      </form>
    </div>
  );
};

export default Form;
