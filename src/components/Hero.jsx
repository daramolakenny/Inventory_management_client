import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id='home'>
      {/* Hero section */}
    <div className="md:flex md:flex-row md:items-center md:justify-between gap-6 px-16 py-16 bg-linear-to-br from-blue-100 via-white to-blue-50">

      {/* Hero text */}
      <div className="flex flex-col items-start max-w-2xl">

        {/* Small badge */}
        <span className="mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
          ✦ Simple • Smart • Reliable
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Welcome to{" "}
          <span className="text-blue-800">
            MostyStock
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-blue-700">
          Your Simple and Reliable Inventory Management System
        </p>

        <p className="mt-3 max-w-xl text-gray-600 leading-relaxed">
          Manage your inventory, monitor stock levels, track products,
          and keep your business operations organised — all in one place.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link to="/login">
            <button className="rounded-md bg-blue-800 px-6 py-3 text-white shadow-md transition hover:bg-blue-900 hover:-translate-y-0.5">
              Get Started →
            </button>
          </Link>

          <a href="#features">
            <button className="rounded-md border border-blue-800 px-6 py-3 text-blue-800 transition hover:bg-blue-50">
              Explore Features
            </button>
          </a>
        </div>

      </div>

      {/* Inventory preview */}
      <div className="mt-8 w-full max-w-md md:mt-0">

        <div className="rounded-2xl bg-white p-6 shadow-xl">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">
                Inventory Overview
              </h3>
              <p className="text-sm text-gray-500">
                Current stock summary
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
              ● Active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">

            <div className="rounded-lg bg-blue-50 p-3">
              <p className="text-xs text-gray-500">Products</p>
              <p className="mt-1 text-2xl font-bold text-blue-800">
                248
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-3">
              <p className="text-xs text-gray-500">In Stock</p>
              <p className="mt-1 text-2xl font-bold text-green-700">
                215
              </p>
            </div>

            <div className="rounded-lg bg-red-50 p-3">
              <p className="text-xs text-gray-500">Low Stock</p>
              <p className="mt-1 text-2xl font-bold text-red-600">
                18
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Stock level
              </span>
              <span className="text-sm font-semibold">
                86%
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-gray-200">
              <div className="h-2 w-[86%] rounded-full bg-blue-800"></div>
            </div>
          </div>

        </div>

      </div>


    </div>
      <About />
    </div>
  )
}
// <div className='w-full items-center  justify-center'>
//   <div className='lg:max-w-7xl bg-blue-200 my-2 mx-auto shadow-lg'>
//     {/* Heading */}
//     <div className='flex bg-white px-6 justify-between'>
//       <div className='flex space-x-1'>
//         <img src="null" alt="icon" />
//         <h2 className='text-2xl'>MostyStock</h2>
//       </div>

//       <div className=''>
//         <Navlinks />
//       </div>

//       <Link to={'/login'}>
//       <button className='border-blue-400 border px-3 py-1 rounded-md'>Login</button>
//       </Link>
//     </div>
//     {/* Second section */}
//     <div className='md:flex md:flex-row md:justify-between px-6 py-4'>
//       <div className='flex flex-col items-start'>
//         <h2 className='flex items-start text-4xl'>Welcome to MostyStock</h2>
//         <div className='flex flex-col items-start pb-2'>
//           <p className='text-blue-700'>Your Simple and Reliable Inventory Management System</p>
//         <h3 className='text-black pt-2'>Manage your inventory, monitor stock levels, track products, <br /> and keep your business operations organised-all in one place.</h3>
//         </div>
        

//         <Link to={'/login'}>
//         <button className='bg-blue-800 text-white px-6 py-2 rounded'>Get Started </button>
//         </Link>
//       </div>

//       <div><img src="null" alt="Plasma TV" /></div>
//     </div>
//     {/* Third section */}
//     <div></div>
//     {/* forth section */}
//     <div className='md:flex md:flex-row md:justify-between bg-white md:py-4 px-6 py-6 rounded'>
//       <div className='flex sm:py-4 flex-col items-start  text-black'>
//         <h3 className='font-bold'>
//           Ready to Manage Your Inventory Better?
//         </h3>
//         <p className='text-sm'>Create your account and start managing your inventory efficiently.</p>
//       </div>

//       <div className="md:my-10bb">
//         <Link to={'/signup'}>
//         <button className='py-2 px-10 rounded bg-blue-800 text-white'> Register Now</button>
//         </Link>
//         <p className='text-black'>Already have an account? <Link to={'/login'} className='text-blue-800'>Login</Link></p>
//       </div>
//     </div>
//   </div>

//     <About />
// </div>

export default Hero