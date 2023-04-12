
import React from 'react'


const Servicios = () => {
  return (
    <div className="w-full bg-white text-gray-700">
      {/* CONTAINER */}
      <div className="mx-auto py-10 px-4 w-full max-w-7xl grid grid-cols-2">
        {/* :ILLUSTRATION */}
        <div className="order-2 lg:order-1 col-span-1 lg:row-span-2 relative w-full hidden sm:block">
          <img src="https://img.freepik.com/vector-gratis/entrevista-trabajo-online_23-2148644500.jpg?w=740&t=st=1681315587~exp=1681316187~hmac=675bb151e3d5a751d222b83576de728ae3d43cd63389179eb67ea3ec4fc8c3aa" alt="" className="absolute top-0 left-0 w-full h-full object-contain" />
        </div>
        {/* :TITLE */}
        <div className="order-1 lg:order-2 col-span-full sm:col-span-1 row-span-1 mb-8 w-full space-y-4 text-center sm:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">Que ofrecemos?</h2>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam impedit eius at ipsam? Maiores, laudantium adipisci ut reprehenderit quos vitae exercitationem quae laborum, nesciunt explicabo ex omnis praesentium aut mollitia.</p>
        </div>
        {/* :FEATURES */}
        <dl className="order-3 col-span-full lg:col-span-1 row-span-1 w-full grid grid-cols-4 gap-6">
          {/* ::Feature 1*/}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-sky-500">
              <img src="https://img.icons8.com/clouds/256/resume.png" alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">Corrección y confección de CV</dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Corrección y confección de CV</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
            </div>
          </div>

          {/* ::Feature 2 -> 24/7 Support */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-teal-500">
              <img src="https://img.icons8.com/office/256/customer-support.png" alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">24/7 Soporte</dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">24/7 Soporte</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
            </div>
          </div>

          {/* ::Feature 3 -> Special Discount  */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-800">
              <img src="https://img.icons8.com/color/256/talk-show.png" alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">Consejos y simulacros de entrevistas</dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Consejos y simulacros de entrevistas</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
            </div>
          </div>

          {/* ::Feature 4 -> Tour Guide */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-yellow-400">
              <img src="https://img.icons8.com/color/256/find-matching-job.png" alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">Guía de ayuda para la búsqueda de empleo</dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Guía de ayuda para la búsqueda de empleo</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsam quas corporis architecto odio laborum.</dd>
            </div>
          </div>

        </dl>

      </div>
    </div>
  )
}

export default Servicios
