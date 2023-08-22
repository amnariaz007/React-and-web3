import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function App() {
  const [provider, setProvider] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState('');

  useEffect(() => {
    // Check if Metamask is available
    if (typeof window.ethereum !== 'undefined') {
      // Connect to Metamask
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(web3Provider);
    }
  }, []);

  const connectMetamask = async () => {
    try {
      // Request access to accounts
      const accounts = await provider.send('eth_requestAccounts', []);
      const address = accounts[0];
      setConnectedAddress(address);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  return (
    <div>
      <h1>Metamask Connection Example</h1>
      {connectedAddress ? (
        <p>Connected Address: {connectedAddress}</p>
      ) : (
        <button onClick={connectMetamask}>Connect to Metamask</button>
      )}
    </div>
  );
}

export default App;
