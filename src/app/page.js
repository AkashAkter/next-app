import React from 'react';
import Calculator from './Calculator';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <h1 className="text-5xl font-bold text-white mb-8">Welcome to Your Adventure</h1>
      <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-3 px-8 rounded-full text-xl transform transition duration-300 hover:scale-110 focus:outline-none shadow-lg">
        Start Adventure
      </button>
    
    </div>
  );
}
