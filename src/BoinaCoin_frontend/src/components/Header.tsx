// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Boinacoin</h1>
        <nav>
          <Link to="/" className="text-white hover:underline mx-2">Home</Link>
          <Link to="/about" className="text-white hover:underline mx-2">About</Link>
          <Link to="/wallet" className="text-white hover:underline mx-2">Wallet</Link>
          <Link to="/transactions" className="text-white hover:underline mx-2">Transactions</Link>
          <Link to="/memes" className="text-white hover:underline mx-2">Memes</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
