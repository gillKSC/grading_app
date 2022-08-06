import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import { supabase } from './supabaseClient';

const Teacher = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [userid, setUserid] = useState(null);
  const [courseid, setCourseid] = useState(null);
  const [enrollCourse, setenrollCourse] = useState([]);

  useEffect(() => {
    getProfile();
    getCourse();
  }, [session]);

  const getProfile = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let {
        data: stu,
        error,
        status,
      } = await supabase
        .from('users')
        .select(`first, id`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (stu) {
        sessionStorage.setItem('name', stu.first);
        sessionStorage.setItem('id', stu.id);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const getCourse = async () => {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      let {
        data: enroll,
        error,
        status,
      } = await supabase
        .from('course')
        .select(`*, users!inner ( id)`)
        .eq('users.id', user.id);

      if (error && status !== 406) {
        throw error;
      }
      if (enroll) {
        setenrollCourse(enroll);
        console.log(enrollCourse);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  const navigateToExams = () => {
    // 👇️ navigate to /contacts
    navigate('/Exams');
  };

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h3 className='text-xl font-extrabold text-[#FFB290]'>
          hi {sessionStorage.getItem('name')}
        </h3>
        <h2 className='text-2xl font-extrabold tracking-tight text-[#FFB290]'>
          View your courses
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {enrollCourse.map((Courses) => (
            <div key={Courses.id} className='group relative'>
              <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
                <a href={Courses.href}>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-orange-800'>
                    {Courses.name}
                  </h5>
                </a>
                {/* <p className='mb-3 font-normal text-gray-700'>
                  Instructor: {Courses.instructor}
                </p> */}
                <a
                  onClick={navigateToExams}
                  href='#'
                  className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FFB290] rounded-lg hover:bg-orange-800'
                >
                  See exams
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex space-x-2 justify-center'>
        <a
          href='#'
          className='inline-flex items-center py-2 px-3 text-xl font-bold text-center text-white bg-[#FFB290] rounded-lg hover:bg-orange-800'
        >
          Create new exam
        </a>
      </div>
      <div className='flex space-x-2 px-3'>
        <button
          type='button'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FFB290] rounded-lg hover:bg-orange-800'
          onClick={() => (supabase.auth.signOut(), sessionStorage.clear())}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Teacher;
