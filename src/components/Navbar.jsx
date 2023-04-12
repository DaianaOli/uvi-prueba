
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full z-10 bg-buttonHover text-gray-100 body-font shadow-sm fixed">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-600 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* ::Navbar */}
        <nav className="hidden md:mr-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-8 hover:text-gray-800">Inicio</a>
          <a href="#link" className="mr-8 hover:text-gray-800">Servicios</a>
            <a href="#link" className="mr-8 hover:text-gray-800">Planes</a>
          <a href="#link" className="mr-8 hover:text-gray-800">Contacto</a>
        </nav>
        {/* ::Site logo and Name */}
        <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center md:mb-0">
          <img src='https://res.cloudinary.com/dcpcja2qg/image/upload/v1681314304/logo1_1_2_1_5_li87uo.png' alt='logo-UVI' className='w-10 h-10'/>
        </a>
      </div>

      {/* :MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-200 text-base uppercase text-center font-semibold">
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700">Inicio</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700">Servicios</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700">Planes</a>
          <a href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700">Contacto</a>
        </div>
      }
      
    </header>
  )
}

export default Navbar
