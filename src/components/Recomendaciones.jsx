
import React from 'react'


const Recomendaciones = () => {

  const people = [
    {
      name: "Clara Megan",
      avatar: "https://fancytailwind.com/static/avatar-1-7bc2ffc3e63774cda6a41a4869604ebb.png",
      testimony: "Optio, vel officia quas aliquam perspiciatis quod doloremque eos veritatis quisquam reiciendis accusantium quam animi! Ipsa laudantium tempore placeat ad, rem quibusdam.",
      twitterPseudo: "@claramegan"
    },
    {
      name: "Leo Turner",
      avatar: "https://fancytailwind.com/static/avatar-2-a0aa9c1384e34144e1a683fed8612642.png",
      testimony: "Cumque optio atque eius. Veniam maiores neque maxime voluptatibus, id dicta ex saepe esse doloremque, natus sed aperiam ut illum recusandae quia?",
      twitterPseudo: "@leoturner"
    },
    {
      name: "Keith Chambers",
      avatar: "https://fancytailwind.com/static/avatar-3-005377e606b29854c3ff1c525ddd8ec4.png",
      testimony: "Dignissimos nulla eligendi voluptatibus accusantium, ducimus illo voluptate a eveniet fugiat, nam accusamus error? Dolorem debitis excepturi labore accusantium asperiores fuga est!",
      twitterPseudo: "@keithchambers"
    },
    
  ]


  return (
    <div className="relative mx-auto py-5 px-4 w-full max-w-7xl  text-gray-700">
      <div className="flex flex-col items-center">

        {/* :TITLE CONTAINER */}
        <div className="mb-8 px-4">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">Nuestros clientes</h2>
        </div>

        {/* :TESTIMONIALS CONTAINER */}
        <div className="mx-auto w-full max-w-sm sm:max-w-3xl lg:max-w-6xl">
          <ul className="grid grid-cols-6 gap-5">
            {people.map(person => (
              <li key={person.twitterPseudo} className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-button/50">
                {/* ::Card header */}
                <div className="flex items-center space-x-3">
                  {/* :::avatar */}
                  <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                    <img src={person.avatar} alt="" className="object-cover" />
                  </span>
                  <div className="text-left">
                    {/* :::name */}
                    <h3 className="text-base font-semibold">{person.name}</h3>
                    {/* :::pseudo twitter */}
                    <p className="text-sm text-gray-800">{person.twitterPseudo}</p>
                  </div>
                </div>
                {/* ::Card body */}
                <div className="mt-4 flex text-sm">
                  {/* :::testimony */}
                  <p className="text-sm">
                    {person.testimony}
                  </p>
                </div>
              </li>
            ))
            }
          </ul>
        </div>
        <div className="mt-8 w-full">
          <h3 className="mb-3 flex justify-center items-center text-center text-lg text-gray-400 font-extrabold uppercase">
            <span className="mr-3 w-16 h-1 bg-gray-400" />
            Ellos confian en nosotros.
            <span className="ml-3 w-16 h-1 bg-gray-400" />
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Recomendaciones
