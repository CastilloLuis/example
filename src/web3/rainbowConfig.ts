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
    alchemyProvider({ apiKey: "rT6vtF_SVXYtDX1aoPa95wG2efK62vI_" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My Pool App',
  projectId: '89833c234c69bb53d52f950e76451c1d',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export { wagmiConfig, chains }
