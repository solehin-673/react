import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Shop = () => {
  const navigate = useNavigate();

  function btnclicked (){
    navigate("/")
  }

  // useNavigate ke evabe use kore path diye dile okhene niye jay
   function btnback (){
    navigate(-1)
    // for 1 page back , previous page according to history 
   }

  return (
    
    <div>
      <button className='bg-green-500 p-3 m-2' onClick={btnclicked}>return to home</button>
       <button className='bg-green-500 p-3 m-2' onClick={btnback}>back</button>
      <div className='flex justify-center gap-5'>
        <Link to="/shop/men" >Men</Link> 
        <Link to="/shop/women" >Women</Link>
      </div>
      <Outlet/>
      {/* for showing child routes */}
    </div>

    
  )
}

export default Shop