import React, { useState } from 'react'
import axios from 'axios';

const Apicall =  () => {
  const [Data, setData] = useState([])
  
    const calling = async()=>{ 
      
        const info =await axios .get('https://picsum.photos/v2/list')

        setData(info.data);
        
    }
  return (
    <div>
      <button onClick={calling}>click</button>
      <div>
      {Data.map(function(elem,idx){
      return(
        <div><h4>{elem.author},{idx}</h4></div>
      )
     })}
      </div>
     
    </div>
  )
}

export default Apicall