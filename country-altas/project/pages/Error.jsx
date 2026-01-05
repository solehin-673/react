import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const Error = () => { 
    const error= useRouteError() // error er moddhe ki ki kaj hoy show kore
    console.log(error);
  return (
    <div>
        <h1>ops! its an error</h1>
        <p>{error.data}</p>
        <NavLink to='/'><button className='bg-amber-300'p-5>go home</button></NavLink>
        // NavLink clickable link create kore, click korle to= given path follow kore
        </div>
  )
}

export default Error