import { FileImage, GalleryThumbnails, LockOpen, SquareDashedBottomCode } from "lucide-react";
import React from "react";

const Leftcard = ({ data }) => {
  const cardicon={
    GalleryThumbnails:<GalleryThumbnails/>,
    SquareDashedBottomCode:<SquareDashedBottomCode/>,
    FileImage:<FileImage/>,
    LockOpen:<LockOpen/>
  }
  return (
    <div className="flex flex-col h-[75%] justify-between">
       {
      data.map((data) => {
        return (
          <div className="h-15 pr-2">
            <div className="float-left p-2">
              {cardicon[data.icon]}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{data.title}</span>
                <span className="text-[13px] text-gray-500">
                  {data.subtitle}
                </span>
              </div>
              <span className="float-right ">{data.count}</span>
            </div>
          </div>
        )
      })
    }
    </div>
   
  );
};

export default Leftcard;
