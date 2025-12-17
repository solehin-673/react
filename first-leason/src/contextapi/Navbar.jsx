import React, { useContext } from 'react'
import { Themecontetxt } from './Apiwraping'

const Navbar = () => {

    const data = useContext(Themecontetxt) //reciving data
    console.log(data);
  return (
    <div className='text-4xl bg-amber-300'>
      {/* {data} */}
    </div>
  )
}

export default Navbar