import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const BusView = () => {
  const location = useLocation();
  const busData = location.state.busData || [];
  const[query, setQuery] =useState({start:"", destination:""})
  const navigate = useNavigate();
  

  const redirectToPassenger = (i)=>{
    navigate('/passenger',{state:{busData:busData[i]}});
  }

  useEffect(()=>{
     setQuery(busData.shift());
  },[])

  const handleClick=(e,i)=>{
    e.preventDefault();
    redirectToPassenger(i);

  }

  // const handleClick = useCallback((e,i)=>{
  //   e.preventDefault();
  //   redirectToPassenger(i);

  // },[])



  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 h-[90vh] ">
        <h2 className="text-4xl font-bold mb-4 text-center">Bus Details</h2>
        <p className="text-3xl font-semibold mb-2 text-center">Bus From {query.start} to {query.destination}</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
          {busData.map((bus, i) => (
            <div key={i} className="w-full">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-100 p-4">
                  <h3 className="text-2xl font-bold text-center">Bus {i + 1}</h3>
                </div>
                <div className="p-4">
                  {Object.entries(bus).map(([key, value]) => (
                    <div key={key} className="flex justify-between mb-4 p-2 border border-gray-300 rounded-lg">
                      <span >{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <span >{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-4 text-center"><button onClick={(e)=>handleClick(e,i)} className="border py-2 px-8 rounded-lg cursor-pointer active:bg-slate-800 active:text-white ">Book</button></div>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </>
  );
};

export default BusView;
