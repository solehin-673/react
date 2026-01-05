import React from "react";
import  countryinfo  from "../api/countryData.json";

const About = () => {
  return (
    <div className="px-[15%]">
      <h1 className="text-3xl font-bold text-center p-5">
        Here are the interesting facts we are proud of.
      </h1>
      <div className="flex flex-wrap justify-around gap-5 ">
        {countryinfo.map((country) => {
          const {id,countryName,capital,population,interestingFact} = country;
          return (
            <div className="w-[30%] p-2 border-gray-700 border-2 rounded-2xl" key={id}>
              <h1 className="font-bold text-center">{countryName}</h1>
              <p>
                <span className="text-gray-500">capital:</span>{capital}
              </p>
              <p>
                <span className="text-gray-500">Population:</span>{population}
              </p>
              <p>
                <span className="text-gray-500">Interesting Fact:</span>
                {interestingFact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
