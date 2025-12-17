import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const Page1content = () => {
  return (
    <div className='flex gap-10 h-8/10 px-10' >
      <Leftcontent/>
      <Rightcontent/>
    </div>
  )
}

export default Page1content