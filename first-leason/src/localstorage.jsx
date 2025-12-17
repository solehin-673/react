import React from 'react'

const Localstorage = () => {
    localStorage.setItem('user','solehin') //storing
    localStorage.setItem('age','23')
    const age = localStorage.getItem('age') // getting
    console.log(age)
    localStorage.removeItem('user') // removing
    localStorage.clear(); // clearing

    // object

    //in localStorage data saved as a string, so we need to stringify object and array
    // at the time of getting obj and array we need to convert stringify data into original form
    
    const info = {
      name:"solehin",
      age:23,
      city:"Dhaka"
    }

    localStorage.setItem('info',JSON.stringify(info)) //storing 
    const getinfo = JSON.parse(localStorage.getItem('info')) //getting
    console.log(getinfo);
  return (
    <div>Localstorage</div>
  )
}

export default Localstorage