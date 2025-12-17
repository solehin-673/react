import React, { createContext, useState } from 'react'


export const Themecontetxt = createContext()
// theme context name context create kora holo

const Apiwraping = (props) => {

  const [color, setcolor] = useState('bg-amber-200')
  return (
    <div>
        <Themecontetxt.Provider  value={[color, setcolor]} /*value="solehin" for data in navbar*/>
        // themecontext e value rakhle ekhan theke data niye use kora jabe
           {props.children}
           //main.jsx e Apiwraping er karone app apiwrapping er child hoye jay and autometic app er shob kichu as a props pass hoy. tai ekhane props.child call korle app file ekhane render kore
        </Themecontetxt.Provider>

    </div>
  )
}

export default Apiwraping