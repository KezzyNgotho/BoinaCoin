import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wallet from './pages/Wallete';
import Transactions from './pages/Transactions';
import Memes from './pages/Memes';
import { BoinaCoin_backend } from 'declarations/BoinaCoin_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    BoinaCoin_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Boinacoin</h1>
            <div>
              <Link to="/" className="text-white hover:underline mx-2">Home</Link>
              <Link to="/about" className="text-white hover:underline mx-2">About</Link>
              <Link to="/wallet" className="text-white hover:underline mx-2">Wallet</Link>
              <Link to="/transactions" className="text-white hover:underline mx-2">Transactions</Link>
              <Link to="/memes" className="text-white hover:underline mx-2">Memes</Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/memes" element={<Memes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
