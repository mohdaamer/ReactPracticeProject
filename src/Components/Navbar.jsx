import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='w-full h-[80px] bg-white shadow'>
        <div className="navbar-wrapper md:max-w-[1200px] flex items-center justify-between w-full h-full m-auto max-w-[400px] px-6">

            {/* Logo  */}
            <div className="logo">
            <h3 className='font-bold text-3xl primaryText'>Practice</h3>
            </div>

            {/* Links  */}
            <ul className='hidden md:flex gap-6'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Course</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
            </ul>

            {/* Buttons  */}
            <div className="buttons hidden md:flex gap-6">
               <button>Login</button>
               <button className='bg-[#20B486] px-8 py-3 rounded-lg text-white'>Sign Up For Free</button>
            </div>

            {/* Hamburger  */}
            <div className='md:hidden text-2xl'>
               <AiOutlineMenu />
            </div>
        </div>
    </div>
  )
}

export default Navbar
