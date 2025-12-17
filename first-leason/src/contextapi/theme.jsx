import React, { useContext } from 'react'
import { Themecontetxt } from './Apiwraping'

const Theme = () => {
  const [color,setcolor]=useContext(Themecontetxt)
 

  function cngtheme(){
    setcolor(" bg-amber-700")
  }
  return (
    <div className={` ${color} p-5 flex flex-col`}>
     hiii
     <button className='bg-gray-600 p-3' onClick={cngtheme}>click</button>
    </div>
    
  )
}

export default Theme