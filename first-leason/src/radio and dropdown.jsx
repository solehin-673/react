import { use } from "react";
import { useState } from "react";

function Info() {
  let [gen, setgen] = useState("male");
  let [city, setcity] = useState("chittagong");
  return (
    <div>
      <h1>select gender</h1>
      <input
        type="radio"
        value={"male"}
        id="male"
        onChange={(event) => setgen(event.target.value)}
        name="gender"
        checked={gen == "male"}
      />
      <label htmlFor="male">male</label>

      <input
        type="radio"
        value={"female"}
        id="female"
        onChange={(event) => setgen(event.target.value)}
        name="gender"
        checked={gen == "female"}
      />
      <label htmlFor="female">female</label>

      <h1>gender:{gen}</h1>

      <select onChange={(event) => setcity(event.target.value)} defaultValue={"chittagong"}>
        <option value="dhaka">DHK</option>
        <option value="chittagong">CTG</option>
        <option value="cumilla">COM</option>
      </select>
      <h1>city:{city}</h1>
    </div>
  );
}

export default Info;
