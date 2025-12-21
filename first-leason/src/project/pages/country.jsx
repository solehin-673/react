import React, { useEffect, useState, useTransition } from "react";

import { getcountrydata } from "../api/postApi";
import { NavLink } from "react-router-dom";
import Filter from "../layout/filter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setcountry] = useState([]);
  const [search, setsearch] = useState("");
  const [filter, setfilter] = useState("all");

  useEffect(() => {
    // startTransition state ke update korar function
    startTransition(async () => {
      const res = await getcountrydata();
      setcountry(res.data);
    });
  }, []);

  const searchcountry = (country) => {
    if (search) {
      return country?.name?.common?.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const region = (country)=>{
      if(filter !== "all"){ return country?.region?.toLowerCase().includes(filter.toLowerCase());}
      return country;
  }
  const filtercountry = country.filter(
    (country) => searchcountry(country) && region(country)
  );

  // is pending holo jotokkhon load hbe loader ke show korar jonno
  if (isPending) return <h1>loading...</h1>;

  return (
    <div>
      <div className="px-[15%]">
        <Filter
          search={search}
          setsearch={setsearch}
          filter={filter}
          setfilter={setfilter}
          country={country}
          setcountry={setcountry}
        />
      </div>
      <div className="flex flex-wrap px-[15%] gap-5 justify-evenly">
        {filtercountry.map((data) => {
          const { name, population, region, capital, flags } = data;
          return (
            <div className="border-2 border-gray-700 rounded-2xl w-[20%] p-5">
              <img src={flags.png} alt={flags.alt} />
              <h1 className="font-bold">{data.name.common}</h1>
              <p>Population:{population}</p>
              <p>Region:{region}</p>
              <p>Capital:{capital}</p>
              <NavLink to={`/country/${name.common}`}>
                <button className="border-gray-700 rounded p-2">
                  read more
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;
