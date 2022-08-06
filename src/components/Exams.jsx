import React, { Component } from 'react';

const Exams = () => {
  const Exams = [
    {
      id: 1,
      name: 'History_final',
      href: '#',
      average: '90',
    },
    {
      id: 2,
      name: 'History_mid',
      href: '#',
      average: '85',
    },
    // More products...
  ];

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-[#FFB290]'>
          View all exams
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {Exams.map((Exams) => (
            <div key={Exams.id} className='group relative'>
              <div class='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
                <a href={Exams.href}>
                  <h5 class='mb-2 text-2xl font-bold tracking-tight text-orange-800'>
                    {Exams.name}
                  </h5>
                </a>
                <a
                  href='#'
                  class='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#FFB290] rounded-lg hover:bg-orange-800'
                >
                  See details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
