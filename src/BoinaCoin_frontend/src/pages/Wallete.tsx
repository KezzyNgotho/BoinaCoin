// src/pages/Wallet.tsx
import React, { useState } from 'react';

const Wallet = () => {
  const [address, setAddress] = useState('');

  const createWallet = () => {
    // Logic to create wallet
  };

  const importWallet = () => {
    // Logic to import wallet
  };

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Wallet</h2>
      <button onClick={createWallet} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">
        Create Wallet
      </button>
      <button onClick={importWallet} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">
        Import Wallet
      </button>
      <p>Your Wallet Address: {address}</p>
    </div>
  );
};

export default Wallet;
