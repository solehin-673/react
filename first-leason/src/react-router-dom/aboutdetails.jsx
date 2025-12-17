import React from 'react'
import { useParams } from 'react-router-dom'

const Aboutdetails = () => {

    const param = useParams()
    // useParams diye about er por /diye jeta likhbo oita ene dibe as a object 
  return (
    <div>{param.content}Aboutdetails</div>
  )
}

export default Aboutdetails