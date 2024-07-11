import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import endPoints from '../constant';

const SignUp = () => {
    const [data, setData] = useState({ fname: "", email: "", age: "", address: "", gender: "", password: "" });
    const [success_msg, setMsg] = useState("message");

    const registerUser = () => {
        axios.post(endPoints.baseUrl + endPoints.signUp, data)
            .then((response) => { setMsg(response.data) })
            .catch((err) => console.log(err))
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') document.getElementById("email").nextElementSibling.innerHTML = "";
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let res = pattern.test(data.email);
        if (!res) {
            let email = document.getElementById("email");
            email.value = "";
            email.nextElementSibling.innerHTML = "Enter valid Email example 'abc1_.@gmail.com' ";
            email.focus();
            return;
        }
        registerUser();
        if (success_msg !== 'Duplicate email')
            setData({ name: "", email: "", age: "", address: "", gender: "", password: "" });
        let popup = document.getElementById('popup');
        popup.classList.remove('opacity-0', 'z-0');
        popup.classList.add('opacity-100', 'z-10');
        setTimeout(function () {
            popup.classList.remove('opacity-100', 'z-10');
            popup.classList.add('opacity-0', 'z-0');
        }, 3000);
    }

    return (
        <div>
            <Navbar />
            <div id="popup" className="z-0 fixed inset-x-1/4 top-10 flex items-center justify-center mb-4 p-4 bg-black text-white rounded shadow-lg opacity-0 transition-opacity duration-300">
                {success_msg}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-400 px-4 pt-4 h-[90vh]">
                <div className="hidden md:block">
                    <img className="w-full h-full object-cover" src="https://via.placeholder.com/800x600" alt="Bus" />
                </div>
                <div className="flex flex-col">
                    <h2 className='text-center text-2xl'>Sign Up Form</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name">FullName:</label>
                                <input className='border border-gray-600 rounded-lg w-full p-2' type="text" id='name' name='name' value={data.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input className='border border-gray-600 rounded-lg w-full p-2' type="email" id='email' name='email' value={data.email} onChange={handleChange} />
                                <span></span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="age">Age:</label>
                                <input className='border border-gray-600 rounded-lg w-full p-2' type="text" id='age' name='age' value={data.age} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input className='border border-gray-600 rounded-lg w-full p-2' type="password" id='password' name='password' value={data.password} onChange={handleChange} autoComplete='off' />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender">Gender:</label>
                            <div>
                                <input className='px-4' type="radio" name='gender' value="Male" checked={data.gender === "Male"} onChange={handleChange} /> <span className='px-2'>Male</span>
                                <input className='px-4' type="radio" name='gender' value="Female" checked={data.gender === "Female"} onChange={handleChange} /> <span className='px-2'>Female</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address">Address:</label>
                            <textarea className='border border-gray-600 rounded-lg w-full p-2' rows="4" id='address' name='address' value={data.address} onChange={handleChange} />
                        </div>
                        
                        <div>
                            <button className='border border-red-600 rounded-lg px-8 py-2' onClick={handleSubmit}>SignUp</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default SignUp;
