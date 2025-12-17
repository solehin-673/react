import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Shop from "./shop";
import Error from './Error';
import { Link } from "react-router-dom";
import Men from "./Men";
import Women from "./women";
import Aboutdetails from "./aboutdetails";

const Container = () => {
  return (
    <div>
      <div className="flex justify-around text-4xl">
        {/* //clicable buttons */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">shop</Link>
      </div>

      <Routes>
        {/* create and link path */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:content" element={<Aboutdetails/>} />
        {/* after about we write anything with / it will take us aboutdetails page, and what we write will saved in key what we write after : in this place it is content key */}
        <Route path="/shop" element={<Shop />} >
          <Route path="men" element={<Men />}/>
          <Route path="women" element={<Women/>}/>
        </Route>
        <Route path="*" element={<Error/>}/> 
         {/* jetar jonno path create kora hoy ni emon kichur jonno */}

      </Routes>
    </div>
  );
};

export default Container;
