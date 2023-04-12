import React, { useState } from 'react';

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [file, setFile] = useState(null);
  const [plan, setPlan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      file,
      plan,
    });
    // Aquí podrías agregar la lógica para enviar el formulario a tu servidor o enviarlo por correo electrónico.

    // Después de enviar el formulario, podrías reiniciar el estado del formulario para borrar los datos que ingresó el usuario:
    setName('');
    setEmail('');
    setPhone('');
    setFile(null);
    setPlan('');
  };

  return (
    <div className='flex flex-col bg-buttonHover'>
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">
            Contáctanos
        </h1>
        <p className="text-center text-gray-600 mb-8">
            Llena el formulario de contacto y nos pondremos en contacto contigo a la brevedad.
        </p>
        <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-lg items-center flex flex-col">
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium text-gray-700 mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-gray-300 rounded-lg border w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-gray-300 rounded-lg border w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium text-gray-700 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border-gray-300 rounded-lg border w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block font-medium text-gray-700 mb-2">
          Adjuntá tu CV
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border-gray-300 rounded-lg border w-full px-3 py-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="plan" className="block font-medium text-gray-700 mb-2">
          Plan elegido
        </label>
        <select
          id="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="border-gray-300 rounded-lg border w-full px-3 py-2"
        >
          <option value="">Selecciona un plan</option>
          <option value="Plan 1">Plan 1</option>
          <option value="Plan 2">Plan 2</option>
          <option value="Plan 3">Plan 3</option>
        </select>
      </div>
      <button type="submit"
        className="bg-button hover:bg-buttonHover text-white font-bold py-2 px-4 rounded-full">
        Enviar
        </button>
    </form>
    </div>
    
    );
};

export default Contacto;
