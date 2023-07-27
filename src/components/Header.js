import React, { useState, useEffect, useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
// import { MdDashboardCustomize } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import ModernLiving from '../assets/img/ModernLiving2.png'


import { GrUserAdmin } from 'react-icons/gr';
import { IoLogOut, IoLogIn } from 'react-icons/io5';

const Header = () => {


  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(true);
  const adminHandler = () => {
    setAdmin(prevState => !prevState);
  }
  const loginHandler = () => {
    // setLoggedIn(localStorage.setItem('loggedIn', true));
    setLoggedIn(prevState => !prevState);
  };


  const logoutHandler = () => {
    // setLoggedIn(localStorage.setItem('loggedIn', false));
    setLoggedIn(prevState => !prevState);
  };

  return (
    <header className='bg-gray-800  mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <div>
          <Link to='/'>
            <img src={ModernLiving} className='h-28 w-60' alt='' />


          </Link>
        </div>




        <div className='flex items-center gap-6'>
          {/* {loggedIn && <Link className='bg-cyan-400 hover:bg-teal-950 text-white px-4 py-3 rounded-lg transition' onClick={adminHandler} to=''><GrUserAdmin /></Link>} */}
          {admin && loggedIn && <Link className='bg-cyan-400 hover:bg-teal-950 text-white px-4 py-3 rounded-lg transition' to='/dashboard'><RxDashboard /></Link>}
          {loggedIn && <Link className='bg-cyan-400 hover:bg-teal-950 text-white px-4 py-3 rounded-lg transition' to=''><FaUserAlt /></Link>}
          {!loggedIn && <Link className='bg-cyan-400 hover:bg-teal-950 text-white px-4 py-3 rounded-lg transition' onClick={loginHandler} to='/login'>Login</Link>}
          {loggedIn && <Link className='bg-red-600 hover:bg-red-800 text-white px-4 py-3 rounded-lg transition' onClick={logoutHandler} to=''><IoLogOut /></Link>}
        </div>
      </div>
    </header>
  );

};

export default Header;
