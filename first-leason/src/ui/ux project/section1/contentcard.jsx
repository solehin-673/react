import React from 'react'
import Rightcontent from './rightcontent'
import Cardstructure from './cardstructure'

const Contentcard = () => {
    const info=[
        {
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLp7c-rysPtqeW-3PWyZDsP7lKz3tT2V3PDg&s",
            num:"1"
        },
        {
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_8InVUxnEIJ7PxkKQYXP4C3OeC_OrE0CQg&s",
            num:"2"
        },
        {
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3J4k64s4ct6lKv4jqA_K6bO_-oqslKWd3g&s",
            num:"3"
        }
    ]
  return ( 
   <div className='flex h-full gap-2 flex-nowrap'>
     { info.map((content)=>{ return <Cardstructure material={content}/>} )} 
   </div>
)
   
    
  
}

export default Contentcard