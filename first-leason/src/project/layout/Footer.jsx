import React from "react";
import footerdata from "../api/footerdata.json";
import {PhoneCall,MapPin,ClockCheck} from 'lucide-react';

const Footer = () => {
  const footericons={
    PhoneCall:<PhoneCall />,
    MapPin:<MapPin />,
    ClockCheck:<ClockCheck />
  }
  // json theke asha string form er logo gulo ke component convert
  return (
    <div className="flex justify-evenly py-5 ">
      {footerdata.map((footerdata) => {
        const { icon, title, details } = footerdata;
        return (
          <div className="flex gap-2 align-middle">
            <div className="mt-2">{footericons[icon]}</div>
            {/* // map er karone ghure ghure jokhon jei icon er string ashebe oitar component boshbe */}
            <div>
              <p>{title}</p>
              <p>{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
