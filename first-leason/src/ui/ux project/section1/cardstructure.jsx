import React from 'react'
import { ArrowRight } from "lucide-react";

function Cardstructure({ material }) {
    return (
       
            <div className=" relative rounded-4xl overflow-hidden h-full w-1/3 ">
                <img
                    className="h-full w-full  object-cover"
                    src={material.pic}
                    alt="" />
                <div className="flex  flex-col p-2 absolute top-0">
                    <h1 className="bg-white rounded-full flex justify-center h-10 w-10 items-center font-bold">{material.num}</h1>
                    <h1 className="pt-50 pb-10 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
                        molestias!
                    </h1>
                    <div className="flex justify-between text-white">
                        <h1 className="bg-blue-500 rounded-full p-2">satisfied</h1>
                        <h1 className="bg-blue-500 rounded-full p-2">
                            <ArrowRight />
                        </h1>
                    </div>
                </div>
            </div>
       
    );
}

export default Cardstructure