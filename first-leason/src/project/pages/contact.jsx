import React from "react";

const Contact = () => {
  const handleform = (formData)=>{
    console.log(formData.entries());
    // input ke key value pair return kore ["username","solehin"] 
  const formInputData = Object.fromEntries(formData.entries())
  // input ke backend e as a object convert kore return korbe
  console.log(formInputData);
  }
  return (
    <form className="px-[25%] p-10 flex flex-col gap-10" action={handleform}>
      // submit e click korle action kaj korbe.input data ke save kora , input field clear kora

      <h1>Contact us</h1>
      <input
        type="text"
        placeholder="Enter your name"
        name="username"
        className="p-2 border border-gray-700 rounded-[10px] "
      />
      <input
        type="text"
        placeholder="Enter your E-mail"
        name="email"
        className="p-2 border border-gray-700 rounded-[10px] "
      />
      <textarea
        name="massage"
        rows="4"
        placeholder="write your massage"
        className="p-2 border border-gray-700 rounded-[10px] "
      ></textarea>
      <button className="p-2 border border-gray-700 rounded-[10px] ">
        submit
      </button>
    </form>
  );
};

export default Contact;
