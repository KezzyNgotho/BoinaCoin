// src/pages/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to Boinacoin</h2>
      <p className="text-xl mb-4">The funniest food meme cryptocurrency!</p>
      <img src="/images/boinacoin-logo.png" alt="Boinacoin Logo" className="mx-auto mb-4" />
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
        Buy Boinacoin
      </button>
    </div>
  );
};

export default Home;
