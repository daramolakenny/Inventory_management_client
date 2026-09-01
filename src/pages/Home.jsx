import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full items-center  justify-center'>
      <div className='lg:max-w-7xl bg-blue-200 my-2 mx-auto shadow-lg'>
        {/* Heading */}
        <div className='flex bg-white px-6 justify-between'>
          <div className='flex space-x-1'>
            <img src="" alt="icon" />
            <h2 className='text-2xl'>MostyStock</h2>
          </div>

          <Link to={'/login'}>
          <button className='border-blue-400 border px-3 py-1 rounded-md'>Login</button>
          </Link>
        </div>
        {/* Second section */}
        <div className='md:flex md:flex-row md:justify-between px-6 py-4'>
          <div className='flex flex-col items-start'>
            <h2 className='flex items-start text-4xl'>Welcome to MostyStock</h2>
            <div className='flex flex-col items-start pb-2'>
              <p className='text-blue-700'>Your Simple and Reliable Inventory Management System</p>
            <h3 className='text-black pt-2'>Manage your inventory, monitor stock levels, track products, <br /> and keep your business operations organised-all in one place.</h3>
            </div>
            

            <Link to={'/login'}>
            <button className='bg-blue-800 text-white px-6 py-2 rounded'>Get Started </button>
            </Link>
          </div>

          <div><img src="" alt="Plasma TV" /></div>
        </div>
        {/* Third section */}
        <div></div>
        {/* forth section */}
        <div className='md:flex md:flex-row md:justify-between bg-white md:py-4 px-6 py-6 rounded'>
          <div className='flex sm:py-4 flex-col items-start  text-black'>
            <h3 className='font-bold'>
              Ready to Manage Your Inventory Better?
            </h3>
            <p className='text-sm'>Create your account and start managing your inventory efficiently.</p>
          </div>

          <div className="md:my-10bb">
            <Link to={'/signup'}>
            <button className='py-2 px-10 rounded bg-blue-800 text-white'> Register Now</button>
            </Link>
            <p className='text-black'>Already have an account? <Link to={'/login'} className='text-blue-800'>Login</Link></p>
          </div>
        </div>

        {/* <h1>Hello! You are welcome.</h1>  <br />
        <Link to={'/signup'} >
            Click to register.
        </Link>         */}
      </div>
    </div>
  )
}

export default Home