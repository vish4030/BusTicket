import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


import gradientBackground from '../assets/gradient_bg.jpg';
import busImg from '../assets/Designer.png';

const Home = () => {
  const [input, setInput] = useState({ start: "", destination: "" });
  const navigate = useNavigate();

  const redirectToDetails = (busData) => {
    navigate('/busInfo', { state: { busData } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:5000/findBus", { params: input })
      .then((response) => {
        if(response.data.length>0)
          redirectToDetails(response.data);
      })
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  
  

  return (
    <div className="relative bg-cover bg-center h-[90vh] flex flex-row" style={{ backgroundImage: `url(${gradientBackground})` }}>
      <div className="w-1/2 flex justify-center items-center">
        <form className="w-3/4">
          <input
            className="p-3 text-2xl border border-gray-600 rounded-lg mb-2 w-full"
            type="text"
            name="start"
            value={input.start}
            onChange={handleChange}
            placeholder="From"
          /><br/>
          <input
            className="p-3 text-2xl border border-gray-600 rounded-lg mb-2 w-full"
            type="text"
            name="destination"
            value={input.destination}
            onChange={handleChange}
            placeholder="Destination"
          />
          <br />
          <button className="text-2xl border border-green-800 rounded-lg py-2 px-8" onClick={handleSubmit}>Find Bus</button>
        </form>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img className="max-w-full" src={busImg} alt="xyz" />
      </div>
    </div>
  );
};

export default Home;
