import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';

const Signup = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate('/Login');
  };

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('STUDENT');

  const createAccount = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: {
            first_name: firstName,
            last_name: lastName,
            role: role,
          },
        }
      );
      if (error) throw error;
      // alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  // const router = useRouter();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [role, setRole] = useState("STUDENT");

  // const createAccount = async (e) => {
  //   e.preventDefault();

  //   let { user, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password
  //   });
  //   if (error) {
  //     alert(error.error_description || error.message)
  //     console.log(error);
  //   } else {
  //     addUser(user);
  //   }
  // };

  const addUser = async (user) => {
    let { account, error } = await supabase.from('User').insert([
      {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
      },
    ]);
    if (error) {
      alert(error.error_description || error.message);
      console.log(error);
    } else {
      if (role == 'STUDENT') {
        navigate('/Student');
      } else if (role == 'ADMIN') {
        navigate('/Teacher');
      }
    }
  };

  return (
    <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-[#FFB290]'>
            Sign up here
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or have an account?{' '}
            <a
              href='#'
              onClick={navigateToLogin}
              className='font-medium text-orange-800'
            >
              log in
            </a>
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-700'
            >
              First name
            </label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium text-gray-700'
            >
              Last name
            </label>
            <input
              type='text'
              name='last-name'
              id='last-name'
              autoComplete='family-name'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className='col-span-2'>
            <label
              htmlFor='email-address'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <input
              type='text'
              name='email-address'
              id='email-address'
              autoComplete='email'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='col-span-2'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              autoComplete='password'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='col-span-2'>
            <label
              htmlFor='role'
              className='block text-sm font-medium text-gray-700'
            >
              Are you a:
            </label>
            <select
              name='role'
              id='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value='STUDENT'>Student</option>
              <option value='ADMIN'>Teacher</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-medium font-bold rounded-md text-white bg-[#FFB290] hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={createAccount}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
