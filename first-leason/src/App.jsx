import Card from "./card";
import Data from "./card info";
import Check from "./checkbox";
import Condition from "./conditions";
import Js from "./curly braces";
import Calling from "./function call";
import Header from "./header" // for importing header.jsx file
import Inputs from "./input field";
import Mapping from "./loop";
import Userinfo from "./props";
import Hc from "./props2";
import Info from "./radio and dropdown";
import State from "./state";
import User, {Key, Password, UserName } from "./user"; // multiple import from one file


function apple(){
  
/*
  // props

    // variable
  let roll="03";
  let batch = "d-67"

  // object
  let data ={
        name:"solein",
        age:"20"
      }
  // array
  let sub =["ged","cse","math"]
  */
  return(
    //  multiple html tag should be in a single tag or wrapper
    <div> 
      {/* <Data/> */}
      <Mapping/>
      {/* <Info/> */}
      {/* <Check/> */}
      {/* <Inputs/> */}

      {/* props variable, object and array passing */}
      {/* <Userinfo info={data} rn={roll} bn={batch} course={sub}/> */}


      {/* passing style and html by props
      <Hc br="10px solid green">
        passing style "border"
        <h1 style={{backgroundColor:"yellow"}}>passed successfully</h1>
        set style directly
      </Hc> */}
 
      {/* <Condition/> */}
      {/* <State /> */}
      {/* <Calling/> */}
      {/* <Js/> */}
      {/* <Header />  */}
      {/* header.jsx file er code ekhane execute hbe */}
      {/* <h1> hello there </h1>
      <h2>im solehin.my education life is {education()}</h2> */}

      {/* <Age />  */}
      {/* same file e likha kono component ke evabe include kora hoy */}

      {/* <User />
      <UserName />
      <Password />
      <h2>{Key}</h2>  */}
      {/* variable lekhar syntax */}
    </div>
  )
}

export default apple
// exporting component to another file

// a component starts with capital letter
function Age(){
  return(
    <h1>my age is 23 year</h1>
  )
}

// a function used differently (line 11)
function education(){
  return 10+2+4;
}
