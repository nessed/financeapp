import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-screen">
      <div className='flex justify-between text-white items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='text-green-300 text-3xl font-bold'>REACT.</h1>
        <ul className='flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>About</li>
        </ul>
        <div>
          <div onClick={handleNav}>
            {!nav ? <AiOutlineClose className='text-white' size={20} /> : <AiOutlineClose className='text-white' size={20} />}
          </div>
        </div>
        <div className='fixed left-0 bg-black top-0 w-[60%] border-r border-r-gray-900 h-full'>
          <h1 className='w-full m-4 text-green-300 text-3xl font-bold'>REACT.</h1>

          <ul className='pt-4 uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
