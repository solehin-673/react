import React from 'react'
import {ArrowDownLeft} from 'lucide-react';

export const Leftcontent = () => {
  return (
    <div className='w-1/3 h-full bg-amber-200 flex flex-col justify-between'>
      <div>
        <h1 className='text-6xl font-bold p-5'>Lorem, ipsum dolor.</h1>
        <h3 className='p-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut nemo, voluptates commodi aliquid deserunt.</h3>
      </div>
      <div >
        <ArrowDownLeft className='w-20 h-20' />
      </div>
    </div>
  )
}
export default Leftcontent