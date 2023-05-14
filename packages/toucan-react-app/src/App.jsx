import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"
import LandingPage from './Pages/LandingPage'
import DepositPage from './Pages/DepositPage'
import SharePage from './Pages/Share'
import RetireBTCPage from './Pages/RetireBTC'
import "@rainbow-me/rainbowkit/styles.css"
import {
  connectorsForWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import { 
  metaMaskWallet, 
  omniWallet, 
  walletConnectWallet 
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Import known recommended wallets
import { Valora, CeloWallet, CeloDance } from "@celo/rainbowkit-celo/wallets";

// Import CELO chain information
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";
const { chains, provider } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }) })]  
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended with CELO",
    wallets: [
      Valora({ chains }),
      CeloWallet({ chains }),
      CeloDance({ chains }),
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize="compact"  chains={chains} coolMode={true}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LandingPage/>}/>
          <Route path='/home' element={ <LandingPage/>}/>
          <Route path='/deposit' element={ <DepositPage/>}/>
          <Route path='/share' element={ <SharePage/>}/>
          <Route path='/retire' element={ <RetireBTCPage/>}/>
        </Routes>
        </BrowserRouter>
       
      </RainbowKitProvider>
    </WagmiConfig>

    </>
    
    
     
    
  )
}

export default App
