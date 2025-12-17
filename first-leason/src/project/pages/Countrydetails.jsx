import React, { useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getindvcountrydata } from "../api/postApi";
import { useEffect } from "react";

const Countrydetails = () => {
  const params = useParams();
  // useParams() dynamic parameter ke access kore , ekhane id holo dynamic parameter, useparams id er value ene dibe
  console.log(params.id);
  const [isPending, startTransition] = useTransition();
  const [country, setcountry] = useState();

  useEffect(() => {
    // startTransition state ke update korar function
    startTransition(async () => {
      const res = await getindvcountrydata(params.id);

      if (res.status === 200) {
        // status 200 mean data recieved successfully without error
        setcountry(res.data[0]);
      }

      console.log(res);
    });
  }, []);

  if (isPending) return <h1>loading...</h1>;
  // is pending holo jotokkhon load hbe loader ke show korar jonno

  return <div>
    {country && <div className="flex justify-around"> 
      {/* country te data ashle tar por render hbe jate error na ashe */}
      <div><img src={country.flags.svg} alt={country.flags.alt} className="w-50"/></div>
      <div>
        <h1>country:{country.name.common}</h1>
        <h1>nativeName: <span>{Object.keys(country.name.nativeName).map((key)=>country.name.nativeName[key].common).join(", ")}</span></h1>
      </div>
      </div>}
  </div>;
};

export default Countrydetails;
