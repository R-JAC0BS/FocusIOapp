import React from 'react';

const NavigationSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='w-20 h-full p-4 flex flex-col rounded-3xl shadow-md gap-5'
      style={{ backgroundColor: '#2C2C2E' }}
    >
      {children}
    </div>
  );
};

export default NavigationSideBar;