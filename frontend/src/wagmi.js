import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { bsc, bscTestnet } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Unveil',
  projectId: import.meta.env.VITE_WALLET_PROJECT_ID,
  chains: [bsc, bscTestnet],
  ssr: false,
})