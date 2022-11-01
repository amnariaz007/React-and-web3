const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


//const rpcURL = "https://goerli.infura.io/v3/07b0f2fe4e234ceea0ff428f0d25326e";
const rpcURL = "http://44.204.237.34:9934";
const web3 = new Web3(rpcURL);


async function signMessage() {
    
    async function loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
        } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
        //loadBlockchainData();
      }
      loadWeb3();
    

    // connect and get metamask account
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

   const hashedMessage = "0x4f6b4ad9666f0b1e0bd4c556d28a4220a754426f11ad64ea05eb6c195a7bb4b6"
    // sign hashed message
    const signature = await ethereum.request({
      method: "personal_sign",
      params: [hashedMessage, accounts[0]],
    });
    console.log({ signature });

    // split signature
    const r = signature.slice(0, 66);
    const s = "0x" + signature.slice(66, 130);
    const v = parseInt(signature.slice(130, 132), 16);
    console.log({ r, s, v });
  }

  signMessage();

  export default function App() {
    return (
        
            <h1> Eth hash sign and verify </h1>
        
    );
  }