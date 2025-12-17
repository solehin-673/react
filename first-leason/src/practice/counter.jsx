import React, { useState } from 'react'

const Counter = () => {
    const [num, setnum] = useState(0)

    function increase(){
        setnum(num+1)
    }

    function decrease(){
        setnum(num-1)
    }
  return (
    
    <div>
        <h1 className='m-10 p-20 w-30 text-5xl bg-amber-200'>{num}</h1>
        <button className='bg-green-300 p-5' onClick={increase}>increase</button>
        <button className='bg-red-400 p-5' onClick={decrease}>decrease</button>
    </div>
  )
}

export default Counter