import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Country from './pages/country'
import Contact from './pages/contact'
import Applayout from './layout/Applayout';
import Error from './pages/Error';
import Countrydetails from './pages/Countrydetails';


// router create kora holo, and applayout er path element as a array of object rakha holo,and as a child baki page gulor component rakha holo , so layout er element shob page ei show korbe

const router = createBrowserRouter([{
    path:'/',
    element:<Applayout/>,
    errorElement:<Error/>, // error hole ei page e chole ashbe
    children:[
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/country',
        element:<Country/>
    },
    {
        path:'/country/:id',
        // dynamic routing ,if we search /country/bangladesg then id=bangladesh
        element:<Countrydetails/>
    },
    {
        path:'/contact',
        element:<Contact/>
    },
]
}])

const Project = () => {
  return (
    <div >
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Project