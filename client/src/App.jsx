import { useState, useEffect } from 'react'
import {ethers} from "ethers"
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
        console.log(account);
        setAccount(account);
  
        const provider = new ethers.providers.Web3Provider(ethereum);//read the Blockchain
        const signer = provider.getSigner(); // wirte the blockchain
        
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
          );
  
          setState({provider, signer, contract});
      }
       catch(err) {
        console.error(err);
      }
    }
    template();
  },[]);

  return (
    <>
     
    </>
  )
}

export default App

// Smart contract address: 0xA9a8090f5A7780F95634324dD019A651e0b423a7