import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../index.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    balance: "1000 Boinas",
    recentTransactions: [
      { id: 1, date: "2024-05-20", amount: "-50 Boinas", type: "Debit" },
      { id: 2, date: "2024-05-18", amount: "+100 Boinas", type: "Credit" },
      { id: 3, date: "2024-05-15", amount: "-30 Boinas", type: "Debit" },
    ],
    profile: {
      address: "123 Crypto Lane",
      joinDate: "2023-01-01",
    },
  };

  const balanceData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Balance Over Time',
        data: [300, 500, 700, 500, 1000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const [notifications, setNotifications] = useState([
    "Welcome to BoinaCoin!",
    "Your last transaction was successful.",
  ]);

  const [transactionFilter, setTransactionFilter] = useState("all");

  const filteredTransactions = userInfo.recentTransactions.filter(transaction => 
    transactionFilter === "all" || transaction.type.toLowerCase() === transactionFilter
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold mb-4">BoinaCoin Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#overview" className="block py-2 px-4 hover:bg-blue-700 rounded">Overview</a>
            </li>
            <li className="mb-2">
              <a href="#transactions" className="block py-2 px-4 hover:bg-blue-700 rounded">Transactions</a>
            </li>
            <li className="mb-2">
              <a href="#notifications" className="block py-2 px-4 hover:bg-blue-700 rounded">Notifications</a>
            </li>
            <li>
              <a href="#profile" className="block py-2 px-4 hover:bg-blue-700 rounded">Profile</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Account Balance</h3>
            <p className="text-3xl font-bold">{userInfo.balance}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Balance Chart</h3>
            <Line data={balanceData} />
          </div>
        </section>

        <section id="transactions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
          <div className="mb-4">
            <label className="mr-2">Filter by:</label>
            <select
              className="p-2 border rounded"
              value={transactionFilter}
              onChange={e => setTransactionFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <li key={transaction.id} className="py-2 flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{transaction.date}</p>
                    <p className={`font-bold ${transaction.type === "Debit" ? "text-red-500" : "text-green-500"}`}>
                      {transaction.amount}
                    </p>
                  </div>
                  <p>{transaction.type}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="notifications" className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="divide-y divide-gray-200">
              {notifications.map((notification, index) => (
                <li key={index} className="py-2">
                  {notification}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="profile">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Address:</strong> {userInfo.profile.address}</p>
            <p><strong>Join Date:</strong> {userInfo.profile.joinDate}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
