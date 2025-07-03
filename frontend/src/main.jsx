import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider, createConfig } from 'wagmi'
import {bsc, bscTestnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const config = getDefaultConfig({
  appName: 'MetaGallery',
  projectId: import.meta.env.VITE_WALLET_PROJECT_ID,
  chains: [bsc, bscTestnet],
  ssr: false,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider chains={config.chains}>
          <App />
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
)