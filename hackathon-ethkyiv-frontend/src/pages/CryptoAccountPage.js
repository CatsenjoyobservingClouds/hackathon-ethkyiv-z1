import React, { useEffect, useState } from 'react';
import { setupProvider } from '../web3.js';
import "../styles/CryptoAccountPage.css"

const CryptoAccountPage = () => {
  const [account, setAccount] = useState({
    name: 'John Doe',
    publicKey: '',
    balance: '',
    assets: [],
  });

  useEffect(() => {
    const fetchAccountDetails = async () => {
      await setupProvider();
      const signer = (await window.ethereum.request({ method: 'eth_accounts' }))[0];
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [signer, 'latest'],
      });

      setAccount((prev) => ({
        ...prev,
        publicKey: signer,
        balance: `${parseInt(balance, 16) / 1e18} ETH`,
        assets: ['ETH', 'USDT'], // Placeholder for assets
      }));
    };

    fetchAccountDetails();
  }, []);

  return (
    <div className="crypto-account">
      <h1>Crypto Account</h1>
      <p><strong>Name:</strong> {account.name}</p>
      <p><strong>Public Key:</strong> {account.publicKey}</p>
      <p><strong>Balance:</strong> {account.balance}</p>
      <p><strong>Assets:</strong> {account.assets.join(', ')}</p>
    </div>
  );
};

export default CryptoAccountPage;
