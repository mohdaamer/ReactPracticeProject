import React from 'react'
import CountUp from 'react-countup';
import './Hero.css'
import {BsSearch} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='w-full bg-white md:py-24 py-9'>
        <div className="container md:max-w-[1200px] m-auto grid md:grid-cols-2 max-w-[400px] px-6">

            {/* Left  */}
            <div>
                <p className='text-[#20B486] font-medium text-2xl'>START TO SUCCESS</p>
                <h1 className='py-4 text-4xl font-semibold leading-[50px]'>Access To <CountUp start={3000} end={5000} duration={4} className='text-[#20B486]'><span>5000</span></CountUp><span className='text-[#20B486]'>+</span> Courses <br/> from <CountUp start={0} end={300} duration={4} className='text-[#20B486]'><span>300</span></CountUp><span className='text-[#20B486]'>+</span> Instructors & Institutions</h1>
                <p className='py-4 text-gray-500 text-sm'>Various versions have evolved over the years, sometimes by accident,</p>

                <form className='flex justify-between items-center shadow-md rounded-md max-w-[500px] p-2 my-6'>
                  <input type="text" placeholder="What do you want to learn?" className='input w-full' />
                  <BsSearch />
                </form>
            </div>

            {/* Right  */}
            <img src="./images/heroImg.png" className="md:order-last order-first" alt="" />
        </div>
    </div>
  )
}

export default Hero
