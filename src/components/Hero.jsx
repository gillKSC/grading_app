import { Routes, Route, useNavigate } from 'react-router-dom';

import React from 'react';

const Hero = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/Login');
  };

  return (
    <div className='black'>
      <div className='max-w-[1480px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col text-orange-800 justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          an anonymous grading platform
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            for students and instructors.
          </p>
        </div>
        <button
          onClick={navigateToLogin}
          className='bg-[#FFB290] w-[240px] rounded-md font-semibold my-6 mx-auto py-3 text-2xl text-white'
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
