import React from 'react'
// import { MoveRight } from 'lucide';
import {MoveRight} from 'lucide-react';
import About from './about';

const Home = () => {
  return (
    <div>
      <div className='px-[15%] flex gap-5'>
      <div className=''>
      <h1 className='text-4xl font-bold p-5'>Lorem ipsum dolor sit amet.</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis tenetur, saepe ipsum alias quia sit?</h3>
      <button className='bg-gray-700 border-2 rounded-2xl flex gap-2 p-2 mt-5'>Start Exploring <MoveRight /></button>
      </div>
      <img src="/images/world.jpeg" alt="" />
      
    </div>
    <About/>
    </div>
    
  )
}

export default Home