function Calling() {
  function color() {
    alert("red");
  }
  function fruits(name) {
    alert(name);
  }
  return (
    <div>
      <button onClick={color}>color</button>
      <button onClick={() => fruits("apple")}>fruits</button>

      {/* onClick er moto joto key word ache emon camel case(2ta word er moddhe 2nd ta capital letter diye shuru) */}
      {/* function jsx e nije nijei call hoy ekhane function call kora jabe na(color() not allowed)
       defination/name tai likhte hoy(color is correct way)  */}
       {/* function er moddhe parameter pass korte hbe 11no line er syntax e */}
    </div>
  );
}

export default Calling;
