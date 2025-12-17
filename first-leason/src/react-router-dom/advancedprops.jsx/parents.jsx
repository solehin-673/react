import React, { useState } from 'react'
import Child from './child'

const Parentsprop = () => {
    const [flow, setflow] = useState("parent to child")
  return (
    <div>
        <h1 className='text-6xl'>{flow}</h1>
        <Child rflow={flow} rsetflow={setflow}/>
    </div>
  )
}

export default Parentsprop

// data parent theke child e send kora jay but normally child theke send kora jay na 
// but ekta trics use kora jay , oitar jonno ekhon child e data send kora holo