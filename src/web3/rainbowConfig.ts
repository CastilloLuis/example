import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {optimism} from "viem/chains";

const { chains, publicClient } = configureChains(
  [optimism],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY as string }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My Pool App',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export { wagmiConfig, chains }
