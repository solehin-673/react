import React from 'react'
import Leftcard from '../card/Leftcard'
import {Ellipsis} from 'lucide-react';

const Left = () => {
  const leftcarddata=[
    {
      icon:"GalleryThumbnails",
      title:"Ai for beginner",
      subtitle:"+120 new learners",
      count:"4,120"
    },
    {
      icon:"SquareDashedBottomCode", 
      title:"Web Development",
      subtitle:"+80 joined recently",
      count:"3,780"
    },
    {
      icon:"FileImage",
      title:"Ui/Ux designer",
      subtitle:"+12 active now",
      count:"2,980"
    },
    {
      icon:"LockOpen",
      title:"Cybersecurity",
      subtitle:"+34 certified today",
      count:"3,420"
    }
  ]
  return (
    <div className=' w-[60%] h-full bg-gray-200 rounded-2xl mr-2 p-2'>
      <div className='flex justify-between mb-10'>
        <div>
          <h1 className='text-[20px] font-semibold'>Top Courses</h1>
          <span className='flex gap-3 text-[13px]'>
            <h1 className='font-extrabold'>178</h1>
            <h1 className='text-gray-500'>Total Courses</h1>
          </span>
        </div>
        <Ellipsis />
      </div>
     
         <Leftcard data={leftcarddata} />
      
     
       
    </div>
  )
}

export default Left