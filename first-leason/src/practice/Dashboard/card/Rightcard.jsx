import { SquareArrowDown, SquareArrowUp } from "lucide-react";
import React from "react";

const Rightcard = ({ data }) => {
  const leftcardicon = {
    SquareArrowUp: <SquareArrowUp />,
    SquareArrowDown: <SquareArrowDown />,
  };
  return (
    <div className="h-full flex flex-col justify-between gap-3">
      {data.map((data) => {
        return (
          <div className="h-full flex flex-col justify-between bg-gray-200 rounded-2xl p-3">
            <h1 className="text-[20px] ">{data.title}</h1>
            <span>
              <div className={`${data.color} float-left m-2`}>
                {leftcardicon[data.icon]}
              </div>
              <h1 className="text-2xl font-semibold">{data.progress}</h1>
              <h2 className={`${data.color} text-[13px]`}>{data.comment}</h2>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Rightcard;
