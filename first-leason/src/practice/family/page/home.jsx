import React from 'react'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'
import Myself from '../component/myself'
import Mother from '../component/mother'
import Father from '../component/father'
import Brother from '../component/brother'

const Home = () => {
  const rltn ={
    b:"brother",
    f:"father",
    m:"mother",
    i:"myself"
  }
  
  return (
    <div className='h-100vh w-full bg-black text-white'>
      
        <h1 className='text-center text-6xl'>welcome to my family details!!!</h1>
        <div className='px-[20%] flex flex-col gap-10 m-10'>
         {/* <NavLink to="/myself">Myself</NavLink>
         <NavLink to="/mother">Mother</NavLink>
         <NavLink to="/father">Father</NavLink>
         <NavLink to="/brother">Brother</NavLink> */}
         <Myself rltn={rltn}/>
         <Mother  rltn={rltn}/>
         <Father  rltn={rltn}/>
         <Brother  rltn={rltn}/>
        </div>
    </div>
  )
}

export default Home