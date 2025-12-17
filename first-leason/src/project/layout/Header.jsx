import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-[15%] p-5 flex justify-between bg-gray-700 '>
      <h1 className='text-2xl font-bold'>WorldAtlus</h1>
      <ul className='flex '>
        <NavLink to="/" className='px-2'>Home</NavLink>
        <NavLink to="/country" className='px-2'>Country</NavLink>
        <NavLink to="/about" className='px-2'>About</NavLink>
        <NavLink to="/contact" className='px-2'>Contact</NavLink>
      </ul>
    </div>
  )
}

export default Header