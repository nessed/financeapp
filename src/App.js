import logo from './logo.svg';
import './App.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import Laptop from './assets/laptop.jpg'
import Single from './assets/single.png'
import Double from './assets/double.png'
import Triple from './assets/triple.png'



function App() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="bg-black h-screen">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>

      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
          <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
      </div>

      <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
          </div>
        </div>
      </div>

      <div className='w-full py-16 text-white bg-black px-4'>
        <div className='mx-auto max-w-[1240px] grid lg:grid-cols-3'>
          <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimize your flow?</h1>
            <p>Sign up for newsletter and stay up to date.</p>
          </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
              <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Notify Me</button>
            </div>
            <p>We care about the protectoin of your data. Read our <span className='text-[#00df9a] underline'>privacy policy.</span></p>
          </div>
        </div>
      </div>

      <div className='w-full py-[10rem] px-4 bg-white'>
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

  {/* First Card */}
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="." />
      <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
      <p className='text-center text-4xl font-bold'>$149</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 my-8'>500 GB Storage</p>
        <p className='py-2 border-b mx-8'>1 Granted User</p>
        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
    </div>

    {/* Second Card */}
    <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="." />
      <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
      <p className='text-center text-4xl font-bold'>$249</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 my-8'>1 TB Storage</p>
        <p className='py-2 border-b mx-8'>2 Granted Users</p>
        <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
      </div>
      <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Start Trial</button>
    </div>

    {/* Third Card */}
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="." />
      <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
      <p className='text-center text-4xl font-bold'>$349</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 my-8'>2 TB Storage</p>
        <p className='py-2 border-b mx-8'>3 Granted Users</p>
        <p className='py-2 border-b mx-8'>Send up to 6 GB</p>
      </div>
      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
    </div>
  </div>
</div>

      </div>
     
      
 
  );
}

export default App;
