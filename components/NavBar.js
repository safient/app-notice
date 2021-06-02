import React from 'react';

export const Nav = () => {
  return (
    <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-30  sticky top-0 z-50 text-white'>
      <div class='relative flex items-center justify-between lg:pl-16 lg:mt-10'>
        <img src='/logo.svg' alt='logo' width='100px' />
        <ul class='flex items-center hidden space-x-8 lg:flex'></ul>
      </div>
    </div>
  );
};
