import { useState } from "react";

function Check() {
  let [skills, setSkills] = useState([]);
  function handleskills(event) {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
      // ...skills mane holo ager shob value , tar por event.target.value er value sesh e dhukbe
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
    // filter ekta function jeta kono kichu ke check kore rekhe dey
    // item er moddhe ekta ekta kore value ashbe
    // ekhane condition holo unchecked item er sathe jeta milbe na oita skills er moddhe store hbe
  }

  return (
    <div>
      <input type="checkbox" id="php" value="PHP" onChange={handleskills} />
      <label htmlFor="php">advanced PHP</label>
      <br />
      <br />
      {/* label tag text ke input er sathe bind kore , text e click korle ow check hbe */}
      <input type="checkbox" id="css" value="CSS" onChange={handleskills} />
      <label htmlFor="css">advanced CSS</label>
      <br />
      <br />
      <input
        type="checkbox"
        id="js"
        value="JavaScript"
        onChange={handleskills}
      />
      <label htmlFor="js">advanced JS</label>
      <br />
      <br />
      <h1>{skills.toString()}</h1>
      {/* toString() hocche JavaScript er array method. Eta array er sob element ke
      string e convert kore, ar prottekta element er majhe comma ( , ) diye join
      kore dey. */}
    </div>
  );
}
export default Check;
