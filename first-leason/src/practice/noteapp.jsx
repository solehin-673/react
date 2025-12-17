import React, { useState } from "react";

const Noteapp = () => {
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [note, setnote] = useState([])
  function submitted(e) {
    e.preventDefault(e);
    const copynote = [...note]
    copynote.push({title,text})
    setnote(copynote)
    console.log(note);

    settitle("")
    settext("")
    
  }

  return (
    <div className="h-screen bg-black text-white p-5">
      <div className="lg:flex gap-5 h-full">
        <form
          onSubmit={(e) => {
            submitted(e);
          }}
          className="flex flex-col gap-5 lg:w-1/2 lg:border-r-2 p-5"
        >
          <input
            type="text"
            placeholder="title"
            className="border-2"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="enter details"
            className="w-full h-50 border-2 p-5"
            value={text}
            onChange={(e) => {
              settext(e.target.value);
            }}
          ></textarea>
          <button className="border-2 w-full bg-white text-black active:scale-95">
            submit
          </button>
        </form>

        <div className="lg:w-1/2 lg:h-full flex gap-5 flex-wrap overflow-y-auto">
        {
          note.map(function(elem,idx){
            return(
               <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I9Oi6HRVaKZZYRoXyRcW126eLZ6tK9ogvg&s')]
               bg-cover w-40 h-50 rounded text-black p-2 text-3xl">
                <h3>{elem.title}</h3>
                <h5>{elem.text}</h5>
               </div>
            )
          })
        }
         
        </div>
      </div>
    </div>
  );
};

export default Noteapp;
