// src/components/TotalSupply.tsx

import React, { useEffect, useState } from 'react';
import { Actor, HttpAgent } from '@dfinity/agent';

const TotalSupply = () => {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  useEffect(() => {
    // Initialize ICPex with your canister ID
    const agent = new HttpAgent();
    const canisterId = '7hnek-5iaaa-aaaam-acnta-cai'; // Replace with your actual canister ID

    const boinaCoinActor = Actor.createActor(boinaCoinIdlFactory, {
      agent,
      canisterId,
    });

    // Fetch the total supply
    const fetchTotalSupply = async () => {
      try {
        const supply = await boinaCoinActor.totalSupply();
        setTotalSupply(supply);
      } catch (error) {
        console.error('Error fetching total supply:', error);
      }
    };

    fetchTotalSupply();
  }, []);

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">BoinaCoin Total Supply</h2>
      {totalSupply !== null ? (
        <p className="text-gray-700">Total supply: {totalSupply} BoinaCoins</p>
      ) : (
        <p className="text-gray-500">Loading total supply...</p>
      )}
    </div>
  );
};

export default TotalSupply;
