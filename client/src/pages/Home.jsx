import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
  const [input, setInput] = useState({ start: "", destination: "" });
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get("http://localhost:5000/findBus",{params:input}).then(
      (response)=> console.log(response)
    ).catch((err)=>console.log(err))
  }

  const handleChange =(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="start"
          value={input.start}
          onChange={(e) => handleChange(e)}
          placeholder="From"
        />
        <input
          type="text"
          name="destination"
          value={input.destination}
          onChange={(e) => handleChange(e)}
          placeholder="From"
        />
        <br />
        <button onClick={(e)=>handleSubmit(e)}
        >Find Bus</button>
      </form>
    </div>
  );
};

export default Home;
