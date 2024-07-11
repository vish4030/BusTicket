import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [name, setName]= useState(null);
  const [flag, setFlag] = useState(false);

  function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    setFlag(true);
}

  useEffect(()=>{
    setName(localStorage.getItem("username"));
  },[flag])
  return (
    <div className="flex justify-between p-2">
        <div className="py-2 px-4">
            <Link to="/" className='pe-4'>Home</Link>
        </div>
        <div className="py-2 px-4">
            <Link to="/about" className='pe-4'>About</Link>
            <Link to="/contact" className='pe-4'>Contact</Link>
            {name !==null ?<> <span className='text-2xl pe-3'>{name}</span>
            <button onClick={()=>{logout()}}>Logout</button></> :<>
            <Link to="/signup" className='pe-4'>SignUp</Link>
            <Link to="/login" className='pe-4'>LogIn</Link>
            </>}
        </div>
    </div>
  )
}

export default Navbar