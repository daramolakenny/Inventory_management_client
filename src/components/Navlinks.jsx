import React, { useState } from 'react'
import { nav } from '../data'
import { Link } from 'react-router-dom';
const Navlinks = () => {
    const [ openMenu, setOpenMenu ] = useState(false);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <div className='w-full'>
        {/* <div className='mx-16 flex'>

            <div className=''>MostyStore</div>

            
                <ul className={`lg:flex lg:flex-row space-x-6 cursor-pointer ${openMenu ? 'flex flex-col absolute bg-blue-100 mt-8 px-10 text-gray-800 z-100' : 'hidden'} `}>
                {nav.map((item, id) => (
                    <li 
                        key={id}
                        className='space-x-2 py-2 hover:bg-blue-200 rounded-sm p-2 mb-2'
                    >
                        {item.name}
                    </li>
                ))}
                </ul>

            
            
            <div 
                onClick={handleToggleMenu}
                className='lg:hidden cursor-pointer'
            >{openMenu ? '✕' : '☰'}</div>
        </div> */}
        {/* Navbar */}
        <div className="relative z-50 flex w-full items-center justify-between rounded-xl bg-white/95 px-16 py-4 shadow-md backdrop-blur-sm">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800 text-lg font-bold text-white">
            M
            </div>

            <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Mosty<span className="text-blue-800">Stock</span>
            </h2>
        </Link>

        {/* Navigation */}
        <div>
            <ul className={`lg:flex lg:flex-row space-x-6 cursor-pointer ${openMenu ? 'flex flex-col absolute bg-blue-100 mt-8 px-10 text-gray-800 z-100' : 'hidden'} `}>
                {nav.map((item, id) => (
                    <li 
                        key={id}
                        className='space-x-2 py-2 hover:bg-blue-200 rounded-sm p-2 mb-2'
                    >
                        {item.name}
                    </li>
                ))}
            </ul>            
            
            <div 
                onClick={handleToggleMenu}
                className='lg:hidden cursor-pointer'
            >{openMenu ? '✕' : '☰'}</div>
        </div>

        {/* Login */}
        <Link to="/login">
            <button className="rounded-md border border-blue-800 px-5 py-2 font-medium text-blue-800 transition duration-200 hover:bg-blue-800 hover:text-white">
            Login
            </button>
        </Link>

        </div>
    </div>
  )
}

export default Navlinks