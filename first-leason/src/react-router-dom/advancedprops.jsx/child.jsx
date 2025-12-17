import { BringToFront } from 'lucide-react'
import React from 'react'

const Child = (recev) => {

  return (
  <button className='bg-green-300 p-3 m-3'
  onClick={()=>{recev.rsetflow("child to parents")}}> click</button>
  )
}

export default Child

// child parent e data send korte pare na , but parent theke data reciev kore evabe change korte pare 
