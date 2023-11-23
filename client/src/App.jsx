import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected!');
  useEffect(()=> {
    const template = async () => {
      const contractAddress = "";
      const contractABI = "";
      const {ethereum} = window;
      try {
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        });
  
        setAccount(account);
  
        const provider = new ethers.provider.Web3Provider(ethereum); // read the blockchain 
        const signer = provider.getSigner(); // wirte the blockchain
        
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
          );
  
          setState({provider, signer, contract});
      }
       catch(err) {
        alert(err);
      }
      template();
    }
  },[]);

  return (
    <>
     
    </>
  )
}

export default App
