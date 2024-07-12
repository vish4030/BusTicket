import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [name, setName] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setName(JSON.parse(userInfo).name);
    } else {
      setName(null);
    }
  }, []);

  function logout() {
    localStorage.removeItem('userInfo');
    navigate('/login')
  }



  return (
    <div className="flex justify-between p-2 border-b-2">
      <div className="py-2 px-4">
        <Link to="/" className="pe-4">Home</Link>
      </div>
      <div className="py-2 px-4">
        <Link to="/about" className="pe-4">About</Link>
        <Link to="/contact" className="pe-4">Contact</Link>
        {name !== null ? (
          <>
            <span className="text-2xl pe-3">{name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="pe-4">SignUp</Link>
            <Link to="/login" className="pe-4">LogIn</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
