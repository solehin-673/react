import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Galaryapp = () => {

    const [pic, setpic] = useState([])
    const [index, setindex] = useState(1)

    const getdata=async ()=>{
        const picsum = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
        setpic(picsum.data);
    }

    useEffect(function () {
      getdata()
      
    },[index])
    // jotobar index change hbe getdata() cholbe , index na dile ekbar e cholto 
  return (
    <div className='bg-black h-full overflow-auto text-white'>
      <h1 className='fixed bg-red-500 p-2 rounded-2xl w-7'>{index}</h1>
        {/* <button onClick={getdata} className='bg-green-600 p-3 m-3 rounded '>get data</button> */}
        <div className='flex gap-2 flex-wrap'>
          {pic.map(function(elem){
            return(
              <div className='h-40 w-50 m-2'><img src={elem.download_url} alt="" 
              className='h-[90%] w-full object-cover'/>
              <h3>{elem.author}</h3></div>
            )
          })}
        </div>
        <div className='flex justify-center gap-5'>
          <button className='bg-yellow-300 p-3 m-2 rounded-2xl'
          onClick={()=>{
            if(index>1){
              setindex(index-1)
            }
          }}>prev</button>
          <button className='bg-yellow-300 p-3 m-2 rounded-2xl'
          onClick={()=>{setindex(index+1)}}>next</button>
        </div>
    </div>
  )
}

export default Galaryapp