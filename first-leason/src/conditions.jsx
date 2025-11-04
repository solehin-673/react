import { useState } from "react"

function Condition(){
     const[count,updateCount] = useState(0)
    return(
        <div>
            <h1>{count}</h1>
             <button onClick={()=>updateCount(count + 1)}>Update</button>
        {
        count == 0?<h1>Condition{count}</h1>
        :count == 1?<h1>Condition{count}</h1>
        :count == 2?<h1>Condition{count}</h1>
        :count == 3?<h1>Condition{count}</h1>
        :count == 4?<h1>Condition{count}</h1>
        :<h1>no condition</h1>
        }

        {/* its similar to 
        if(count==0){<h1>condition....</h1>}
        else if(count == 1){<h1>conditon...</h1>} */}
        
        </div>
        
    )
}
export default Condition;