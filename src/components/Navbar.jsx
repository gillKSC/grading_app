import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex top-0 justify-between items-center h-24 mx-auto px-16 bg-white font-bold text-orange-800'>
      <h1 className='w-full text-3xl font-extrabold drop-shadow-md text-[#FFB290]'>
        THE MASKED GRADER
      </h1>
      <ul className='hidden md:flex'>
        <Link className='p-4 text-xl' to='/' activestyle='true'>
          Home
        </Link>
        <Link className='p-4 text-xl' to='/Teacher' activestyle='true'>
          Teacher
        </Link>
        <Link className='p-4 text-xl' to='/Student' activestyle='true'>
          Student
        </Link>
        <Link className='p-4 text-xl' to='/Login' activestyle='true'>
          Login
        </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#FFFFFF] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#FFB290] m-4'>MENU</h1>
        <div className='w-60 h-full bg-white px-1 absolute'>
          <ul className='relative'>
            <li className='relative'>
              <a
                className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
                href='/'
                data-mdb-ripple='true'
                data-mdb-ripple-color='dark'
              >
                Home
              </a>
            </li>
            <li className='relative'>
              <a
                className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
                href='/Teacher'
                data-mdb-ripple='true'
                data-mdb-ripple-color='dark'
              >
                Teacher
              </a>
            </li>
            <li className='relative'>
              <a
                className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
                href='/Student'
                data-mdb-ripple='true'
                data-mdb-ripple-color='dark'
              >
                Student
              </a>
            </li>
            <li className='relative'>
              <a
                className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
                href='/Login'
                data-mdb-ripple='true'
                data-mdb-ripple-color='dark'
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
