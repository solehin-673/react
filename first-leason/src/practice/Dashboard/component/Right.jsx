import React from 'react'
import Rightcard from '../card/Rightcard'

const Right = () => {
  const rightcarddata=[
    {
      title:"Completion rate",
      progress:"65%",
      icon:"SquareArrowUp",
      comment:"8% from last month",
      color:"text-green-600"
    },
    {
      title:"Active instructors",
      progress:"12,639",
      icon:"SquareArrowDown",
      comment:"12% from last month",
      color:"text-red-600"
    }
  ]
  return (
    <div className='w-[40%] h-full'>
        <Rightcard data={rightcarddata}/>
        
    </div>
  )
}

export default Right