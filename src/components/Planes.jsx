import React from 'react'

const Planes = () => {

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-center flex-shrink-0 mr-2 h-5 w-5 text-button" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
  const XIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="self-center flex-shrink-0 mr-2 h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )

  return (
    <div className="w-full py-10 px-5 flex flex-col items-center bg-gradient-to-tr from-button to-buttonHover font-body"> {/* Container */}
      
      {/* :TITLE */}
      <div className="mb-16 text-center text-white">
        <h1 className="font-title py-2 text-4xl font-black tracking-wider antialiased">Planes</h1>
        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</p>
      </div>

      {/* :PRICING TABLES */}
      <div className="grid grid-cols-3 gap-6 max-w-7xl">

        {/* ::Offer 1 */}
        <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl">
          {/* Offer name */}
          <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">Basico</h2>
          {/* Price */}
          <div className="p-4 flex items-baseline">
            <h3 className="font-title text-5xl font-bold ">$59</h3>
            <span className="ml-2">/ mes</span>
          </div>
          {/* Divide line */}
          <span className="w-28 h-1.5 bg-buttonHover rounded-3xl"/>
          {/* Features */}
          <ul className="my-12 flex flex-col">
            <li className="mb-4 inline-flex"><CheckIcon/>Donec at tristique.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Nullam sed aliquam eros, ac.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Maecenas dignissim convallis sem vel.</li>
            <li className="mb-4 inline-flex line-through"><XIcon/>In rhoncus.</li>
            <li className="mb-4 inline-flex line-through"><XIcon/>Etiam vulputate eleifend.</li>
            <li className="mb-4 inline-flex line-through"><XIcon/>Lorem ipsum dolor.</li>
          </ul>
          {/* Subscribe */}
          <button className="py-2 px-10 rounded-3xl bg-button text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600">Subscribe</button>
        </div>

        {/* ::Offer 2 */}
        <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl">
          {/* Offer name */}
          <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">Pro</h2>
          {/* Price */}
          <div className="p-4 flex items-baseline">
            <h3 className="font-title text-5xl font-bold ">$119</h3>
            <span className="ml-2">/ mes</span>
          </div>
          {/* Divide line */}
          <span className="w-28 h-1.5 bg-buttonHover rounded-3xl"/>
          {/* Features */}
          <ul className="my-12 flex flex-col">
            <li className="mb-4 inline-flex"><CheckIcon/>Donec at tristique.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Nullam sed aliquam eros, ac.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Maecenas dignissim convallis sem vel.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>In rhoncus.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Etiam vulputate eleifend.</li>
            <li className="mb-4 inline-flex line-through"><XIcon/>Lorem ipsum dolor.</li>
          </ul>
          {/* Subscribe */}
          <button className="py-2 px-10 rounded-3xl bg-button text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600">Subscribe</button>
        </div>
        
        {/* ::Offer 3 */}
        <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-gray-100 text-gray-600 rounded-2xl shadow-xl">
          {/* Offer name */}
          <h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">Premium</h2>
          {/* Price */}
          <div className="p-4 flex items-baseline">
            <h3 className="font-title text-5xl font-bold ">$299</h3>
            <span className="ml-2">/ mes</span>
          </div>
          {/* Divide line */}
          <span className="w-28 h-1.5 bg-buttonHover rounded-3xl"/>
          {/* Features */}
          <ul className="my-12 flex flex-col">
            <li className="mb-4 inline-flex"><CheckIcon/>Donec at tristique.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Nullam sed aliquam eros, ac.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Maecenas dignissim convallis sem vel.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>In rhoncus.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Etiam vulputate eleifend.</li>
            <li className="mb-4 inline-flex"><CheckIcon/>Lorem ipsum dolor.</li>
          </ul>
          {/* Subscribe */}
          <button className="py-2 px-10 rounded-3xl bg-button text-lg text-gray-100 font-medium tracking-wide antialiased shadow-lg transition duration-100 ease-in transform hover:scale-105 hover:bg-sky-600">Subscribe</button>
        </div>

      </div>
      
    </div>
  )
}

export default Planes
