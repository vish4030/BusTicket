import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import endPoints from '../constant';

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });


    function loginSession(userEmail, username) {
        localStorage.setItem('userId', userEmail);
        localStorage.setItem('username', username);
    }

    const userLogin = async () => {
        try {
            const response = await axios.post(endPoints.baseUrl + endPoints.login, data);
            loginSession(response.data.email, response.data.name);
            console.log(response.data);
        } catch (error) {
            console.error('Login error:', error.message); // Handle login error
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userLogin();
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-400 px-4 pt-4 h-[90vh]">
                <div className="hidden md:block">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x600" alt="Bus" />
                </div>
                <div className="">
                     <div className="w-3/5 mx-auto mt-32">
                         <h2 className='text-center text-2xl'>Login Form</h2>
                        <form className='space-y-4'>
                         <div>
                             <label htmlFor="email">Email:</label>
                             <input className='border border-gray-600 rounded-lg w-full p-2' type="email" id='email' name='email' value={data.email} onChange={handleChange} />
                             <span></span>
                         </div>
                         <div>
                             <label htmlFor="password">Password:</label>
                                <input className='border border-gray-600 rounded-lg w-full p-2' type="password" id='password' name='password' value={data.password} onChange={handleChange} autoComplete='off' />
                         </div>
                         <div>
                               <button className='border border-red-600 rounded-lg px-8 py-2' onClick={handleSubmit}>SignUp</button>
                         </div>
                         </form>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
