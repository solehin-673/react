import React from 'react'
import Header from './component/Header'
import Body from './component/Body'

const Dashboard = () => {
  return (
    <div className='h-screen w-full bg-gray-300 p-5'>
        <div className='bg-white h-full rounded-2xl p-5 text-black font-semibold'>
            <Header/>
            <Body/>
        </div>
    </div>
  )
}

export default Dashboard