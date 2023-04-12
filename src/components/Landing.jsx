
import React from 'react'


const Landing = () => {
  return (
    <div className="relative w-full  flex flex-col justify-center items-center bg-gray-50 overflow-hidden h-screen">
      <div className=" w-full flex flex-col lg:flex-row">
        {/* :HERO MAIN */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600"> {/* Container */}
          {/* ::Hero Inner */}
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* tITULO */}
            <h1 className="py-10 text-3xl sm:text-5xl font-light tracking-wide leading-tight">UVI<br/>Servicios de ayuda <br/>para tu búsqueda.</h1>
            {/* Starting Price */}
            <p className="text-lg font-semibold text-gray-400 tracking-wide">Conocé más sobre nosotros</p>
            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              <button className="m-1.5 py-2.5 px-5 rounded-md bg-button text-white font-semibold uppercase hover:bg-buttonHover">Empieza hoy</button>
              <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-gray-300 text-gray-400 font-semibold uppercase hover:text-button hover:border-button">Mas info</button>
            </div>
          </div>
        </div>
        {/* :HERO ILLUSTRATION */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
          <img src="https://fancytailwind.com/static/8b86283c874a1f43a78c79fe871525ff/d552e/illustration1.webp" alt="" className="w-2/3 lg:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Landing
