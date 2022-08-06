import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { useRouter } from 'next/router';

const Login = () => {
  const navigate = useNavigate();
  const navigateToSignup = () => {
    // 👇️ navigate to /contacts
    navigate('/Signup');
  };

  // auth
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    let { user, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      alert(error.error_description || error.message);
      console.log(error);
    } else {
      setSubmitted(true);
    }
    if (submitted) {
      let { data, error } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id);
      const role = data.role;
      if (role == 'STUDENT') {
        navigate('/Student');
      } else if (role == 'ADMIN') {
        navigate('/Teacher');
      } else {
        alert(error.error_description || error.message);
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-[#FFB290]'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{' '}
              <a
                onClick={navigateToSignup}
                href='#'
                className='font-medium text-orange-800'
              >
                sign up
              </a>
            </p>
          </div>
          <form className='mt-8 space-y-6' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <a href='#' className='font-medium text-orange-800'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-medium font-bold rounded-md text-white bg-[#FFB290] hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                onClick={login}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
