import Biodata from "./loop2";

function Mapping() {
  // array er moddhe object(array of object)
  const info = [
    {
      name: "solehin",
      roll: 3,
    },
    {
      name: "faruk",
      roll: 4,
    },
  ];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>name</td>
            <td>roll</td>
          </tr>
        </thead>
        <tbody>
          {/* {info.map((data) => (
            // data er moddhe 1ta 1ta kore object dhukbe, map holo loop ekta ektakore obj chalabe
            <tr key={data.roll}> // loop er every row ke unique key dewa 
              <td>{data.name}</td>
              <td>{data.roll}</td>
            </tr>
          ))} */}

          {info.map((data) => { //array er upor map function use kora hoyeche
            return <Biodata bio={data} />; // props use kore Biodata function er bio er moddhe data (object) er value add kora hoy
                                          // data er moddhe arrayr object gulo 1 by 1 store hbe
          })} 
        </tbody>
      </table>
    </div>
  );
}
export default Mapping;
