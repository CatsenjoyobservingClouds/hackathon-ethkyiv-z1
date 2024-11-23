// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// 

import React, { useEffect, useState } from 'react';
import { setupProvider, getVaultContract } from './web3';
import fhevmjs from 'fhevmjs'; // Hypothetical library for FHE handling

function App() {
  const [amount, setAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setupProvider();
  }, []);

  const handleAddLiquidity = async () => {
    try {
      const vault = getVaultContract();

      // Encrypt the amount
      const encryptedAmount = fhevmjs.encrypt(amount);

      // Call addLiquidity function on the contract
      const tx = await vault.addLiquidity(encryptedAmount);
      await tx.wait();
      setMessage('Liquidity added successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to add liquidity.');
    }
  };

  const handleBorrow = async () => {
    try {
      const vault = getVaultContract();

      // Borrow directly with the amount requested
      const tx = await vault.borrow(borrowAmount);
      await tx.wait();
      setMessage('Borrowed successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to borrow funds.');
    }
  };

  return (
    <div></div>
  )
}


export default App;