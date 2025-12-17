import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  useEffect( 
    function () {
      console.log("useeffect is runnung...");
    },[num1]);

    // useEffect will run when given state will change , in there given state is num1
  return (
    <div>
      <button
        onClick={() => {
          setnum1(num1 + 1);
        }}
        className="p-3 bg-red-600 m-2"
      >
        click num1
      </button>

      <button
        onClick={() => {
          setnum2(num2 + 1);
        }}
        
        className="p-3 bg-red-600 m-2"
      >
        click num2
      </button>

      <h1>num1 {num1}</h1>
      <h1>num2 {num2}</h1>
    </div>
  );
};

export default Useeffect;
