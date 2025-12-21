
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/home';
import Myself from './component/myself';
import Mother from './component/mother';
import Father from './component/father';
import Brother from './component/brother';

//  const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Home/>
//     },
//      {
//       path:"/myself",
//       element:<Myself/>
//     },
//      {
//       path:"/mother",
//       element:<Mother/>
//     },
//     {
//       path:"/father",
//       element:<Father/>
//     },
//     {
//       path:"/brother",
//       element:<Brother/>
//     }, 
//   ])

const Family = () => {

  return (
    <div>
         {/* <RouterProvider router={router}></RouterProvider> */}
         <Home/>
    </div>
  )
}

export default Family