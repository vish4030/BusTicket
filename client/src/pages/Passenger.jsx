import React from 'react'
import { useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar'

const Passenger = () => {

  const location = useLocation();
  const busData = location.state.busData || {};

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 mt-6">
        <form className="bg-white p-6 rounded-lg shadow-md w-2/3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="passengerId" className="block text-gray-700">Passenger ID</label>
                    <input type="text" id="passengerId" className="w-full mt-1 p-2 border rounded-md" value="P01" readOnly />
                </div>
                <div>
                    <label for="busNo" className="block text-gray-700">Bus No</label>
                    <input type="text" id="busNo" className="w-full mt-1 p-2 border rounded-md" value={busData.busNo} readOnly/>
                </div>
                <div>
                    <label for="busName" className="block text-gray-700">Bus Name</label>
                    <input type="text" id="busName" className="w-full mt-1 p-2 border rounded-md" value={busData.busName} readOnly/>
                </div>
                <div>
                    <label for="passengerName" className="block text-gray-700">Passenger Name</label>
                    <input type="text" id="passengerName" className="w-full mt-1 p-2 border rounded-md" placeholder="Passenger Name"/>
                </div>
                <div>
                    <label for="passengerAge" className="block text-gray-700">Passenger Age</label>
                    <input type="number" id="passengerAge" className="w-full mt-1 p-2 border rounded-md" placeholder="Passenger Age"/>
                </div>
                <div>
                    <label for="amount" className="block text-gray-700">Amount</label>
                    <input type="number" id="amount" className="w-full mt-1 p-2 border rounded-md" value={busData.busFare} readOnly/>
                </div>
                <div>
                    <label for="departDate" className="block text-gray-700">Depart Date</label>
                    <input type="text" id="departDate" className="w-full mt-1 p-2 border rounded-md" value={busData.departDate} readOnly/>
                </div>
                <div>
                    <label for="gender" className="block text-gray-700">Gender</label>
                    <select id="gender" className="w-full mt-1 p-2 border rounded-md">
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="mt-6">
                <button type="submit" className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Passenger