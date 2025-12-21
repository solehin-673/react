import React from 'react'

const Myself = ({rltn}) => {
  return (
    <div className='w-[50%] h-50 border-2 border-gray-700 rounded-2xl'>
        <h1 className='text-3xl text-center'>{rltn.i}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}

export default Myself